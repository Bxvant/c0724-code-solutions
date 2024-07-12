/* exported getFirstInitialOfPerson */

interface Human {
  firstName: string;
  lastname: string;
  fullName: string;
}
const person: Human = {
  firstName: 'Ada',
  lastname: 'Lovelace',
  fullName: 'Ada LoveLace',
};

function getFirstInitialOfPerson(person: Human): string {
  const firstInitial: string = person.firstName;
  return firstInitial.charAt(0);
}

console.log(getFirstInitialOfPerson(person));
