import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaLock, FaGoogle, FaGithub, FaTwitter, FaEye, FaEyeSlash, FaChalkboardTeacher, FaUserGraduate } from 'react-icons/fa';
import { MdEmail } from "react-icons/md";
import { FiGitlab } from "react-icons/fi";
import '../../css/login.css';

export default function Register() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('student'); // 'student' or 'mentor'
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ fullName, email, password, userType, rememberMe });
    // You can now handle form submission logic here (e.g., API request)
  };

  return (
    <div className="login-container">
      <div className="background-section"></div>

      <div className="auth-card">
        <div className="auth-header">
          <h2>Create Account</h2>
          <p>Register to begin your TechBridge journey</p>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="input-group">
            <FaUser className="input-icon" />
            <input
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              autoComplete="name"
              required
            />
          </div>

          <div className="input-group">
            <MdEmail className="input-icon" />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              required
            />
          </div>

        

          <div className="input-group">
            <FaLock className="input-icon" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="new-password"
              required
            />
            <button
              type="button"
              className="password-toggle"
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </button>
          </div>

            <div className="input-group">
            <div className="user-type-select">
              <div className={`user-type-option ${userType === 'student' ? 'active' : ''}`} 
                   onClick={() => setUserType('student')}>
                <FaUserGraduate className="user-type-icon" />
                <span>Student</span>
              </div>
              <div className={`user-type-option ${userType === 'mentor' ? 'active' : ''}`} 
                   onClick={() => setUserType('mentor')}>
                <FaChalkboardTeacher className="user-type-icon" />
                <span>Mentor</span>
              </div>
            </div>
          </div>

          <div className="auth-options">
            <label className="remember-me">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
              Remember me
            </label>
          </div>

          <button type="submit" className="auth-button">
            Register
          </button>

          <div className="divider">
            <span>OR</span>
          </div>

          <div className="social-auth">
            <button type="button" className="social-button google">
              <FaGoogle />
            </button>
            <button type="button" className="social-button github">
              <FaGithub />
            </button>
            <button type="button" className="social-button twitter">
              <FaTwitter />
            </button>
            <button type="button" className="social-button gitlab">
              <FiGitlab />
            </button>
          </div>

          <div className="auth-footer">
            Already have an account? <Link to="/login">Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
}