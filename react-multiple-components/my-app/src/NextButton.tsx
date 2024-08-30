type Props = {
  onNextBtnClick: () => void;
};

export function NextButton({ onNextBtnClick }: Props) {
  return (
    <div>
      <button onClick={onNextBtnClick}>Next</button>
    </div>
  );
}
