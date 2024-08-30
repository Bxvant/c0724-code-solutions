import { useState } from 'react';
import { NextButton } from './NextButton';
import { PrevButton } from './PrevButton';
import { NavList } from './NavList';

type Props = {
  items: string[];
};

export function RotatingBanner({ items }: Props) {
  const [index, setIndex] = useState(0);

  function goNext() {
    setIndex((index + 1) % items.length);
  }

  function goBack() {
    if (index - 1 < 0) {
      setIndex(items.length - 1);
    } else {
      setIndex(index - 1);
    }
  }

  function HandleSetIndex(numIndex: number) {
    setIndex(numIndex);
  }

  return (
    <div>
      <h1>{items[index]}</h1>
      <div>
        <PrevButton onPrevBtnClick={goBack} />
      </div>
      <div>
        <NavList onNavClick={HandleSetIndex} number={items.length} />
      </div>
      <div>
        <NextButton onNextBtnClick={goNext} />
      </div>
    </div>
  );
}
