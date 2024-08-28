import { useState } from 'react';
import './App.css';
import { ToggleSwitch } from './ToggleSwitch';
import './ToggleSwitch.css';

function App() {
  const [switchStatus, setSwitchStatus] = useState(true);

  let label = '';
  if (switchStatus) {
    label = 'ON';
  } else {
    label = 'OFF';
  }

  const switchClass = label.toLowerCase();

  function handleToggle() {
    if (switchStatus) {
      setSwitchStatus(false);
    } else {
      setSwitchStatus(true);
    }
  }
  return (
    <div id="container">
      <ToggleSwitch switchOnOff={switchClass} onToggle={handleToggle} />
      <span>{label}</span>
    </div>
  );
}

export default App;
