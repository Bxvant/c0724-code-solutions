/* exported getStudentNames */

interface Student {
  name: string;
}

function getStudentNames(students: Student[]): string[] {
  const studentsName: string[] = [];

  for (let i = 0; i < students.length; i++) {
    studentsName.push(students[i].name);
  }
  return studentsName;
}

const students: Student[] = [
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
