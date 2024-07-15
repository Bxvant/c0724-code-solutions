/* exported getWords */

function getWords(string: string): string[] {
  string = string.trim();
  if (string === '') {
    return [];
  }
  return string.split(/\s+/);
}
