'use strict';
/* exported getIndexes */
function getIndexes(array) {
  const indexes = [];
  for (let i = 0; i < array.length; i++) {
    indexes.push(i);
  }
  return indexes;
}
const getIndexesResult = getIndexes(['meow', 'woof', 'squeak', 'shazoo']);
console.log(getIndexesResult);
