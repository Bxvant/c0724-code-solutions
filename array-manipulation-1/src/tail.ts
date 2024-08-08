/* exported tail */
const bazArray: string[] = ['foo', 'bar', 'baz'];
function tail(array: string[]): string[] {
  const newArray: string[] = [];
  for (let i = 1; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}

console.log(tail(bazArray));
