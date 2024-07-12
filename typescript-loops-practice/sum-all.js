'use strict';
/* exported sumAll */
function sumAll(numbers) {
  let sum = 0;
  for (const number of numbers) {
    sum += number;
  }
  return sum;
}
const sumOfNumbers = sumAll([1, 2, 3]);
console.log('value of sumOfNumbers:', sumOfNumbers);
