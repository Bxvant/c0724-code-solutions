export function Header({ text }: headerProp) {
  return <h1>{text}</h1>;
}

type headerProp = {
  text: string;
};
