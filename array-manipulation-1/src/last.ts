/* exported last */
const barArray: string[] = ['foo', 'bar', 'baz'];

function last(array: string[]): string {
  return array[array.length - 1];
}

console.log(last(barArray));
