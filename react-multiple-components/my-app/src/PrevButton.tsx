type Props = {
  onPrevBtnClick: () => void;
};

export function PrevButton({ onPrevBtnClick }: Props) {
  return <button onClick={onPrevBtnClick}>Previous</button>;
}
