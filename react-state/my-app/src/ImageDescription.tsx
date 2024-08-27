import { useState } from 'react';

type Props = {
  imageDescrip: string[];
};

export function ImageDescription({ imageDescrip }: Props) {
  const [Index, setCurrentIndex] = useState(0);

  function handleClick() {
    if (Index >= imageDescrip.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(Index + 1);
    }
  }

  return (
    <div>
      <p onClick={handleClick}>{imageDescrip[Index]} </p>
    </div>
  );
}
