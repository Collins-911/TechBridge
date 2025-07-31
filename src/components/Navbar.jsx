import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../css/navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [underlineStyle, setUnderlineStyle] = useState({});
  const location = useLocation();

  useEffect(() => {
    const activeLink = document.querySelector('.navbar-links a.active');
    if (activeLink) {
      const { offsetLeft, offsetWidth } = activeLink;
      setUnderlineStyle({
        left: `${offsetLeft}px`,
        width: `${offsetWidth}px`,
        opacity: 1
      });
    }
  }, [location]);

  const handleLinkHover = (e) => {
    const { offsetLeft, offsetWidth } = e.target;
    setUnderlineStyle({
      left: `${offsetLeft}px`,
      width: `${offsetWidth}px`,
      opacity: 0.7
    });
  };

  const handleLinkLeave = () => {
    const activeLink = document.querySelector('.navbar-links a.active');
    if (activeLink) {
      const { offsetLeft, offsetWidth } = activeLink;
      setUnderlineStyle({
        left: `${offsetLeft}px`,
        width: `${offsetWidth}px`,
        opacity: 1
      });
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <Link to="/" className="full-brand">TechBridge</Link>
          <Link to="/" className="short-brand">TB</Link>
        </div>

        <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
          <div className="active-indicator" style={underlineStyle} />
          <Link to="/" className={location.pathname === '/' ? 'active' : ''} onClick={() => setIsOpen(false)} onMouseEnter={handleLinkHover} onMouseLeave={handleLinkLeave}>Home</Link>
          <Link to="/mentors" className={location.pathname === '/mentors' ? 'active' : ''} onClick={() => setIsOpen(false)} onMouseEnter={handleLinkHover} onMouseLeave={handleLinkLeave}>Mentors</Link>
          <Link to="/about" className={location.pathname === '/about' ? 'active' : ''} onClick={() => setIsOpen(false)} onMouseEnter={handleLinkHover} onMouseLeave={handleLinkLeave}>About</Link>
          <Link to="/connect" className={location.pathname === '/connect' ? 'active' : ''} onClick={() => setIsOpen(false)} onMouseEnter={handleLinkHover} onMouseLeave={handleLinkLeave}>Connect</Link>
        </div>

        <div className={`navbar-auth ${isOpen ? 'active' : ''}`}>
          <Link to="/login" className="login-btn" onClick={() => setIsOpen(false)}>Login</Link>
          <Link to="/signup" className="signup-btn" onClick={() => setIsOpen(false)}>Sign Up</Link>
        </div>

        <div className="mobile-menu-btn" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </nav>
  );
}