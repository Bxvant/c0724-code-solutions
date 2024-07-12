/* exported getLengthOfArray */

const array4: string[] = ['foo', 'bar', 'baz'];

function getLengthOfArray(array: string[]): number {
  return array.length;
}

const getLengthOfArrayResult: number = getLengthOfArray(array4);
console.log('value of getLengthOfArrayResult:', getLengthOfArrayResult);
