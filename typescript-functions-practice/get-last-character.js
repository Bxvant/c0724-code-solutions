'use strict';
/* exported getLastCharacter */
const sixthString = 'foo';
function getLastCharacter(string) {
  return string.charAt(string.length - 1);
}
const getLastCharacterResult = getLastCharacter(sixthString);
console.log('value of GetLastCharacterResult:', getLastCharacterResult);
