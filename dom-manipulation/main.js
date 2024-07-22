'use strict';
let clickCount = 0;
const $hotButton = document.querySelector('.hot-button');
const $clickCount = document.querySelector('.click-count');
if (!$hotButton) throw new Error('the !hot query failed');
function handleClick() {
  if (!$hotButton || !$clickCount)
    throw new Error('$hotButton or $clickCount query failed');
  clickCount++;
  $clickCount.textContent = `Clicks: ${clickCount}`;
  if (clickCount < 4) {
    $hotButton.className = ' hot-button cold';
  } else if (clickCount < 7) {
    $hotButton.className = 'hot-button cool';
  } else if (clickCount < 10) {
    $hotButton.className = 'hot-button tepid';
  } else if (clickCount < 13) {
    $hotButton.className = 'hot-button hot';
  } else {
    $hotButton.className = 'hot-button nuclear ';
  }
}
$hotButton.addEventListener('click', handleClick);
