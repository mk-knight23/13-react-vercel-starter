// TimePage.js
import React, { useState, useEffect } from 'react';
import './styles.css';

function TimePage() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const get12HourFormat = (date) => {
    let hours = date.getHours();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds} ${ampm}`;
  };

  return (
    <div className="container time-page">
      <h2>Time Page</h2>
      <div className="round-clock">
        <div className="clock-face">
          <div className="hour-hand" style={{ transform: `rotate(${(currentTime.getHours() % 12) * 30}deg)` }}></div>
          <div className="minute-hand" style={{ transform: `rotate(${currentTime.getMinutes() * 6}deg)` }}></div>
          <div className="second-hand" style={{ transform: `rotate(${currentTime.getSeconds() * 6}deg)` }}></div>
          <div className="center-circle"></div>
        </div>
      </div>
      <div className="digital-clock">{get12HourFormat(currentTime)}</div>
    </div>
  );
}

export default TimePage;
