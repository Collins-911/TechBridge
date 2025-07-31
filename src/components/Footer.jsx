import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaTwitter, FaGithub, FaEnvelope } from 'react-icons/fa';
import '../css/footer.css';

export default function 
Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        
        {/* Logo and Description */}
        <div className="footer-about">
          <h3>TechBridge 2025</h3>
          <p>Bridging the gap between tech talent and industry opportunities through mentorship.</p>
          <div className="footer-social">
            <a href="https://linkedin.com/company/techbridge2025" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://twitter.com/techbridge2025" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://github.com/techbridge2025" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="mailto:contact@techbridge2025.com">
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/mentors">Find Mentors</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/connect">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-contact">
          <h4>Contact Us</h4>
          <ul>
            <li>Lagos, Nigeria</li>
            <li>contact@techbridge2025.com</li>
            <li>+234 123 456 7890</li>
          </ul>
        </div>

      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} TechBridge 2025. All rights reserved.</p>
      </div>
    </footer>
  );
};

