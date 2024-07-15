/* exported getWords */

function getWords(string: string): string[] {
  if (string.trim() === '') {
    return [];
  }
  return string.split(/\s+/);
}
