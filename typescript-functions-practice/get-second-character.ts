/* exported getSecondCharacter */

const secondString: string = 'foo';

function getSecondCharacter(string: string): string {
  return string.charAt(1);
}

const getSecondCharacterResult: string = getSecondCharacter(secondString);
console.log('value of GetFirstCharacterResult:', getSecondCharacterResult);
