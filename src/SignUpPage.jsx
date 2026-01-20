// SignUpPage.js
import React from 'react';
import { FaGoogle, FaFacebook, FaMicrosoft, FaLinkedin } from 'react-icons/fa';
import './styles.css';

function SignUpPage() {
  return (
    <div className="container">
      <h2>Sign Up</h2>
      {/* Add your sign-up form here */}
      <form>
        {/* Add your sign-up form fields */}
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" />
        </div>
        <button type="submit">Sign Up</button>
      </form>
      {/* Social login buttons with logos */}
      <div className="social-login">
        <button className="google-btn">
          <FaGoogle className="icon" />
          Sign up with Google
        </button>
        <button className="facebook-btn">
          <FaFacebook className="icon" />
          Sign up with Facebook
        </button>
        <button className="microsoft-btn">
          <FaMicrosoft className="icon" />
          Sign up with Microsoft
        </button>
        <button className="linkedin-btn">
          <FaLinkedin className="icon" />
          Sign up with LinkedIn
        </button>
      </div>
    </div>
  );
}

export default SignUpPage;
