const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const names = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna',
];

function isEven(number: number): boolean {
  return number % 2 === 0;
}

const evenArray = numbers.filter(isEven);
console.log('value of even Array ', evenArray);

const noDdNames = names.filter(
  (name) => !name.includes('D') && !name.includes('d')
);

console.log('value of no DdNames ', noDdNames);
