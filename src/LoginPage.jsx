// LoginPage.js
import React from 'react';
import { FaGoogle, FaFacebook, FaMicrosoft, FaLinkedin } from 'react-icons/fa';
import './styles.css';

function LoginPage() {
  return (
    <div className="container">
      <h2>Login</h2>
      {/* Add your login form here */}
      <form>
        {/* Add your login form fields */}
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" />
        </div>
        <button type="submit">Login</button>
      </form>
      {/* Social login buttons with logos */}
      <div className="social-login">
        <button className="google-btn">
          <FaGoogle className="icon" />
          Login with Google
        </button>
        <button className="facebook-btn">
          <FaFacebook className="icon" />
          Login with Facebook
        </button>
        <button className="microsoft-btn">
          <FaMicrosoft className="icon" />
          Login with Microsoft
        </button>
        <button className="linkedin-btn">
          <FaLinkedin className="icon" />
          Login with LinkedIn
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
