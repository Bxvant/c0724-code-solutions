type Props = {
  label: string;
  onButtonClick: () => void;
};

export function ButtonContainer({ onButtonClick, label }: Props) {
  return (
    <div>
      <button onClick={onButtonClick}>{label}</button>
    </div>
  );
}
