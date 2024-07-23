'use strict';
let lightSwitch = false;
const $bulb = document.querySelector('.bulb');
const $bulbBackground = document.querySelector('.bulb-background');
if (!$bulbBackground) throw new Error('$bulbBackground query has failed');
if (!$bulb) throw new Error('$bulb query has failed');
$bulb.addEventListener('click', clickHandler);
function clickHandler() {
  if (lightSwitch === false) {
    lightSwitch = true;
    $bulb.className = 'bulb bulb-on';
    $bulbBackground.className = 'bulb-background background-on';
  } else {
    lightSwitch = false;
    $bulb.className = 'bulb bulb-off';
    $bulbBackground.className = 'bulb-background background-off';
  }
}
