/* exported getLastElement */

const array5: string[] = ['foo', 'bar', 'baz'];

function getLastElement(array: string[]): string {
  return array.at(-1) as string;
}

const getLastElementResult: string = getLastElement(array5);
console.log('value of getLastElementResult:', getLastElementResult);
