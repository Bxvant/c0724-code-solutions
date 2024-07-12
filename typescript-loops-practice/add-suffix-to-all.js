'use strict';
/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  const result = [];
  for (let i = 0; i < words.length; i++) {
    result.push(words[i] + suffix);
  }
  return result;
}
const suffix = 'ly';
const words = ['bad', 'sad', 'mad'];
const addSuffixToAllResult = addSuffixToAll(words, suffix);
console.log('value of addSuffixToAllResult:', addSuffixToAllResult);
