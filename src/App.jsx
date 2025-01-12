import { useEffect, useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import Play from "./pages/Play";

function App() {
    const [page, setPage] = useState("home");
    const [players, setPlayers] = useState(
        localStorage.getItem("players")
            ? JSON.parse(localStorage.getItem("players"))
            : []
    );

    useEffect(() => {
        localStorage.setItem("players", JSON.stringify(players));
        if (players.length && page === "home") {
            setPage("play");
        } else if (!players.length && page === "play") {
            setPage("home");
        }
    }, [players]);
    if (page === "home") {
        return <Home setPlayers={setPlayers} />;
    } else {
        return <Play players={players} setPlayers={setPlayers} />;
    }
}

export default App;
