import { useEffect, useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import Play from "./pages/Play";

function App() {
    const [page, setPage] = useState("home");
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        players.length && page === "home" && setPage("play");
    }, [players]);
    if (page === "home") {
        return <Home setPlayers={setPlayers} />;
    } else {
        return <Play />;
    }
}

export default App;
