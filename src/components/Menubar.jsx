
import React from 'react';
import { Link } from 'react-router-dom'; 
import '../styles/Menubar.css'; 
// import '../styles/newMenu.css'; 
import { IoMenu } from "react-icons/io5";
const Menubar = () => {
  return (
    <nav className="menuBar">
      <div className="menuContainer">
      
      <Link to="/" className="menu-link">Home</Link>
        <Link to="/" className="menu-link">About Us</Link>
        <Link to="/" className="menu-link">Courses</Link>
        <Link to="/" className="menu-link">LogIn</Link>
        <Link to="/" className="menu-link">SignUp</Link>
        <Link to="/" className="menu-link">Explore</Link>
        <Link to="/" className="menu-link">Cart</Link>
        <span>
        <IoMenu />
        </span>  
      </div>
    </nav>
  );
}

export default Menubar;

