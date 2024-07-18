import React, { useState } from "react";
import Square from "../square/Square";

const Board = ({ player }) => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(player === "X");

  const handleClick = (index) => {
    const newSquares = squares.slice();
    if (calculateWinner(squares) || squares[index]) {
      return;
    }
    newSquares[index] = xIsNext ? "X" : "O";
    setSquares(newSquares);
    setXIsNext(!xIsNext);
  };

  const renderSquare = (index) => {
    return (
      <Square
        key={index}
        value={squares[index]}
        onClick={() => handleClick(index)}
      />
    );
  };

  const winner = calculateWinner(squares);
  const isDraw = !winner && squares.every((square) => square !== null);
  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else if (isDraw) {
    status = "It's a draw!";
  } else {
    status = `Next player: ${xIsNext ? "X" : "O"}`;
  }

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board">
        {squares.map((_, index) => renderSquare(index))}
      </div>
    </div>
  );
};

const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let line of lines) {
    const [a, b, c] = line;
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

export default Board;
