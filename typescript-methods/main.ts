const heros: string[] = ['goku', 'jin-woo', 'Lelouch', 'Rimuru'];

let randomNumber: number = Math.random();

console.log('value of randomNumber:', randomNumber);

randomNumber *= heros.length;

console.log(
  'value of randomNumber after multiplying against heros.length:',
  randomNumber
);

const randomIndex: number = Math.floor(randomNumber);

console.log('value of random index:', randomIndex);

const randomHero: string = heros[randomIndex];

console.log('value of randomHero:', randomHero);

const library = [
  {
    title: 'Solo Leveling',
    author: "Chu'gong",
  },
  {
    title: 'Omniscient Readers Viewpoint',
    author: 'Sing Shong',
  },
  {
    title: ' Charlottes Web',
    author: 'E. B. White',
  },
];

const lastBook = library.pop();

console.log('value of lastBook:', lastBook);

const firstBook = library.shift();

console.log('vlaue of firstBook:', firstBook);

const js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer',
};
const css = {
  title: 'CSS Secrets',
  author: 'Lea Verou',
};

library.push(js);
library.unshift(css);
library.splice(1, 1);

console.log('value of library:', library);

const fullName: string = 'Bryant, Mendoza';

const firstAndLastName = fullName.split(' ');

console.log('value of firstAndLastName:', firstAndLastName);

const firstName = firstAndLastName[0];
console.log('value of firstName:', firstName);

const sayMyName = firstName.toUpperCase();
console.log('value of sayMyName:', sayMyName);

const employee = {
  name: 'bryant',
  age: 22,
  position: 'CEO',
};

const employeeKeys = Object.keys(employee);
console.log('value of employeeKeys:', employeeKeys);

const employeeValues = Object.values(employee);
console.log('value of employeeValues:', employeeValues);

const employeePairs = Object.entries(employee);
console.log('vlaue of employeePairs:', employeePairs);
