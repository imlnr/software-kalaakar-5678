
import React, { useState, useEffect } from 'react';
import { FaClock, FaPhone, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import '../styles/Navbar.css';
import logo from '../logo.png';
import Menubar from './Menubar';


const Navbar = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <nav className="navbar">
        <div className="navbarContainer">
          <div className="company-logo">
            <img className='companyLogo-img' src={logo} alt="Logo" />
          </div>
          <marquee className='mrqe' attribute_name="attribute_value" attributes>
            "Unlock your potential with our cutting-edge online learning platform. Dive into a world of knowledge, personalized courses, and interactive resources, empowering you to thrive in the digital age."
          </marquee>
          <div className="info">
            <div className="contact">
              {/* <FaPhone />  */}
              Contact Us: +919105455891
            </div>
            <div className="clock">
              {/* <FaClock />  */}
              {currentTime.toLocaleTimeString()}
            </div>
            <div className="navbarSocial-icons">
              <a href="#" className="navSocial-icon"><FaFacebook /></a>
              <a href="#" className="navSocial-icon"><FaTwitter /></a>
              <a href="#" className="navSocial-icon"><FaInstagram /></a>
            </div>
          </div>
        </div>
      </nav>
      <Menubar />

    </>
  );
}

export default Navbar;
