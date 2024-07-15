'use strict';
/* exported getFirstElement */
const array = ['foo', 'bar', 'baz'];
function getFirstElement(array) {
  return array[0];
}
const getFirstElementResult = getFirstElement(array);
console.log('value of getFirstElementResult:', getFirstElementResult);
