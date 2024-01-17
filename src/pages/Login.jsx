// src/Login.js
import React from 'react';

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center light-blue-transparent-bg">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-6 teal-text">Login</h2>
        <form className="text-gray-700">
          <div className="mb-12 flex items-center">
            <label className="block text-sm font-bold mb-2 white-text text-left ml-1 mr-7" htmlFor="email">
              Email:
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline ml-2"
              id="email"
              type="email"
              placeholder="Enter your email"
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
              placeholder="Enter your password"
            />
          </div>
          <div className="mb-6">
            <button
              className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Sign In
            </button>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-sm white-text text-left ml-1">
              Don't have an account? <a href="#" className="teal-text">Sign Up</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
