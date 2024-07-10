function convertMinutesToSeconds(x: number): number {
  return x * 60;
}

const convertMinutesToSecondsResult: number = convertMinutesToSeconds(10); // 600
console.log(
  'value fo convertminutestosecondsresult:',
  convertMinutesToSecondsResult
);

function greet(x: string): string {
  return 'Hello' + ' ' + x;
}

const greetfunction: string = greet('Bryant');
console.log('value of greetfunction : ', greetfunction);

function getArea(x: number, y: number): number {
  return x * y;
}

const getAreaResult: number = getArea(1, 2);
console.log('value of getarearesult:', getAreaResult);

interface People {
  firstName: string;
  lastName: string;
}

const person: people = {
  firstName: 'Bryant',
  lastName: 'Mendoza',
};

function getFirstName(person: object): string {
  return person.firstName;
}

const getFirstNameResult: string = getFirstName(person);
console.log('value of getFirstName:', getFirstNameResult);

const array: number[] = [1, 2, 3, 4];

const getLastElement = (array: unknown): unknown => array.at(-1);

console.log('value of getLastElement:', getLastElement(array));

function callOtherFunction(getFirstName: function): string {
  return getFirstName(person);
}

const whatNameResult: string = callOtherFunction(getFirstName);
console.log('whatNameResult value:', whatNameResult);
