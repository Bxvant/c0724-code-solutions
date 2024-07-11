/* exported findIndex */

function findIndex(
  array: (string | number | boolean | null)[],
  value: string | number | boolean | null
): number {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return i;
    }
  }
  return -1;
}
