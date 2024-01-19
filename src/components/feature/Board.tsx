import { useEffect, useState } from "react";
import Square from "../ui/Square";

const Board = () => {
  const [gameArr, setGameArr] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);

  const [winner, setWinner] = useState(null);
  const [currentPlayer, setCurrentPlayer] = useState("x");

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    handlePlay(+(e.target as HTMLDivElement).id);
  };

  const isPlayValid = (index: number) => {
    if (gameArr[index]) {
      return false;
    }

    return true;
  };

  const checkWin = () => {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let combination of winningCombinations) {
      if (!gameArr[combination[0]]) {
        return false;
      }

      if (
        gameArr[combination[0]] === gameArr[combination[1]] &&
        gameArr[combination[1]] === gameArr[combination[2]]
      ) {
        setWinner(gameArr[combination[0]]);
        return true;
      }
    }

    return false;
  };

  const swapPlayers = () => {
    setCurrentPlayer((prev) => (prev === "x" ? "o" : "x"));
  };

  const handlePlay = (index: number) => {
    if (!isPlayValid(index)) {
      return;
    }

    setGameArr((prev) =>
      prev.map((item, i) => (index == i ? currentPlayer : "x"))
    );
    swapPlayers();
  };

  useEffect(() => {
    checkWin();
  }, [gameArr]);

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-slate-700">
      <div className="w-[400px] h-[400px] grid grid-cols-3 gap-4">
        {gameArr.map((item, index) => (
          <Square key={index} id={index} content={item} onClick={handleClick} />
        ))}
      </div>
    </div>
  );
};

export default Board;
