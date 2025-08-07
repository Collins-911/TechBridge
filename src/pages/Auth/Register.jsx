import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser, FaLock, FaGithub, FaEye, FaEyeSlash, FaChalkboardTeacher, FaUserGraduate } from 'react-icons/fa';
import { MdEmail } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import axios from 'axios';
import Swal from 'sweetalert2';
import BASE_URL from './config.js';
import Loader from '../../components/Loader'; 
import '../../css/login.css';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('Student');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const res = await axios.post(`${BASE_URL}/auth/register`, {
        name,
        email,
        password,
        role,
      });

      setIsLoading(false);
      
      await Swal.fire({
        icon: 'success',
        title: 'Registered successfully!',
        text: 'You can now login to your account.',
        timer: 2500,
        showConfirmButton: false,
      });

      navigate('/login');
    } catch (err) {
      setIsLoading(false);
      Swal.fire({
        icon: 'error',
        title: 'Registration Failed',
        text: err.response?.data?.message || err.message,
      });
      console.error('Registration error:', err);
    }
  };

  return (
    <div className="login-container">
      {/* Show Loader when isLoading is true */}
      {isLoading && <Loader />}
      
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
              autoComplete="email"
              required
              disabled={isLoading}
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
              disabled={isLoading}
            />
            <button
              type="button"
              className="password-toggle"
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? "Hide password" : "Show password"}
              disabled={isLoading}
            >
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </button>
          </div>

          <div className="input-group">
            <div className="user-type-select">
              <div
                className={`user-type-option ${role === 'Student' ? 'active' : ''}`}
                onClick={() => !isLoading && setRole('Student')}
              >
                <FaUserGraduate className="user-type-icon" />
                <span>Student</span>
              </div>
              <div
                className={`user-type-option ${role === 'Mentor' ? 'active' : ''}`}
                onClick={() => !isLoading && setRole('Mentor')}
              >
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
                onChange={() => !isLoading && setRememberMe(!rememberMe)}
                disabled={isLoading}
              />
              Remember me
            </label>
          </div>

          <button 
            type="submit" 
            className="auth-button"
            disabled={isLoading}
          >
            {isLoading ? 'Registering...' : 'Register'}
          </button>

          <div className="divider">
            <span>OR</span>
          </div>

          <div className="social-auth">
            <button 
              type="button" 
              className="social-button google"
              disabled={isLoading}
            >
              <FcGoogle />
            </button>
            <button 
              type="button" 
              className="social-button github"
              disabled={isLoading}
            >
              <FaGithub />
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