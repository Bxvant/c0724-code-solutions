/* exported getSecondElement */
const array2: string[] = ['foo', 'bar', 'baz'];
function getSecondElement(array: string[]): string {
  return array[1];
}

const getSecondElementResult: string = getFirstElement(array2);
console.log('value of getFirstElementResult:', getSecondElementResult);
