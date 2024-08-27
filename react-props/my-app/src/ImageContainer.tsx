import './ImageContainer.css';

type imgProp = {
  src: string;
};

export function ImageContainer({ src }: imgProp) {
  return (
    <div className="d-flex justify-content-center">
      <div className="width-50 ">
        <img className="image-fill" src={src} alt="space-image" />
      </div>
    </div>
  );
}
