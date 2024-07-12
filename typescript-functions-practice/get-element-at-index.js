'use strict';
/* exported getElementAtIndex */
const array3 = ['foo', 'bar', 'baz'];
function getElementAtIndex(array, index) {
  return array[index];
}
const getElementAtIndexResult = getElementAtIndex(array3, 1);
console.log('value of getElementAtIndexResult:', getElementAtIndexResult);
