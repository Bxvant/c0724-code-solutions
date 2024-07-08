const width: number = 5;
const height: number = 6;
const area: number = width * height;
console.log('value of area', area);
console.log('typeof area', typeof area);

const bill: number = 5;
const payment: number = 10;
const change: number = payment - bill;
console.log('value of change', change);
console.log('typeof change', change);

const quizzes: number = 5;
const midterm: number = 7;
const final: number = 4;
const grade: number = (quizzes + midterm + final) / 3;
console.log('vlaue of grade', grade);
console.log('typeof grade', typeof grade);

const firstName: string = 'Bryant';
const lastName: string = 'Mendoza';
const fullName: string = firstName + ' ' + lastName;
console.log('value of fullName', fullName);
console.log('typeof fullName', typeof fullName);

const ph: number = 5;
const isAcidic: boolean = ph < 7;
console.log('value of isAcidic', isAcidic);
console.log('typeof isAcidic', typeof isAcidic);

const headCount: number = 300;
const isSparta: boolean = headCount === 300;
console.log('value of isSparta', isSparta);
console.log('typeof isSparta', typeof isSparta);

let motto: string = fullName;
motto += ' ' + 'is' + ' ' + 'the' + ' ' + 'GOAT';
console.log('value of motto', motto);
console.log('typeof motto', typeof motto);
