'use strict';
/* exported getFullNameOfPerson */
const human = {
  firstName: 'Ada',
  lastName: 'LoveLace',
};
function getFullNameOfPerson(human) {
  return human.firstName + ' ' + human.lastName;
}
const fullnameResult = getFullNameOfPerson(human);
console.log(fullnameResult);
