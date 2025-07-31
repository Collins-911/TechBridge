import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaLock, FaGoogle, FaGithub, FaTwitter, FaEye, FaEyeSlash} from 'react-icons/fa';
import { MdEmail } from "react-icons/md";
import { FiGitlab } from "react-icons/fi";
import '../../css/login.css'

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password, rememberMe });
  };
  
  

  return (
    <div className="login-container">
      <div className="background-section">

</div>

      <div className="auth-card">
        <div className="auth-header">
          <h2>Welcome Back</h2>
          <p>Sign in to continue your TechBridge journey</p>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="input-group">
            <MdEmail className="input-icon" />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="username"
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
              autoComplete="current-password"
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

          <div className="auth-options">
            <label className="remember-me">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
              Remember me
            </label>
            <Link to="/forgot-password" className="forgot-password">
              Forgot password?
            </Link>
          </div>

          <button type="submit" className="auth-button">
            Login
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
            Don't have an account? <Link to="/register">Register</Link>
          </div>
        </form>
      </div>
    </div>
  );
}