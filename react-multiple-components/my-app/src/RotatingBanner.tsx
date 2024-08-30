import { NextButton } from './NextButton';
import { PrevButton } from './PrevButton';
import { NavList } from './NavList';

type Props = {
  items: string[];
};

export function RotatingBanner({ items }: Props) {
  return (
    <div>
      <h1 className="list">{items[0]}</h1>
      <div>
        <PrevButton />
      </div>
      <div>
        <NavList index="0" />
        <NavList index="1" />
        <NavList index="2" />
        <NavList index="3" />
        <NavList index="4" />
        <NavList index="5" />
      </div>
      <div>
        <NextButton />
      </div>
    </div>
  );
}
