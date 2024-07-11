'use strict';
/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */
function getNumbersToTen() {
  const numbers = [];
  let currentNumber = 1;
  while (currentNumber <= 10) {
    numbers.push(currentNumber);
    currentNumber++;
  }
  return numbers;
}
console.log('value of getNumbersToTen:', getNumbersToTen());
console.log('second testing of getNumbersToTen:', getNumbersToTen());
function getEvenNumbersToTwenty() {
  const evenNumbers = [];
  let currentNumber = 2;
  while (currentNumber <= 20) {
    evenNumbers.push(currentNumber);
    currentNumber += 2;
  }
  return evenNumbers;
}
console.log('value of getNumbersToTwenty:', getEvenNumbersToTwenty());
console.log('second testing of getNumbersToTwenty:', getEvenNumbersToTwenty());
function repeatWord(word, times) {
  let count = 1;
  let repeated = ' ';
  while (count <= times) {
    repeated += word;
    count++;
  }
  return repeated;
}
const repeatWordResult = repeatWord('hello', 3);
console.log('value of repeatWordResult:', repeatWordResult);
function logEachCharacter(str) {
  for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
  }
}
const logEachCharacterResult = logEachCharacter('Jin-woo');
console.log('value of logEachCharacterResult:', logEachCharacterResult);
function doubleAll(numbers) {
  const doubled = [];
  for (let i = 0; i < numbers.length; i++) {
    doubled.push(numbers[i] * 2);
  }
  return doubled;
}
const doubleAllResult = doubleAll([1, 2, 3]);
console.log('value of doubleAll:', doubleAllResult);
function getKeys(obj) {
  const keys = [];
  for (const key in obj) {
    keys.push(key);
  }
  return keys;
}
const getKeysExample = { a: 1, b: 2, c: 3 };
const getKeysResult = getKeys(getKeysExample);
console.log('value of getKeysresult:', getKeysResult);
function getValues(obj) {
  const values = [];
  for (const key in obj) {
    values.push(obj[key]);
  }
  return values;
}
const getValuesExample = { a: 1, b: 2, c: 3 };
const getValuesResult = getValues(getValuesExample);
console.log('value of getValuesResult:', getValuesResult);
