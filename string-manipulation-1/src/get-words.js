'use strict';
/* exported getWords */
function getWords(string) {
  string = string.trim();
  if (string === '') {
    return [];
  }
  return string.split(/\s+/);
}
