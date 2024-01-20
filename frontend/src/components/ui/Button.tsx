import { PropsWithChildren } from "react";

type ButtonProps = {
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  label: string;
};

const Button = ({ onClick, label }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="py-3 px-6 rounded-lg bg-yellow-400 text-white text-2xl font-bold shadow-lg"
    >
      {label}
    </button>
  );
};

export default Button;
