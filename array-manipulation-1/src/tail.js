'use strict';
/* exported tail */
const bazArray = ['foo', 'bar', 'baz'];
function tail(array) {
  const newArray = [];
  for (let i = 1; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
console.log(tail(bazArray));
