import { useRef } from "react";

const Home = ({setPlayers}) => {
    const textAreaRef = useRef(null);

    const handleSubmit = () => {
        const players = textAreaRef.current?.value.split("\n").filter(val => val);
        console.log(`players:=${players}.`);
        setPlayers(players);
    }
    return (
        <div>
            <h1>Home</h1>
            <textarea ref={textAreaRef}></textarea>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
};

export default Home;
