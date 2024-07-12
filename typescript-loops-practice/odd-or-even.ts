/* exported oddOrEven */

function oddOrEven(numbers: number[]): string[] {
  const result: string[] = [];

  for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];
    result.push(num % 2 === 0 ? 'even' : 'odd');
  }

  return result;
}
