const Play = ({ players, setPlayers }) => {
    return (
        <div>
            <h1>Play</h1>
            <button onClick={() => setPlayers([])}>Reset</button>
        </div>
    );
};

export default Play;
