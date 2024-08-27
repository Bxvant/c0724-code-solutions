import { useState } from 'react';
import './ImageContainer.css';

type Props = {
  imageSrc: string[];
};

export function ImageContainer({ imageSrc }: Props) {
  const [Index, setCurrentIndex] = useState(0);

  function handleClick() {
    if (Index >= imageSrc.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(Index + 1);
    }
  }

  return (
    <div className="d-flex justify-content-center">
      <div className="width-50 ">
        <img
          className="image-fill"
          src={imageSrc[Index]}
          onClick={handleClick}
          alt="space-image"
        />
      </div>
    </div>
  );
}
