import React, { useState, useEffect } from 'react';

function Timer() {
  const [time, setTime] = useState(0);      // Stores time in seconds
  const [isActive, setIsActive] = useState(false); // Controls whether timer is running

  // Effect to update the timer every second when active
  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1000);
    } else if (!isActive && time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);   // Clear interval on component unmount or stop
  }, [isActive, time]);

  // Functions to handle start, pause, and reset actions
  const handleStartPause = () => setIsActive(!isActive);    // Toggles between start and pause
  const handleReset = () => {
    setTime(0);     // Resets the time to zero
    setIsActive(false);
  };

  // Formatting time as hh:mm:ss
  const formatTime = (time) => {
    const getSeconds = `0${time % 60}`.slice(-2);
    const minutes = Math.floor(time / 60);
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(time / 3600)}`.slice(-2);
    return `${getHours}:${getMinutes}:${getSeconds}`;
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>React Timer</h1>
      <div style={{ fontSize: '2em', marginBottom: '20px' }}>{formatTime(time)}</div>
      <button onClick={handleStartPause} style={buttonStyle}>
        {isActive ? 'Pause' : 'Start'}
      </button>
      <button onClick={handleReset} style={{ ...buttonStyle, marginLeft: '10px' }}>Reset</button>
    </div>
  );
}

// Basic button styling
const buttonStyle = {
  padding: '10px 20px',
  fontSize: '1em',
  margin: '5px',
  cursor: 'pointer',
};

export default Timer;
