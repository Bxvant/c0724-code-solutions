'use strict';
const $h1 = document.getElementById('message');
if (!$h1) throw new Error('$h1 query has failed');
setTimeout(() => {
  $h1.textContent = 'Hello World';
}, 3000);
