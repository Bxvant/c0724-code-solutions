'use strict';
/* exported compact */
function compact(array) {
  const goodValues = [];
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
