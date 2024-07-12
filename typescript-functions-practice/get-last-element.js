'use strict';
/* exported getLastElement */
const array5 = ['foo', 'bar', 'baz'];
function getLastElement(array) {
  return array.at(-1);
}
const getLastElementResult = getLastElement(array5);
console.log('value of getLastElementResult:', getLastElementResult);
