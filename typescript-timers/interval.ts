const $countdownDisplay = document.getElementById('countdown-display');
if (!$countdownDisplay) throw new Error('$countdownDisplay query has failed');

let count = 4;

const setIntervalId = setInterval(() => {
  count--;
  if (count > 0) {
    $countdownDisplay.textContent = count.toString();
  } else {
    $countdownDisplay.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(setIntervalId);
  }
}, 1000);
