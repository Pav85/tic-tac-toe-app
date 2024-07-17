import React, { useState } from "react";
import Square from "../square/Square";

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const handleClick = (index) => {
    const newSquares = squares.slice();
    if (calculateWinner(squares) || squares[index]) {
      return;
    }
    newSquares[index] = xIsNext ? "X" : "O";
    setSquares(newSquares);
    setXIsNext(!xIsNext);
  };

  return <div>Board</div>;
};

export default Board;
