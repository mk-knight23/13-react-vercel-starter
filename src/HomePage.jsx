// HomePage.js
import React from 'react';
import './styles.css';

function HomePage() {
  return (
    <div className="container home-page">
      <h1>Welcome to Our Website</h1>
      <div className="vision-section">
        <h2>Our Vision</h2>
        <ul>
          <li>To empower individuals through knowledge.</li>
          <li>To make learning accessible and enjoyable for everyone.</li>
          <li>To foster a curious and inquisitive mindset.</li>
        </ul>
      </div>
      <div className="random-thoughts">
        <h2>Thoughts</h2>
        <p>Learning never exhausts the mind.</p>
        <p>The only source of knowledge is experience.</p>
        <p>Education is not preparation for life; education is life itself.</p>
        {/* Add more random thoughts here */}
      </div>
    </div>
  );
}

export default HomePage;
