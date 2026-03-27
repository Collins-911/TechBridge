import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/connect.css';
import Navbar from '../components/Navbar';
import { FaLinkedin, FaTwitter, FaInstagram, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
 import ScrollToTop from '../components/ScrollToTop';
import Swal from 'sweetalert2';

export default function Connect() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    Swal.fire({
  title: 'Message Sent! 🎉',
  text: "Thank you for reaching out! We'll get back to you soon.",
  icon: 'success',
  confirmButtonText: 'Sounds good!',
  confirmButtonColor: '#3085d6',
});
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <ScrollToTop/>
      <Navbar />
      <div className="connect-page">
        <section className="connect-hero">
          <div className="container">
            <h1>Connect With TechBridge 2025</h1>
            <p>We'd love to hear from you! Reach out for partnerships, questions, or mentorship opportunities.</p>
          </div>
        </section>

        <div className="contact-sections">
          <section className="contact-form">
            <div className="container">
              <h2>Send Us a Message</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    required
                  ></textarea>
                </div>
                
                <button type="submit" className="submit-btn">Send Message</button>
              </form>
            </div>
          </section>

          <section className="contact-info">
            <div className="container">
              <h2>Other Ways to Reach Us</h2>
              
              <div className="info-card">
                <FaEnvelope className="info-icon" />
                <div>
                  <h3>Email</h3>
                  <a href="mailto:contact@techbridge2025.com">emelumbacollins@gmail.com</a>
                </div>
              </div>
              
              <div className="info-card">
                <FaPhone className="info-icon" />
                <div>
                  <h3>Phone</h3>
                  <a href="tel:+2349034493443">+234 903 449 3443</a>
                </div>
              </div>
              
              <div className="info-card">
                <FaMapMarkerAlt className="info-icon" />
                <div>
                  <h3>Office</h3>
                  <p>Solomon Street, Nugi Innovation Nigeria</p>
                </div>
              </div>
              
              <div className="social-links">
                <h3>Follow Us</h3>
                <div className="social-icons">
                  <a href="https://www.linkedin.com/in/collins-emelumba-85031637a" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                  </a>
                  <a href="" target="_blank" rel="noopener noreferrer">
                    <FaTwitter />
                  </a>
                  <a href="" target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}