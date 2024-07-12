/* exported getDescriptionOfPerson */

interface Description {
  name: string;
  occupation: string;
  birthPlace: string;
}

const Ada: Description = {
  name: 'Ada Lovelace',
  occupation: 'countess',
  birthPlace: 'London, England',
};

function getDescriptionOfPerson(person: Description): string {
  return `${person.name} is a ${person.occupation} from ${person.birthPlace}.`;
}

console.log(getDescriptionOfPerson(Ada));
