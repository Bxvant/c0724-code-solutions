'use strict';
const newArray = [
  {
    isbn: '1234567890',
    title: 'numbers',
    author: 'Bryant',
  },
  {
    isbn: '0987654321',
    title: 'reverse numbers',
    author: 'brandon',
  },
  {
    isbn: '1029384756',
    title: 'random',
    author: 'tristan',
  },
];
console.log('value of newArray', newArray);
console.log('type of newArray', typeof newArray);
const jsonString = JSON.stringify(newArray);
console.log('value of jsonString', jsonString);
console.log('type of jsonString:', typeof jsonString);
const studentJSON = '{ "numberID": "1234", "stringName": "Bryant Mendoza"}';
console.log('value of studentJSON:', studentJSON);
console.log('type of studentJSON:', typeof studentJSON);
const newParse = JSON.parse(
  '{ "numberID": "1234", "stringName": "Bryant Mendoza"}'
);
console.log('value of newParse:', newParse);
console.log('type of newParse:', typeof newParse);
