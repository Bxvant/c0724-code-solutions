/* exported getIndexes */

function getIndexes(array: unknown[]): unknown[] {
  const indexes: number[] = [];
  for (let i = 0; i < array.length; i++) {
    indexes.push(i);
  }
  return indexes;
}

const getIndexesResult: unknown[] = getIndexes([
  'meow',
  'woof',
  'squeak',
  'shazoo',
]);

console.log(getIndexesResult);
