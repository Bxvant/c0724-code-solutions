'use strict';
/* exported compact */
function compact(array) {
  const goodValues = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i]) {
      goodValues.push(array[i]);
    }
  }
  return goodValues;
}
