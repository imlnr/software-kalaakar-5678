// Footer.js

import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import '../styles/Footer.css';
import logo from '../logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerContainer">
      <span className='footerLogo'>
  <img className='footerLogoImg' src={logo} alt="Logo" />
  <marquee className="marquee-text">"Embark on a Transformative Learning Odyssey with EduSprint – Your Gateway to Academic Excellence and Innovation! Unleash the Power of Education with Cutting-edge Resources, Interactive Modules, and Personalized Learning Experiences, as we Navigate the Digital Frontier Together. EduSprint: Shaping Futures, Igniting Minds, and Pioneering the Next Era of Education!"</marquee>
</span>
        <div className="footer-content">
          <div className="footer-section about">
            <h2 className='hTwo'>About Us</h2>
            <p>
            "EduSprint: Your Passport to Academic Excellence. Dive into personalized learning, innovative methods, and tech-enhanced education. Elevate your learning experience with us!"
            </p>
            <div className="footerSocial-icons">
              <a href="#" className="footerIcon"><FaFacebook /></a>
              <a href="#" className="footerIcon"><FaTwitter /></a>
              <a href="#" className="footerIcon"><FaInstagram /></a>
            </div>
          </div>

          <div className="footer-links footer-section links">
            <h2>Quick Links</h2>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Courses</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          <div className="footer-links footer-section links">
            <h2>Our Services</h2>
            <ul>
              <li><a href="#">Web Design</a></li>
              <li><a href="#">Graphic Design</a></li>
              <li><a href="#">Digital Marketing</a></li>
            </ul>
          </div>

          <div className="footer-links footer-section links">
            <h2>Latest News</h2>
            <ul>
              <li><a href="#">New Course Released</a></li>
              <li><a href="#">Upcoming Events</a></li>
              <li><a href="#">Blog Posts</a></li>
            </ul>
          </div>

          <div className="footer-section contact-form">
            <h2>Contact Us</h2>
            <form className='footer-form'>
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Your Email" />
              <textarea placeholder="Your Message"></textarea>
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 EduSprint, All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
