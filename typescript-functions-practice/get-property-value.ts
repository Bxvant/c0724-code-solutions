/* exported getPropertyValue */

interface Person2 {
  birthPlace: string;
}

function getPropertyValue(object: Person2, key: keyof Person2): string {
  return object[key];
}

const adaLovelace: Person2 = {
  birthPlace: 'London',
};
const birthPlace: string = getPropertyValue(adaLovelace, 'birthPlace');
console.log(birthPlace);
