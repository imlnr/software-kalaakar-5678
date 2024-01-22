// Signup.js
import React, { useState } from 'react';
import '../styles/Signup.css';
import logo from '../logo.png';
import vdo from '../vdo.mp4'; 
import { Link } from 'react-router-dom';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  // const [error, setError] = useState('');

  const handleSignup = () => {
    // Add your signup logic here
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
  };

  return (
    <div className="signup-container">
    <div className="Video-bgContainer">
      <video autoPlay muted loop className="signupVideo-bg">
        <source src={vdo} type="video/mp4" />
      </video>
    </div>

    <div className="signupContent">
      <span><img src={logo} alt="" className="signupLogo" /></span>
      <h2 className="signupText">Create an Account on EduSprint</h2>
      <form className="signupForm">
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Full Name"
          value={name}
         onChange={(e)=>{setName(e.target.value)}}
         required
        /><br /><br />
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        /><br /><br />
        <input
          type="password"
          id="password"
          name="password"
          required
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /><br /><br />
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          placeholder="Confirm your Password"
          value={confirmPassword}
          required
          onChange={(e) => setConfirmPassword(e.target.value)}
        /><br /><br />
        <button
          type="button"
          id="submitBtn"
          className="signuptBtn"
          onClick={handleSignup}
        >Sign Up</button>
      <p>Already have an account? <Link to="/login">Log in</Link></p>
      </form>
      {/* <div id="errorBox" className="signupError-box">
        {error && <p>{error}</p>}
      </div> */}
    </div>
  </div>
  );
};

export default Signup;
