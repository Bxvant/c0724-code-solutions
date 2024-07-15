'use strict';
/* exported getFirstInitialOfPerson */
const person = {
  firstName: 'Ada',
  lastname: 'Lovelace',
  fullName: 'Ada LoveLace',
};
function getFirstInitialOfPerson(person) {
  const firstInitial = person.firstName;
  return firstInitial.charAt(0);
}
console.log(getFirstInitialOfPerson(person));
