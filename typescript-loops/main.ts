/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */

function getNumbersToTen(): number[] {
  const numbers: number[] = [];
  let currentNumber: number = 1;

  while (currentNumber <= 10) {
    numbers.push(currentNumber);
    currentNumber++;
  }
  return numbers;
}

console.log('value of getNumbersToTen:', getNumbersToTen());

console.log('second testing of getNumbersToTen:', getNumbersToTen());

function getEvenNumbersToTwenty(): number[] {
  const evenNumbers: number[] = [];
  let currentNumber: number = 2;

  while (currentNumber <= 20) {
    evenNumbers.push(currentNumber);
    currentNumber += 2;
  }
  return evenNumbers;
}

console.log('value of getNumbersToTwenty:', getEvenNumbersToTwenty());
console.log('second testing of getNumbersToTwenty:', getEvenNumbersToTwenty());

function repeatWord(word: string, times: number): string {
  let count: number = 1;
  let repeated: string = ' ';
  while (count <= times) {
    repeated += word;
    count++;
  }
  return repeated;
}

const repeatWordResult = repeatWord('hello', 3);
console.log('value of repeatWordResult:', repeatWordResult);

function logEachCharacter(str: string): void {
  for (let i: number = 0; i < str.length; i++) {
    console.log(str[i]);
  }
}

const logEachCharacterResult: void = logEachCharacter('Jin-woo');
console.log('value of logEachCharacterResult:', logEachCharacterResult);

function doubleAll(numbers: number[]): number[] {
  const doubled: number[] = [];
  for (let i: number = 0; i < numbers.length; i++) {
    doubled.push(numbers[i] * 2);
  }
  return doubled;
}

const doubleAllResult: number[] = doubleAll([1, 2, 3]);
console.log('value of doubleAll:', doubleAllResult);

function getKeys(obj: Record<string, unknown>): string[] {
  const keys: string[] = [];
  for (const key in obj) {
    keys.push(key);
  }
  return keys;
}
const getKeysExample = { a: 1, b: 2, c: 3 };
const getKeysResult: string[] = getKeys(getKeysExample);
console.log('value of getKeysresult:', getKeysResult);

function getValues(obj: Record<string, unknown>): unknown[] {
  const values: string[] = [];
  for (const key in obj) {
    values.push(obj[key]);
  }

  return values;
}

const getValuesExample = { a: 1, b: 2, c: 3 };
const getValuesResult: string[] = getValues(getValuesExample);
console.log('value of getValuesResult:', getValuesResult);
