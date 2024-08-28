type Props = {
  color: string;
  onButtonClick: () => void;
};

export function HotButton({ onButtonClick, color }: Props) {
  return (
    <div>
      <button className={'color' + color} onClick={onButtonClick}>
        Hot Button
      </button>
    </div>
  );
}
