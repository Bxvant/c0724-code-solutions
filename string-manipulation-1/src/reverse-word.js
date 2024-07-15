'use strict';
/* exported reverseWord */
function reverseWord(word) {
  let reversedChar = '';
  for (let i = word.length - 1; i >= 0; i--) {
    reversedChar += word.charAt(i);
  }
  return reversedChar;
}
