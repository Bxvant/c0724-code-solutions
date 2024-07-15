/* exported reverseWord */

function reverseWord(word: string): string {
  let reversedChar = '';
  for (let i = word.length - 1; i >= 0; i--) {
    reversedChar += word.charAt(i);
  }
  return reversedChar;
}
