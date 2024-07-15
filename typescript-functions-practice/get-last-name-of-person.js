'use strict';
/* exported getLastNameOfPerson */
const Bryant = {
  firstName: 'Bryant',
  lastName: 'Mendoza',
};
function getLastNameOfPerson(person) {
  return person.lastName;
}
const getLastNameOfPersonResult = getLastNameOfPerson(Bryant);
console.log('value of getLastNameOfPersonResult:', getLastNameOfPersonResult);
