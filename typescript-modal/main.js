'use strict';
const $openModal = document.querySelector('.open-modal');
if (!$openModal) throw new Error('$openmodal query failed');
const $dismissModal = document.querySelector('.dismiss-modal');
if (!$dismissModal) throw new Error('$dismissModal query failed');
const $dialog = document.querySelector('dialog');
if (!$dialog) throw new Error('$dialog query failed');
$openModal.addEventListener('click', function () {
  console.log('openModal worked');
  $dialog.showModal();
});
$dismissModal.addEventListener('click', function () {
  console.log('dismissModal worked');
  $dialog.close();
});
