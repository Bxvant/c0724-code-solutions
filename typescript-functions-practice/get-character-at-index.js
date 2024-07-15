'use strict';
/* exported getCharacterAtIndex */
const thirdString = 'foo';
function getCharacterAtIndex(string, index) {
  return string[index];
}
const getCharacterAtIndexResult = getCharacterAtIndex(thirdString, 1);
console.log('value of getCharacterAtIndexResult:', getCharacterAtIndexResult);
