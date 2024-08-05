/* exported compact */
function compact(array: unknown[]): unknown[] {
  const goodValues = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i]) {
      goodValues.push(array[i]);
    }
  }
  return goodValues;
}
