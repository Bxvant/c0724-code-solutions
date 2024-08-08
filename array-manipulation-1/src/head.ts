/* exported head */
const fooArray: string[] = ['foo', 'bar', 'baz'];
function head(array: string[]): string {
  return array[0];
}

console.log(head(fooArray));
