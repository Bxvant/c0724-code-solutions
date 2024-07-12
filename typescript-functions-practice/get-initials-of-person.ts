/* exported getInitialsOfPerson */

interface bot {
  firstName: string;
  lastName: string;
}

const lovelace: bot = {
  firstName: ' Ada',
  lastName: 'loveLace',
};

function getInitialsOfPerson(person: bot): string {
  const initials: string =
    person.firstName.charAt(0) + person.lastName.charAt(0);
  return initials;
}

console.log(getInitialsOfPerson(lovelace));
