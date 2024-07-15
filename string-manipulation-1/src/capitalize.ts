/* exported capitalize */

function capitalize(word: string): string {
  const firstChar = word.charAt(0).toUpperCase();
  const restChars = word.slice(1).toLowerCase();
  return firstChar + restChars;
}
