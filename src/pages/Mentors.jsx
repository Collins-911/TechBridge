import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/mentors.css';
import Navbar from '../components/Navbar';
import { FaFire } from "react-icons/fa";
import axios from 'axios';

export default function Mentors() {
  const [mentors, setMentors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Helper: safely parse JSON strings
  const parseJSONSafe = (value) => {
    if (!value) return [];
    try {
      const parsed = JSON.parse(value);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  };

  useEffect(() => {
    const fetchMentors = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/users/mentors");
        const data = res.data;

        const parsedMentors = data.map((mentor) => ({
          ...mentor,
          skills: Array.isArray(mentor.skills) ? mentor.skills : parseJSONSafe(mentor.skills),
          projects: Array.isArray(mentor.projects) ? mentor.projects : parseJSONSafe(mentor.projects),
          connections: Array.isArray(mentor.connections) ? mentor.connections : parseJSONSafe(mentor.connections),
          experience: Array.isArray(mentor.experience) ? mentor.experience : parseJSONSafe(mentor.experience),
          about: mentor.about || "",
        }));

        setMentors(parsedMentors);
      } catch (err) {
        console.error("❌ Error fetching mentors:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMentors();
  }, []);

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="mentors-page">
          <h2>Loading mentors...</h2>
        </div>
      </>
    );
  }

  if (error) {
    return (
      <>
        <Navbar />
        <div className="mentors-page">
          <h2>Error: {error}</h2>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="mentors-page">
        <div className="mentors-header">
          <h1>Find Your Perfect Mentor</h1>
          <p>Connect with industry experts to accelerate your learning journey</p>
        </div>

        <div className="mentors-grid">
          {mentors.length === 0 ? (
            <p>No mentors found.</p>
          ) : (
            mentors.map((mentor) => (
              <div key={mentor.id} className="mentor-card">
                <div className="mentor-avatar">
                  <span>{mentor.name.charAt(0).toUpperCase()}</span>
                </div>
                <h3>{mentor.name}</h3>
                <p className="mentor-expertise">
                  {mentor.skills.length > 0
                    ? mentor.skills.join(", ")
                    : "No skills listed"}
                </p>

                <div className="mentor-rating">
                  <div className="stars">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span
                        key={i}
                        className={i < 4 ? 'star filled' : 'star'} // default 4 stars
                      >
                        {i < 4 ? '★' : '☆'}
                      </span>
                    ))}
                  </div>
                  <span className="rating-value">8.5</span>
                </div>

                <div className="mentor-stats">
                  <span>
                    <FaFire style={{ color: "red", marginRight: "0.5rem" }} />
                    50+ sessions
                  </span>
                </div>

                <Link to={`/mentors/${mentor.id}`} className="view-profile-btn">
                  View Profile
                </Link>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}
