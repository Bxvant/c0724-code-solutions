/* exported sumAll */

function sumAll(numbers: number[]): number {
  let sum: number = 0;
  for (const number of numbers) {
    sum += number;
  }
  return sum;
}

const sumOfNumbers: number = sumAll([1, 2, 3]);
console.log('value of sumOfNumbers:', sumOfNumbers);
