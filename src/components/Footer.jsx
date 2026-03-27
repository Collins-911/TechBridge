import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaDiscord, FaGithub, FaEnvelope } from 'react-icons/fa';
import '../css/footer.css';

export default function 
Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-about">
          <h3>TechBridge 2025</h3>
          <p>Bridging the gap between tech talent and industry opportunities through mentorship.</p>
          <div className="footer-social">
            <a href="https://www.linkedin.com/in/collins-emelumba-85031637a" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://github.com/Collins-911/TechBridge.git" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="mailto:emelumbacollins@gmail.com">
              <FaEnvelope />
            </a>
             <a href="mailto:emelumbacollins@gmail.com">
              <FaDiscord/>
            </a>
          </div>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/mentors">Find Mentors</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/connect">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact Us</h4>
          <ul>
            <li>Calabar, Nigeria</li>
            <li>emelumbacollins@gmail.com</li>
            <li>+234 903 449 3443</li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} TechBridge 2025. All rights reserved.</p>
      </div>
    </footer>
  );
};

