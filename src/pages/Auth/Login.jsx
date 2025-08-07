import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaLock, FaGithub, FaEye, FaEyeSlash, FaUser } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { FcGoogle } from 'react-icons/fc';
import axios from 'axios';
import Swal from 'sweetalert2';
import BASE_URL from './config.js';
import Loader from '../../components/Loader.jsx';
import '../../css/login.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (password.length < 6) {
      setIsLoading(false);
      Swal.fire({
        icon: 'error',
        title: 'Password too short',
        text: 'Password must be at least 6 characters',
      });
      return;
    }

    try {
      const response = await axios.post(`${BASE_URL}/auth/login`, {
        email,
        password,
        name
      });

      const { token, message } = response.data;

      if (rememberMe) {
        localStorage.setItem('authToken', token);
      } else {
        sessionStorage.setItem('authToken', token);
      }

      setIsLoading(false);
      
      await Swal.fire({
        icon: 'success',
        title: 'Login successful!',
        text: message || 'Welcome back!',
      });

      navigate('/');
    } catch (error) {
      setIsLoading(false);
      Swal.fire({
        icon: 'error',
        title: 'Login failed',
        text: error.response?.data?.message || 'Invalid credentials',
      });
    }
  };

  return (
    <div className="login-container">
      {isLoading && <Loader />}
      
      <div className="background-section"></div>

      <div className="auth-card">
        <div className="auth-header">
          <h2>Welcome Back</h2>
          <p>Sign in to continue your TechBridge journey</p>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="input-group">
            <FaUser className="input-icon" />
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoComplete="name"
              required
              disabled={isLoading}
            />
          </div>

          <div className="input-group">
            <MdEmail className="input-icon" />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="username"
              required
              disabled={isLoading}
            />
          </div>

          <div className="input-group">
            <FaLock className="input-icon" />
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              required
              disabled={isLoading}
            />
            <button
              type="button"
              className="password-toggle"
              onClick={() => !isLoading && setShowPassword(!showPassword)}
              aria-label={showPassword ? 'Hide password' : 'Show password'}
              disabled={isLoading}
            >
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </button>
          </div>

          <div className="auth-options">
            <label className="remember-me">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={() => !isLoading && setRememberMe(!rememberMe)}
                disabled={isLoading}
              />
              Remember me
            </label>
            <Link to="/forgot-password" className="forgot-password">
              Forgot password?
            </Link>
          </div>

          <button 
            type="submit" 
            className="auth-button"
            disabled={isLoading}
          >
            {isLoading ? 'Logging in...' : 'Login'}
          </button>

          <div className="divider"><span>OR</span></div>

          <div className="social-auth">
            <button 
              type="button" 
              className="social-button google" 
              title="Sign in with Google"
              disabled={isLoading}
            >
              <span className="google-icon"><FcGoogle /></span>
            </button>

            <button 
              type="button" 
              className="social-button github" 
              title="Sign in with GitHub"
              disabled={isLoading}
            >
              <FaGithub />
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