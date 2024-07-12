'use strict';
/* exported getSecondCharacter */
const secondString = 'foo';
function getSecondCharacter(string) {
  return string.charAt(1);
}
const getSecondCharacterResult = getSecondCharacter(secondString);
console.log('value of GetFirstCharacterResult:', getSecondCharacterResult);
