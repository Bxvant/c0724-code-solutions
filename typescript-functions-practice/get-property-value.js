'use strict';
/* exported getPropertyValue */
function getPropertyValue(object, key) {
  return object[key];
}
const adaLovelace = {
  birthPlace: 'London',
};
const birthPlace = getPropertyValue(adaLovelace, 'birthPlace');
console.log(birthPlace);
