import { useState } from 'react';
import { HotButton } from './hotButton';
import './App.css';
import './hotButton.css';

function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  let color: string;
  if (count < 18) {
    color = Math.floor(count / 3).toString();
  } else {
    color = '6';
  }

  return (
    <>
      <HotButton color={color} onButtonClick={handleClick} />
      <div> Count is {count} </div>
    </>
  );
}

export default App;
