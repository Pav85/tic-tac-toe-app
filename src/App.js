import React, { useState } from "react";
import Game from "./components/game/Game";
import "./static/style/main.css";

const App = () => {
  const [player, setPlayer] = useState(null);

  const handlePlayerChoice = (choice) => {
    setPlayer(choice);
  };

  return (
    <div className="App">
      <h1>Tic Tac Toe</h1>
      {player === null ? (
        <div className="player-choice">
          <h2>Choose your player</h2>
          <button className="square" onClick={() => handlePlayerChoice("X")}>
            X
          </button>
          <button className="square" onClick={() => handlePlayerChoice("O")}>
            O
          </button>
        </div>
      ) : (
        <Game player={player} />
      )}
    </div>
  );
};

export default App;
