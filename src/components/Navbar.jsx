import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes, FaPencilAlt } from 'react-icons/fa';
import '../css/navbar.css';

const getStoredUser = () => {
  try {
    const raw = localStorage.getItem('user') || sessionStorage.getItem('user');
    return raw ? JSON.parse(raw) : null;
  } catch {
    localStorage.removeItem('user');
    sessionStorage.removeItem('user');
    return null;
  }
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(getStoredUser);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleAuthChange = () => setUser(getStoredUser());
    window.addEventListener('authChange', handleAuthChange);
    return () => window.removeEventListener('authChange', handleAuthChange);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const toggleMenu = () => setIsOpen(prev => !prev);
  const closeMenu = () => setIsOpen(false);

  const handleLogout = () => {
    localStorage.clear();
    sessionStorage.clear();
    setUser(null);
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <Link to="/" onClick={closeMenu}>TechBridge</Link>
        </div>
        <button
          className="mobile-menu-btn"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
        <div className={`navbar-menu ${isOpen ? 'open' : ''}`}>
          <div className="navbar-links">
            <Link to="/" className={location.pathname === '/' ? 'active' : ''} onClick={closeMenu}>Home</Link>
            <Link to="/mentors" className={location.pathname === '/mentors' ? 'active' : ''} onClick={closeMenu}>Mentors</Link>
            <Link to="/about" className={location.pathname === '/about' ? 'active' : ''} onClick={closeMenu}>About</Link>
            <Link to="/connect" className={location.pathname === '/connect' ? 'active' : ''} onClick={closeMenu}>Connect</Link>
          </div>

          <div className="navbar-auth">
            {user ? (
              <div className="profile-section">
                <div className="profile-avatar">
                  {user.name?.charAt(0) || "U"}
                </div>
                <Link to="/profile" className="profile-name" onClick={closeMenu} title='Edit'>
                  {user.name}
                </Link>

                <button className="logout-btn" onClick={handleLogout}>Logout</button>
              </div>
            ) : (
              <>
                <Link to="/login" className="login-btn" onClick={closeMenu}>Login</Link>
                <Link to="/register" className="signup-btn" onClick={closeMenu}>Sign Up</Link>
              </>
            )}
          </div>
        </div>

      </div>
    </nav>
  );
}