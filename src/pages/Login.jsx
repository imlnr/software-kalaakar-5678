// src/Login.js
import React, { useRef } from 'react';
import { getLogged } from '../Redux/action-types';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useToast } from '@chakra-ui/react'
import Loading from '../components/Loading';
import '../styles/Login.css';
import logo from '../logo.png';
import vdo from '../vdo.mp4';
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const emailref = useRef(null);
  const passref = useRef(null);
  const toast = useToast();
  const state = useSelector((state) => state);
  const handleLogin = (e) => {
    e.preventDefault();
    console.log("clicked");
    dispatch(getLogged(emailref.current.value, passref.current.value)).then(() => {
      navigate("/");
      toast({
        title: 'Successfully LoggedIn.',
        description: "We've successfully logged into your Account.",
        status: 'success',
        duration: 9000,
        isClosable: true,
      });
      console.log(state);
    }).catch((e) => {
      toast({
        title: 'Login Error.',
        description: "You are facing error with login.",
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
    })
  }

  return (

   <div className="login-container">
<div className="video-bg">
        <video autoPlay muted loop className="loginVideo-bg">
          <source src={vdo} type="video/mp4" />
        </video>
      </div>

    <div className="loginContent">
      <span><img src={logo} alt="" className="loginLogo" /></span>
      <h2 className='loginText'>Sign in to EduSprint</h2>
      {
        state.isLoading?<Loading/>:
        <form className='loginForm' onSubmit={handleLogin}>
        <input
          type="email"
          id="email"
          name="email"
          ref={emailref}
          placeholder="Email or User Name"
          required
        /><br /><br />
        <input
          type="password"
          id="password"
          name="password"
          ref={passref}
          placeholder="Password"
          required
        /><br /><br />
        <button
          type="submit"
          id="submitBtn"
          className="submitBtn"
        >{state.isLoading? "Attempting to login": "Login"}</button>
      <p>Don't have an account? <Link to="/sign-up">Sign up</Link></p>
      </form>
      }
      {/* <div id="errorBox" className="error-box">
        {error && <p>{error}</p>}
      </div> */}
    </div>
  </div>

    
  );
};

export default Login;
