function convertMinutesToSeconds(x: number): number {
  return x * 60;
}

const convertMinutesToSecondsResult: number = convertMinutesToSeconds(10);
console.log(
  'value of convertMinutesToSecondsResult:',
  convertMinutesToSecondsResult
);

function greet(name: string): string {
  return 'Hey' + ' ' + name + '!';
}

const greetResult: string = greet('Bryant');
console.log('value of greetResult:', greetResult);

const getArea = (x: number, y: number): number => x * y;

const getAreaResult: number = getArea(5, 5);
console.log('value of getAreaResult:', getAreaResult);

interface Person {
  firstName: string;
  lastName: string;
}

const getFirstName = (person: Person): string => person.firstName;

const human: Person = { firstName: 'Bryant', lastName: 'Mendoza' };
console.log('value of human:', getFirstName(human));

const array: number[] = [1, 2, 3, 4];

const getLastElement = (array: unknown): unknown => array.at(-1);

console.log('value of getLastElement:', getLastElement(array));

function callOtherFunction(otherFunction: Function, params: unknown): any {
  return otherFunction(params);
}

console.log('value of callOtherFunction:', callOtherFunction(greet, 'Brandon'));
