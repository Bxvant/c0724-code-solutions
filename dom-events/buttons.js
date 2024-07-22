'use strict';
const $button1 = document.querySelector('.click-button');
if (!$button1) throw new Error('$button1 does not exist');
console.log('value of $button1', $button1);
function handleClick(event) {
  console.log('button clicked');
  console.log(event);
  console.log(event.target);
}
$button1.addEventListener('click', handleClick);
const $button2 = document.querySelector('.hover-button');
if (!$button2) throw new Error('$button2 does not exist');
console.log('value of $button2', $button2);
function handleMouseover(event) {
  console.log('button hovered');
  console.log(event);
  console.log(event.target);
}
$button2.addEventListener('mouseover', handleMouseover);
const $button3 = document.querySelector('.double-click-button');
if (!$button3) throw new Error('$button3 does not exist');
console.log('value of $button3', $button3);
function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log(event);
  console.log(event.target);
}
$button3.addEventListener('dblclick', handleDoubleClick);
