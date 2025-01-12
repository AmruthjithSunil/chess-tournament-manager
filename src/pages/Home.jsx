import { useRef } from "react";

const Home = ({ setPlayers }) => {
    const textAreaRef = useRef(null);

    const handleSubmit = () => {
        const players = textAreaRef.current?.value
            .split("\n")
            .filter((val) => val);
        console.log(`players:=${players}.`);
        setPlayers(
            players.map((name, index) => ({
                name,
                id: index,
                score: 0,
                winScore: 0,
                tieScore: 0,
            }))
        );
    };
    return (
        <div>
            <h1>Home</h1>
            <textarea ref={textAreaRef}></textarea>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
};

export default Home;
