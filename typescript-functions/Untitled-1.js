'use strict';
function convertMinutesToSeconds(x) {
  return x * 60;
}
const convertMinutesToSecondsResult = convertMinutesToSeconds(10); // 600
console.log(
  'value fo convertminutestosecondsresult:',
  convertMinutesToSecondsResult
);
function greet(x) {
  return 'Hello' + ' ' + x;
}
const greetfunction = greet('Bryant');
console.log('value of greetfunction : ', greetfunction);
function getArea(x, y) {
  return x * y;
}
const getAreaResult = getArea(1, 2);
console.log('value of getarearesult:', getAreaResult);
const person = {
  firstName: 'Bryant',
  lastName: 'Mendoza',
};
function getFirstName(person) {
  return person.firstName;
}
const getFirstNameResult = getFirstName(person);
console.log('value of getFirstName:', getFirstNameResult);
const array = [1, 2, 3];
function getLastElement(array) {
  return array.at(-1);
}
const getLastElementResult = getLastElement(array);
console.log('value of getLastElement:', getLastElementResult);

function callOtherFunction(otherFunction: Function, params: unknown): any {
  return otherFunction(params);
}

console.log('value of callOtherFunction:', callOtherFunction(greet, 'Brandon'));

