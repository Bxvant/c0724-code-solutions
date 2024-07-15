'use strict';
/* exported getFirstCharacter */
const firstString = 'foo';
function getFirstCharacter(string) {
  return string.charAt(0);
}
const getFirstCharacterResult = getFirstCharacter(firstString);
console.log('vlaue of GetFirstCharacterResult:', getFirstCharacterResult);
