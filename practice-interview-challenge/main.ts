interface Range {
  total: number;
  odds: number[];
  evens: number[];
  range: number[];
  average: number;
}

function getRangeReport(start: number, end: number): Range {
  let total = 0;
  const odds: number[] = [];
  const evens: number[] = [];
  const range: number[] = [];

  for (let i = start; i <= end; i++) {
    range.push(i);
    total += i;

    if (i % 2 === 0) {
      evens.push(i);
    } else {
      odds.push(i);
    }
  }

  const average = total / range.length;

  return {
    total,
    odds,
    evens,
    range,
    average,
  };
}

console.log(getRangeReport(5, 10));
