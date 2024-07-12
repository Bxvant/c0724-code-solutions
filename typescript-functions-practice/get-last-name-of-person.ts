/* exported getLastNameOfPerson */

interface People {
  firstName: string;
  lastName: string;
}

const Bryant: People = {
  firstName: 'Bryant',
  lastName: 'Mendoza',
};

function getLastNameOfPerson(person: People): string {
  return person.lastName;
}

const getLastNameOfPersonResult: string = getLastNameOfPerson(Bryant);
console.log('value of getLastNameOfPersonResult:', getLastNameOfPersonResult);
