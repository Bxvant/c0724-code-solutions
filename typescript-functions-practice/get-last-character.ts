/* exported getLastCharacter */

const sixthString: string = 'foo';

function getLastCharacter(string: string): string {
  return string.charAt(string.length - 1);
}

const getLastCharacterResult: string = getLastCharacter(sixthString);
console.log('value of GetLastCharacterResult:', getLastCharacterResult);
