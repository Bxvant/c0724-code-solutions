type Props = {
  onNavClick: (numIndex: number) => void;
  number: number;
};

export function NavList({ onNavClick, number }: Props) {
  const buttons = [];
  for (let i = 0; i < number; i++) {
    buttons.push(
      <button onClick={() => onNavClick(i)} key={i}>
        {i}
      </button>
    );
  }
  return <div> {buttons} </div>;
}
