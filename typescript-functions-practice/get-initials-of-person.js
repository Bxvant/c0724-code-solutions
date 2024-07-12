'use strict';
/* exported getInitialsOfPerson */
const lovelace = {
  firstName: ' Ada',
  lastName: 'loveLace',
};
function getInitialsOfPerson(person) {
  const initials = person.firstName.charAt(0) + person.lastName.charAt(0);
  return initials;
}
console.log(getInitialsOfPerson(lovelace));
