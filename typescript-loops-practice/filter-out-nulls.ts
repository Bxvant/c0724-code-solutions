/* exported filterOutNulls */

function filterOutNulls(
  values: (string | number | boolean | null)[]
): (string | number | boolean)[] {
  const filteredOutValues: (string | number | boolean)[] = [];
  for (let i = 0; i < values.length; i++) {
    if (values[i] !== null) {
      filteredOutValues.push(values[i] as string | number | boolean);
    }
  }
  return filteredOutValues;
}
