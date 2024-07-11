'use strict';
/* exported filterOutStrings */
function filterOutStrings(values) {
  const filteredOutValues = [];
  for (let i = 0; i < values.length; i++) {
    if (typeof values[i] !== 'string') {
      filteredOutValues.push(values[i]);
    }
  }
  return filteredOutValues;
}
