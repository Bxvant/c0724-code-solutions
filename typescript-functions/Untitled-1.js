'use strict';
function convertMinutesToSeconds(x) {
  return x * 60;
}
const convertMinutesToSecondsResult = convertMinutesToSeconds(10);
console.log(
  'value of convertMinutesToSecondsResult:',
  convertMinutesToSecondsResult
);
function greet(name) {
  return 'Hey' + ' ' + name + '!';
}
const greetResult = greet('Bryant');
console.log('value of greetResult:', greetResult);
const getArea = (x, y) => x * y;
const getAreaResult = getArea(5, 5);
console.log('value of getAreaResult:', getAreaResult);
const getFirstName = (person) => person.firstName;
const human = { firstName: 'Bryant', lastName: 'Mendoza' };
console.log('value of human:', getFirstName(human));
const array = [1, 2, 3, 4];
const getLastElement = (array) => array.at(-1);
console.log('value of getLastElement:', getLastElement(array));
function callOtherFunction(otherFunction, params) {
  return otherFunction(params);
}
console.log('value of callOtherFunction:', callOtherFunction(greet, 'Brandon'));
