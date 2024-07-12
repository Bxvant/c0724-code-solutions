/* exported getFirstCharacter */

const firstString: string = 'foo';

function getFirstCharacter(string: string): string {
  return string.charAt(0);
}

const getFirstCharacterResult: string = getFirstCharacter(firstString);
console.log('vlaue of GetFirstCharacterResult:', getFirstCharacterResult);
