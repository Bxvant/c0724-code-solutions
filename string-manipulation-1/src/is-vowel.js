'use strict';
/* exported isVowel */
function isVowel(char) {
  const lowerChar = char.toLowerCase();
  return (
    lowerChar === 'a' ||
    lowerChar === 'e' ||
    lowerChar === 'i' ||
    lowerChar === 'o' ||
    lowerChar === 'u' ||
    lowerChar === 'A' ||
    lowerChar === 'E' ||
    lowerChar === 'I' ||
    lowerChar === 'O' ||
    lowerChar === 'U'
  );
}
