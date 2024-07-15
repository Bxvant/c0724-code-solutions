/* exported getAverageOfThreeNumbers */

function getAverageOfThreeNumbers(x: number, y: number, z: number): number {
  return (x + y + z) / 3;
}

const getAverageOfThreeNumbersResult: number = getAverageOfThreeNumbers(
  2,
  4,
  6
);
console.log(
  'value of getAverageOfThreeNumbersResult:',
  getAverageOfThreeNumbersResult
);
