export function ImageDescription({ descr }: descrProp) {
  return (
    <div>
      <p>{descr}</p>
    </div>
  );
}

type descrProp = {
  descr: string;
};
