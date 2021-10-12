interface ButtonProps {
  text: string,
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
}): JSX.Element => {
  return (
    <button
      type="button"
      onClick={onClick}
    >
      {text}
    </button>  
  );
}
