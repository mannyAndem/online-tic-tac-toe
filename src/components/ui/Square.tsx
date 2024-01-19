interface SquareProps {
  content: "x" | "o" | null;
  id: number;
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const Square = ({ content, onClick, id }: SquareProps) => {
  return (
    <div
      id={String(id)}
      onClick={onClick}
      className="cursor-pointer bg-black relative rounded-lg flex items-center justify-center "
    >
      {content && (
        <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 uppercase text-6xl font-bold text-yellow-300">
          {content}
        </div>
      )}
    </div>
  );
};

export default Square;
