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

function isUnderFive(x: number): boolean {
  if (x < 5) {
    return true;
  } else {
    return false;
  }
}
const isUnderFiveResult: boolean = isUnderFive(3);
console.log('value of isUnderFiveResult:', isUnderFiveResult);

function isEvenNumber(x: number): boolean {
  if (x % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
const isEvenNumberResult: boolean = isEvenNumber(10);
console.log('value of isEvenNumber:', isEvenNumberResult);

const string1: string = 'Jennifer';

function startsWithJ(string: string): boolean {
  if (string.charAt(0) === 'J') {
    return true;
  } else {
    return false;
  }
}

const startsWithJResult: boolean = startsWithJ(string1);
console.log('value of startsWithJResult:', startsWithJResult);

const person = {
  name: 'Bryant',
  age: 22,
};

function isOldEnoughToDrink(person: { name: string; age: number }): boolean {
  if (person.age >= 21) {
    return true;
  } else {
    return false;
  }
}

const isOldEnoughToDrinkResult: boolean = isOldEnoughToDrink(person);
console.log('value of is oldEnoughToDrink:', isOldEnoughToDrinkResult);

function isOldEnoughToDrive(person: { name: string; age: number }): boolean {
  if (person.age >= 16) {
    return true;
  } else {
    return false;
  }
}

const isOldEnoughToDriveResult: boolean = isOldEnoughToDrive(person);
console.log('value of isOldEnoughToDrive:', isOldEnoughToDriveResult);

function isOldEnoughToDrinkAndDrive(person: {
  name: string;
  age: number;
}): boolean {
  if (person.age >= 21 && person.age >= 16) {
    return false;
  } else {
    return false;
  }
}

const isOldEnoughToDrinkAndDriveResult: boolean =
  isOldEnoughToDrinkAndDrive(person);
console.log(
  'value of isOldEnoughToDrinkAndDrive:',
  isOldEnoughToDrinkAndDriveResult
);

function categorizeAcidity(x: number): string {
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

const categorizeAcidityResult: string = categorizeAcidity(9);
console.log('value of categorizeAcidityResult:', categorizeAcidityResult);

function introduceWarnerBro(name: string): string {
  switch (name) {
    case 'yakko':
      return 'Were the warner brothers!';
    case 'wakko':
      return 'Were the warner brothers!';
    case 'dot':
      return 'Im cute~';
    default:
      return 'Goodnight Everybody';
  }
}
const introduceWarnerBroResult: string = introduceWarnerBro('yakko');
console.log('value of introduceWarnerBroResult:', introduceWarnerBroResult);

function recommendMovie(genre: string): string {
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

const recommendMovieResult: string = recommendMovie('sci-fi');
console.log('value of recomendMovieResult:', recommendMovieResult);
