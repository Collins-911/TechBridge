import React from 'react';
import { Link } from 'react-router-dom';
import '../css/mentors.css';
import Navbar from '../components/Navbar';
import { FaFire } from "react-icons/fa";

export default function Mentors() {
  const mentors = [
  { id: 1, name: 'Jacinta Bisong', expertise: 'Front End Web Development', rating: 8.9, sessions: 120 },
  { id: 2, name: 'Best Bisong', expertise: 'Back End Web Development', rating: 9.5, sessions: 95 },
  { id: 3, name: 'Collins Acheng', expertise: 'Full Stack Development', rating: 8.7, sessions: 80 },
  { id: 4, name: 'Idara Excellence', expertise: 'Full Stack Development', rating: 8.6, sessions: 65 },
  { id: 5, name: 'Daneil', expertise: 'Back End Web Development', rating: 8.6, sessions: 110 },

];
 

  return (
    <>
      <Navbar />
      <div className="mentors-page">
        <div className="mentors-header">
          <h1>Find Your Perfect Mentor</h1>
          <p>Connect with industry experts to accelerate your learning journey</p>
        </div>
        
        <div className="mentors-grid">
          {mentors.map((mentor) => (
            <div key={mentor.id} className="mentor-card">
              <div className="mentor-avatar">
                <span>{mentor.name.charAt(0)}</span>
              </div>
              <h3>{mentor.name}</h3>
              <p className="mentor-expertise">{mentor.expertise}</p>
              <div className="mentor-rating">
                <div className="stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className={i < Math.floor(mentor.rating) ? 'star filled' : 'star'}>
                      {i < Math.floor(mentor.rating) ? '★' : '☆'}
                    </span>
                  ))}
                </div>
                <span className="rating-value">{mentor.rating}</span>
              </div>
              <div className="mentor-stats">
                <span><FaFire  style={{color: "red", marginRight: "0.5rem"}}/>{mentor.sessions}+ sessions</span>
              </div>
              <Link to={`/mentors/${mentor.id}`} className="view-profile-btn">
                View Profile
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}