import { useState } from 'react';

type Props = {
  imageCap: string[];
};

export function ImageCaption({ imageCap }: Props) {
  const [Index, setCurrentIndex] = useState(0);

  function handleClick() {
    if (Index >= imageCap.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(Index + 1);
    }
  }

  return (
    <div>
      <h3 onClick={handleClick}>{imageCap[Index]}</h3>
    </div>
  );
}
