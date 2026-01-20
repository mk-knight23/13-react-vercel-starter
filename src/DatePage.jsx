// DatePage.js
import React from 'react';
import './styles.css';

function DatePage() {
  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = currentDate.toLocaleString('default', { month: 'long' });
  const year = currentDate.getFullYear();

  return (
    <div className="container date-page">
      <h2>Date Page</h2>
      <div className="date-text">
        {day}, {month}, {year}
      </div>
    </div>
  );
}

export default DatePage;
