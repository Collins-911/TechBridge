import React from 'react';
import '../css/profile.css'

export default function Profile(){
  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="profile-avatar">
          <img src="https://via.placeholder.com/150" alt="Profile" />
        </div>
        <div className="profile-info">
          <h1>John Doe</h1>
          <p>Senior Software Engineer</p>
          <div className="profile-stats">
            <div className="stat-item">
              <span className="stat-number">245</span>
              <span className="stat-label">Connections</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">12</span>
              <span className="stat-label">Projects</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="profile-content">
        <div className="profile-section">
          <h2>About</h2>
          <p>Experienced software engineer specializing in React, Node.js, and cloud technologies. Passionate about building scalable web applications and mentoring junior developers.</p>
        </div>
        
        <div className="profile-section">
          <h2>Skills</h2>
          <div className="skills-container">
            <span className="skill-tag">React</span>
            <span className="skill-tag">JavaScript</span>
            <span className="skill-tag">Node.js</span>
            <span className="skill-tag">CSS</span>
            <span className="skill-tag">AWS</span>
            <span className="skill-tag">TypeScript</span>
          </div>
        </div>
        
        <div className="profile-section">
          <h2>Experience</h2>
          <div className="experience-item">
            <h3>Tech Bridge Solutions</h3>
            <p className="experience-period">2020 - Present</p>
            <p className="experience-desc">Lead frontend developer working on enterprise applications.</p>
          </div>
          <div className="experience-item">
            <h3>Digital Innovations</h3>
            <p className="experience-period">2017 - 2020</p>
            <p className="experience-desc">Full stack developer working on various web projects.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

