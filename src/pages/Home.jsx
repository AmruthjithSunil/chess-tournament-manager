import { useRef } from "react";

const Home = ({ setPlayers, setGame }) => {
    const textAreaRef = useRef(null);
    const roundInputRef = useRef(null);

    const handleSubmit = () => {
        const players = textAreaRef.current?.value
            .split("\n")
            .filter((val) => val);
        console.log(`players:=${players}.`);
        const rounds = parseInt(roundInputRef.current?.value);
        console.log(`rounds:=${rounds}.`);
        if (!players.length || !rounds) {
            alert("Please enter players and rounds");
            return;
        }
        if (Math.log2(players.length) > rounds) {
            alert("Please enter more rounds");
            return;
        }

        setPlayers(
            players.map((name, index) => ({
                name,
                id: index,
                score: 0,
                winScore: 0,
                tieScore: 0,
            }))
        );
        setGame({
            round: 0,
            prevGames: [],
            currentGame: [],
            totalRounds: rounds,
        });
    };
    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <h1>Home</h1>
            <textarea ref={textAreaRef}></textarea>
            <input ref={roundInputRef} type="number" />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
};

export default Home;
