'use strict';
/* exported getStudentNames */
function getStudentNames(students) {
  const studentsName = [];
  for (let i = 0; i < students.length; i++) {
    studentsName.push(students[i].name);
  }
  return studentsName;
}
const students = [
  {
    name: 'Robert',
  },
  {
    name: 'Steve',
  },
  {
    name: 'Ken',
  },
];
console.log(getStudentNames(students));
