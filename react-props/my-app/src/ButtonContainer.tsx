export function ButtonContainer({ btnContainer }: btnProp) {
  return (
    <div>
      <button>{btnContainer}</button>
    </div>
  );
}

type btnProp = {
  btnContainer: string;
};
