import { useState } from 'react';
import { FaPause, FaPlay } from 'react-icons/fa';

export function Stopwatch() {
  const [seconds, setSeconds] = useState(0);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout>();

  function handleStop() {
    clearInterval(intervalId);
    setIntervalId(undefined);
  }

  function handleStart() {
    const interval = setInterval(
      () => setSeconds((seconds) => seconds + 1),
      1000
    );
    setIntervalId(interval);
  }

  function handleRestart() {
    if (!intervalId) {
      setSeconds(0);
    }
  }

  return (
    <div>
      <div onClick={handleRestart} className="circle">
        <span className="count">{seconds}</span>
      </div>
      {intervalId ? (
        <FaPause onClick={handleStop} />
      ) : (
        <FaPlay onClick={handleStart} />
      )}
    </div>
  );
}
