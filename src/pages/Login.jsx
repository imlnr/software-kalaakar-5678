// src/Login.js
import React, { useRef } from 'react';
import { getLogged } from '../Redux/action-types';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useToast } from '@chakra-ui/react'
import Loading from '../components/Loading';

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
    <div className="min-h-screen flex items-center justify-center light-blue-transparent-bg">
      {/* <pre>{JSON.stringify(state,null,2)}</pre> */}
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-6 teal-text">Login</h2>
        {
          state.isLoading?<Loading/>:
        <form onSubmit={handleLogin} className="text-gray-700">
          <div className="mb-12 flex items-center">
            <label className="block text-sm font-bold mb-2 white-text text-left ml-1 mr-7" htmlFor="email" >
              Email:
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline ml-2"
              id="email"
              type="email"
              ref={emailref}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4 flex items-center">
            <label className="block text-sm font-bold mb-2 white-text text-left ml-1" htmlFor="password">
              Password:
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline ml-2"
              id="password"
              type="password"
              ref={passref}
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="mb-6">
            <button
              className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              {state.isLoading? "Attempting to login": "Login"}
            </button>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-sm white-text text-left ml-1">
              Don't have an account? <Link to="/sign-up" className="teal-text">Sign Up</Link>
            </p>
          </div>
        </form>
        }
      </div>
    </div>
  );
};

export default Login;
