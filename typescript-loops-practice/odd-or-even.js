'use strict';
/* exported oddOrEven */
function oddOrEven(numbers) {
  const result = [];
  for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];
    result.push(num % 2 === 0 ? 'even' : 'odd');
  }
  return result;
}
