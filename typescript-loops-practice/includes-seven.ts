/* exported includesSeven */

function includesSeven(array: (string | number | boolean | null)[]): boolean {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 7) {
      return true;
    }
  }
  return false;
}
