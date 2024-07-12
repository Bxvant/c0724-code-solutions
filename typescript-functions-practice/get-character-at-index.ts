/* exported getCharacterAtIndex */

const thirdString: string = 'foo';

function getCharacterAtIndex(string: string, index: number): string {
  return string[index];
}

const getCharacterAtIndexResult: string = getCharacterAtIndex(thirdString, 1);
console.log('value of getCharacterAtIndexResult:', getCharacterAtIndexResult);
