interface TextFieldProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const TextField: React.FC<TextFieldProps> = ({
  onChange
}): JSX.Element => {
  return (
    <input
      type="text"
      onChange={onChange}
    />
  );
}
