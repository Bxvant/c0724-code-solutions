'use strict';
/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro,
            recommendMovie
 */
function isUnderFive(x) {
  if (x < 5) {
    return true;
  } else {
    return false;
  }
}
const isUnderFiveResult = isUnderFive(3);
console.log('value of isUnderFiveResult:', isUnderFiveResult);
function isEvenNumber(x) {
  if (x % 2) {
    return true;
  } else {
    return false;
  }
}
const isEvenNumberResult = isEvenNumber(10);
console.log('value of isEvenNumber:', isEvenNumberResult);
const string1 = 'Jennifer';
function startsWithJ(string) {
  if (string.charAt(0) === 'J') {
    return true;
  } else {
    return false;
  }
}
const startsWithJResult = startsWithJ(string1);
console.log('value of startsWithJResult:', startsWithJResult);
const person = {
  name: 'Bryant',
  age: 22,
};
function isOldEnoughToDrink(person) {
  if (person.age >= 21) {
    return true;
  } else {
    return false;
  }
}
const isOldEnoughToDrinkResult = isOldEnoughToDrink(person);
console.log('value of is oldEnoughToDrink:', isOldEnoughToDrinkResult);
function isOldEnoughToDrive(person) {
  if (person.age >= 16) {
    return true;
  } else {
    return false;
  }
}
const isOldEnoughToDriveResult = isOldEnoughToDrive(person);
console.log('value of isOldEnoughToDrive:', isOldEnoughToDriveResult);
function isOldEnoughToDrinkAndDrive(person) {
  if (person.age >= 21) {
    return false;
  } else {
    return false;
  }
}
const isOldEnoughToDrinkAndDriveResult = isOldEnoughToDrinkAndDrive(person);
console.log(
  'value of isOldEnoughToDrinkAndDrive:',
  isOldEnoughToDrinkAndDriveResult
);
function categorizeAcidity(x) {
  if (x === 7) {
    return 'neutral';
  } else if (x > 7 && x < 14) {
    return 'acid';
  } else if (x < 7 && x > 0) {
    return 'base';
  } else {
    return 'invalid pH level';
  }
}
const categorizeAcidityResult = categorizeAcidity(9);
console.log('value of categorizeAcidityResult:', categorizeAcidityResult);
function introduceWarnerBro(name) {
  switch (name) {
    case 'yakko':
      return 'hello';
    case 'wakko':
      return 'hello';
    case 'dot':
      return 'hello';
    default:
      return 'BYE';
  }
}
const introduceWarnerBroResult = introduceWarnerBro('yakko');
console.log('value of introduceWarnerBroResult:', introduceWarnerBroResult);
function recommendMovie(genre) {
  switch (genre) {
    case 'action':
      return 'Hxh';
    case 'comedy':
      return 'Konosuba';
    case 'horror':
      return 'Tokyo Ghoul';
    case 'drama':
      return 'Horimiya';
    case 'musical':
      return 'your lie in april';
    case 'sci-fi':
      return 'Code Geass';
    default:
      return 'Not a Valid Genre';
  }
}
const recommendMovieResult = recommendMovie('sci-fi');
console.log('value of recomendMovieResult:', recommendMovieResult);
