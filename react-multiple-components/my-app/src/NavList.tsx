type Props = {
  index: string;
};

export function NavList({ index }: Props) {
  return <button>{index}</button>;
}
