'use strict';
/* exported filterOutNulls */
function filterOutNulls(values) {
  const filteredOutValues = [];
  for (let i = 0; i < values.length; i++) {
    if (values[i] !== null) {
      filteredOutValues.push(values[i]);
    }
  }
  return filteredOutValues;
}
