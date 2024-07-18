import React from "react";
import Board from "../board/Board";

const Game = ({ player }) => {
  return (
    <div className="game">
      <Board player={player} />
    </div>
  );
};

export default Game;
