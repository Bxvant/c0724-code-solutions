const array: string[] = ['red', 'white', 'blue'];
const colors: string[] = array;

console.log('value of colors [0]', array[0]);
console.log('value of colors [1]', array[1]);
console.log('value of colors [2]', array[2]);

const literal: string = `America is ${array[0]}, ${array[1]}, and ${array[2]}.`;

const firstLiteral: string = literal;
console.log('value of firstLiteral', firstLiteral);

const newValue: string = 'green';
array[2] = newValue;

const secondLiteral: string = ` Mexico is ${array[0]}, ${array[1]}, and ${array[2]}.`;
console.log('value of secondLiteral', secondLiteral);

console.log('value of colors', colors);
console.log('typeof colors', typeof colors);

const students: string[] = ['Bryant', 'Sam', 'Dan', 'Brandon'];

const numberOfStudents: number = students.length;
const thirdLiteral: string = `There are ${numberOfStudents} students in the class`;
console.log('value of thirdLiteral', thirdLiteral);

const lastIndex: string | undefined = students.at(-1);
const fourthLiteral: string = `The last student in the class is ${lastIndex}`;
console.log('value of fourthLiteral', fourthLiteral);

console.log('value of students', students);
console.log('typeof students', typeof students);
