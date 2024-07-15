/* exported getFullNameOfPerson */

interface Person {
  firstName: string;
  lastName: string;
}

const human: Person = {
  firstName: 'Ada',
  lastName: 'LoveLace',
};

function getFullNameOfPerson(human: Person): string {
  return human.firstName + ' ' + human.lastName;
}

const fullnameResult: string = getFullNameOfPerson(human);
console.log(fullnameResult);
