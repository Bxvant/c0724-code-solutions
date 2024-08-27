export function ImageCaption({ caption }: CaptionProp) {
  return (
    <div>
      <h3>{caption}</h3>
    </div>
  );
}

type CaptionProp = {
  caption: string;
};
