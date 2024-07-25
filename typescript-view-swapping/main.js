'use strict';
const $tabContainer = document.querySelector('.tab-container');
const $tabElements = document.querySelectorAll('.tab');
const $viewElements = document.querySelectorAll('.view');
if (!$tabContainer) {
  throw new Error('$tabContainer failed ');
}
$tabContainer.addEventListener('click', (event) => {
  const $eventTarget = event.target;
  if (!$eventTarget.matches('.tab')) {
    return;
  }
  for (let i = 0; i < $tabElements.length; i++) {
    const tab = $tabElements[i];
    if (tab === $eventTarget) {
      tab.className = 'tab active';
    } else {
      tab.className = 'tab';
    }
  }
  const targetView = $eventTarget.getAttribute('data-view');
  for (let i = 0; i < $viewElements.length; i++) {
    const view = $viewElements[i];
    if (view.getAttribute('data-view') === targetView) {
      view.classList.remove('hidden');
    } else {
      view.classList.add('hidden');
    }
  }
});
