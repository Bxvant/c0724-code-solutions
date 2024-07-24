'use strict';
function handleFocus(event) {
  console.log('Focus event was fired');
  const eventTarget = event.target;
  console.log(eventTarget.name);
}
function handleBlur(event) {
  console.log('Blur event was fired');
  const eventTarget = event.target;
  console.log(eventTarget.name);
}
function handleInput(event) {
  console.log('Input event was fired');
  const eventTarget = event.target;
  console.log(eventTarget.name);
  console.log(eventTarget.value);
}
const $nameInput = document.querySelector('#user-name');
const $emailInput = document.querySelector('#user-email');
const $userInput = document.querySelector('#user-message');
if (!$nameInput) throw new Error('$handleFocus query has failed');
if (!$emailInput) throw new Error('$handleBlur query has failed');
if (!$userInput) throw new Error('$handleInput query has failed');
$nameInput.addEventListener('focus', handleFocus);
$nameInput.addEventListener('blur', handleBlur);
$nameInput.addEventListener('input', handleInput);
$emailInput.addEventListener('blur', handleBlur);
$emailInput.addEventListener('focus', handleFocus);
$emailInput.addEventListener('input', handleInput);
$userInput.addEventListener('input', handleInput);
$userInput.addEventListener('blur', handleBlur);
$userInput.addEventListener('focus', handleFocus);
