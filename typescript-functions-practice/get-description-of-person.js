'use strict';
/* exported getDescriptionOfPerson */
const Ada = {
  name: 'Ada Lovelace',
  occupation: 'countess',
  birthPlace: 'London, England',
};
function getDescriptionOfPerson(person) {
  return `${person.name} is a ${person.occupation} from ${person.birthPlace}.`;
}
console.log(getDescriptionOfPerson(Ada));
