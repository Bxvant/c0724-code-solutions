const $countdownDisplay = document.getElementById('countdown-display');
if (!$countdownDisplay) throw new Error('$countdownDisplay query has failed');

let count = 4;

$countdownDisplay.textContent = count.toString();

const setIntervalId = setInterval(() => {
  count--;
  if (count > 0) {
    $countdownDisplay.textContent = count as unknown as string;
  } else {
    $countdownDisplay.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(setIntervalId);
  }
}, 1000);
