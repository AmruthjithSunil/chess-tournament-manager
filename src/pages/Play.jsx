const Play = ({ players, setPlayers, game, setGame }) => {
    const orderedPlayers = players.sort((a, b) => {
        if (a.score !== b.score) {
            return a.tieScore - b.tieScore;
        }
        if (a.winScore !== b.winScore) {
            return a.winScore - b.winScore;
        }
        if (a.tieScore !== b.tieScore) {
            return a.tieScore - b.tieScore;
        }
        return a.id - b.id;
    });

    const oddPlayers = orderedPlayers.filter((_, index) => index % 2 !== 0);
    const evenPlayers = orderedPlayers.filter((_, index) => index % 2 === 0);

    const currentGame = [];
    for (let i = 0; i < oddPlayers.length; i++) {
        for (let j = 0; j < evenPlayers.length; j++) {
            if (oddPlayers[i].havePlayedWith.includes(evenPlayers[j].id)) {
                continue;
            }
            currentGame.push([oddPlayers[i], evenPlayers[j]]);
            evenPlayers.splice(j, 1);
            break;
        }
    }

    setGame((prev) => {
        prev.currentGame = currentGame;
        return prev;
    });

    return (
        <div>
            <h1>Round {game.round}</h1>
            {currentGame.map(([player1, player2], index) => (
                <div key={index}>
                    <div>
                        {player1.name} vs {player2.name}
                    </div>
                    <div>
                        <button
                            onClick={() => {
                                player1.score += 1;
                                player1.winScore += 1;
                                player2.score -= 1;
                                player2.tieScore -= 1;
                                player1.havePlayedWith.push(player2.id);
                                player2.havePlayedWith.push(player1.id);
                                setPlayers([...players]);
                            }}
                        >
                            {player1.name} wins
                        </button>
                        <button
                            onClick={() => {
                                player1.score -= 1;
                                player1.tieScore -= 1;
                                player2.score += 1;
                                player2.winScore += 1;
                                player1.havePlayedWith.push(player2.id);
                                player2.havePlayedWith.push(player1.id);
                                setPlayers([...players]);
                            }}
                        >
                            {player2.name} wins
                        </button>
                    </div>
                </div>
            ))}
            <button style={{
                display: "block",
                margin: "auto",
                marginTop: "10px",
            }}>Next</button>
            <button onClick={() => setPlayers([])}>Reset</button>
        </div>
    );
};

export default Play;
