import { useState } from 'react';

type Props = {
  quotes: string[];
};

type SearchProps = {
  value: string;
  onChange: (value: string) => void;
};

function Search({ onChange, value }: SearchProps) {
  return (
    <div>
      <input
        type="text"
        onChange={(e) => onChange(e.currentTarget.value)}
        value={value}></input>
    </div>
  );
}

/* function noQuotes({ quotes }: Props) {
  if (quotes.length === 0) {
    return <p>No quotes match this filter</p>;
  }
}
  */
export function SearchableList({ quotes }: Props) {
  const [index, setIndex] = useState('');

  const list = quotes.filter((quote) =>
    quote.toLowerCase().includes(index.toLowerCase())
  );
  console.log(list);
  return (
    <>
      <Search value={index} onChange={setIndex} />
    </>
  );
}
