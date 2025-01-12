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

    const [game, setGame] = useState(
        localStorage.getItem("game")
            ? JSON.parse(localStorage.getItem("game"))
            : {
                  round: 0,
                  prevGames: [],
                  currentGame: [],
                  totalRounds: 0,
              }
    );

    useEffect(() => {
        localStorage.setItem("players", JSON.stringify(players));
        if (players.length && page === "home") {
            setPage("play");
        } else if (!players.length && page === "play") {
            setPage("home");
        }
    }, [players]);

    useEffect(() => {
        localStorage.setItem("game", JSON.stringify(game));
    }, [game]);

    if (page === "home") {
        return <Home setPlayers={setPlayers} setGame={setGame} />;
    } else {
        return <Play game={game} players={players} setPlayers={setPlayers} />;
    }
}

export default App;
