import { useEffect, useState } from "react";
import Square from "../ui/Square";
import Button from "../ui/Button";

type Player = "x" | "o";

type GameArr = (Player | null)[];

const Board = () => {
  const [gameArr, setGameArr] = useState<GameArr>([
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

  const [winner, setWinner] = useState<Player | null>(null);
  const [currentPlayer, setCurrentPlayer] = useState<Player>("x");

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    handlePlay(+(e.target as HTMLDivElement).id);
  };

  const isPlayValid = (index: number) => {
    if (winner) {
      return;
    }
    if (gameArr[index]) {
      return false;
    }

    return true;
  };
  const beginGame = () => {
    setGameArr([null, null, null, null, null, null, null, null, null]);
    setWinner(null);
    setCurrentPlayer("x");
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
      prev.map((item, i) => (index == i ? currentPlayer : item))
    );
    swapPlayers();
  };

  useEffect(() => {
    checkWin();
  }, [gameArr]);

  return (
    <div className="w-screen h-screen flex items-center flex-col justify-center bg-slate-700 gap-8">
      {winner ? (
        <p className="text-3xl text-yellow-400 font-medium">
          {winner.toUpperCase()} has won the game!
        </p>
      ) : (
        <p className="text-3xl text-yellow-400 font-medium">
          {currentPlayer.toUpperCase()}'s turn
        </p>
      )}
      <div className="w-[400px] h-[400px] grid grid-cols-3 gap-4">
        {gameArr.map((item, index) => (
          <Square key={index} id={index} content={item} onClick={handleClick} />
        ))}
      </div>
      <div className="flex gap-4">
        <Button label="Play" onClick={beginGame} />
        {/* <Button label="Exit" /> */}
      </div>
    </div>
  );
};

export default Board;
