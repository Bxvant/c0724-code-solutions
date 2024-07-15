/* exported getElementAtIndex */

const array3: string[] = ['foo', 'bar', 'baz'];

function getElementAtIndex(array: string[], index: number): string {
  return array[index];
}

const getElementAtIndexResult: string = getElementAtIndex(array3, 1);

console.log('value of getElementAtIndexResult:', getElementAtIndexResult);
