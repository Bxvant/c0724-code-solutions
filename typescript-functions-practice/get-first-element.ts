/* exported getFirstElement */

const array: string[] = ['foo', 'bar', 'baz'];
function getFirstElement(array: string[]): string {
  return array[0];
}

const getFirstElementResult: string = getFirstElement(array);
console.log('value of getFirstElementResult:', getFirstElementResult);
