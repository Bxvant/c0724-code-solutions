/* exported countdown */

function countdown(num: number): number[] {
  const array: number[] = [];
  for (let i = num; i >= 0; i--) {
    array.push(i);
  }
  return array;
}

const countdownResult: number[] = countdown(5);
console.log('value of countdownResult:', countdownResult);
