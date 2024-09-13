import { useCallback, useEffect, useState } from 'react';

type Data = {
  foo: string;
};

export function Counter() {
  const [data, setData] = useState<Data>();
  const [counter, setCounter] = useState(0);

  const cachedData = useCallback(() => {
    return { foo: 'bar' };
  }, []);

  useEffect(() => {
    const data = cachedData();
    setData(data);
    setCounter((prev) => prev + 1);
  }, [cachedData]);

  return (
    <div>
      Fetched {JSON.stringify(data)} {counter} times
    </div>
  );
}
