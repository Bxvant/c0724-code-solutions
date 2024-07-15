/* exported compact */

function compact(array: any[]): any[] {
  const goodValues: any[] = [];
  for (let i = 0; i < array.length; i++) {
    const value = array[i];
    if (
      value !== false &&
      value !== null &&
      value !== undefined &&
      value !== '' &&
      !Number.isNaN(value) &&
      value !== 0
    ) {
      goodValues.push(value);
    }
  }
  return goodValues;
}
