/* exported getLengthOfString */

const fourthString: string = 'foo';

function getLengthOfString(string: string): number {
  return string.length;
}

const getLengthOfStringResult: number = getLengthOfString(fourthString);
console.log('value of getLengthOfStringresult:', getLengthOfStringResult);
