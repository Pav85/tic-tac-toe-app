import React from "react";
import Game from "./components/game/Game";
import "./static/style/main.css";

const App = () => {
  return (
    <div>
      <h1>Tic Tac Toe</h1>
      <Game />;
    </div>
  );
};

export default App;
