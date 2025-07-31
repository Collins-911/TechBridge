import React from 'react';
import { Link } from 'react-router-dom';
import '../css/about.css';
import Navbar from '../components/Navbar';

export default function About() {
const teamMembers = [
    {
      id: 1,
      name: 'Emelumba Collins',
      role: 'Founder & CEO',
      bio: 'Former tech lead with 10+ years in software development',
      image: 'https://i.pinimg.com/736x/32/77/64/3277642f444d174e24d94fb15cce6589.jpg'
    },
    {
      id: 2,
      name: 'Bisong Best',
      role: 'Backend Engineer',
      bio: 'Specialist in scalable systems and database architecture',
      image: 'https://i.pinimg.com/736x/ff/2d/0d/ff2d0d681970cdf32dfc3659a1913e84.jpg'
    },
    {
      id: 3,
      name: 'Bisong Jacinta',
      role: 'Product Lead',
      bio: 'UX designer focused on creating seamless experiences',
      image: 'https://i.pinimg.com/736x/44/62/f9/4462f9d585a3b3b4dc45c3a711f0a94c.jpg'
    }
  ];

  return (
    <>
      <Navbar />
      <div className="about-page">
        
        <section className="our-story">
          <div className="container">
            <h2>Our Story</h2>
            <div className="story-content">
              <div className="story-text">
                <p>TechBridge 2025 was founded to solve one simple problem: great tech mentorship should be accessible to everyone.</p>
                <p>After experiencing the challenges of breaking into tech firsthand, our team built the solution we wished existed - creating bridges between aspiring technologists and industry experts.</p>
                <p>Today, we're proud to be building Africa's premier tech mentorship platform, helping thousands accelerate their careers through personalized guidance.</p>
              </div>
              <div className="story-image">
                <img src="https://i.pinimg.com/1200x/30/80/dd/3080dd150199ad66034240a3c9890635.jpg" alt="Our team collaborating" />
              </div>
            </div>
          </div>
        </section>

        <section className="our-team">
          <div className="container">
            <h2>Meet The Team</h2>
            <div className="team-members">
              {teamMembers.map(member => (
                <div key={member.id} className="team-card">
                  <div className="team-image">
                    <img src={member.image} alt={member.name} />
                  </div>
                  <h3>{member.name}</h3>
                  <p className="team-role">{member.role}</p>
                  <p className="team-bio">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>
    </>
  );
}