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
                havePlayedWith: [],
            }))
        );
        setGame({
            round: 1,
            prevGames: [],
            currentGame: [],
            totalRounds: rounds,
        });
    };
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <div>
                Players
                <textarea ref={textAreaRef}></textarea>
            </div>
            <div>
                Round
                <input ref={roundInputRef} type="number" />
            </div>
            <button
                onClick={handleSubmit}
                style={{ width: "fit-content", marginTop: "10px" }}
            >
                Submit
            </button>
        </div>
    );
};

export default Home;
