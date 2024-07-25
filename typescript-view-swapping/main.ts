const $tabContainer = document.querySelector('.tab-container');
const $tabElements = document.querySelectorAll('.tab');
const $viewElements = document.querySelectorAll('.view');

if (!$tabContainer) {
  throw new Error('$tabContainer failed ');
}
$tabContainer.addEventListener('click', (event: Event) => {
  const $eventTarget = event.target as HTMLDivElement;
  if (!$eventTarget.matches('.tab')) {
    return;
  }
  for (let i = 0; i < $tabElements.length; i++) {
    const tab = $tabElements[i] as HTMLDivElement;
    if (tab === $eventTarget) {
      tab.className = 'tab active';
    } else {
      tab.className = 'tab';
    }
  }
  const targetView = $eventTarget.getAttribute('data-view');
  for (let i = 0; i < $viewElements.length; i++) {
    const view = $viewElements[i] as HTMLDivElement;
    if (view.getAttribute('data-view') === targetView) {
      view.classList.remove('hidden');
    } else {
      view.classList.add('hidden');
    }
  }
});
