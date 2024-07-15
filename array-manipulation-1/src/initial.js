'use strict';
/* exported initial */
function initial(array) {
  const newArray2 = [];
  for (let i = 0; i < array.length - 1; i++) {
    newArray2.push(array[i]);
  }
  return newArray2;
}
