/* exported isVowel */

function isVowel(char: string): boolean {
  const vowels = 'aeiouAEIOU';
  return vowels.includes(char);
}
