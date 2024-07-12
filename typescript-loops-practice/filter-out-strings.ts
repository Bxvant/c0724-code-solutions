/* exported filterOutStrings */

function filterOutStrings(
  values: (string | number | boolean | null)[]
): (null | number | boolean)[] {
  const filteredOutValues: (null | number | boolean)[] = [];
  for (let i = 0; i < values.length; i++) {
    if (typeof values[i] !== 'string') {
      filteredOutValues.push(values[i] as null | number | boolean);
    }
  }
  return filteredOutValues;
}
