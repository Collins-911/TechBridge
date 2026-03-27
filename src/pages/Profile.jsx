import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import "../css/profile.css";
import Swal from "sweetalert2";
import BASE_URL from '../config.js';

export default function Profile() {
  const [user, setUser] = useState(null);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem('token') || sessionStorage.getItem('token');
        const storedUser = localStorage.getItem('user') || sessionStorage.getItem('user');

        if (!token || !storedUser) {
          console.error("Not logged in — redirecting.");
          window.location.href = "/login";
          return;
        }

        const parsed = JSON.parse(storedUser);
        const id = parsed.id;

        const res = await axios.get(`${BASE_URL}/users/${id}`, {
  headers: { Authorization: `Bearer ${token}` },
});

        const data = res.data.user;

        const parsedUser = {
          ...data,
          skills: Array.isArray(data.skills) ? data.skills : data.skills ? JSON.parse(data.skills) : [],
          projects: Array.isArray(data.projects) ? data.projects : data.projects ? JSON.parse(data.projects) : [],
          connections: Array.isArray(data.connections) ? data.connections : data.connections ? JSON.parse(data.connections) : [],
          experience: Array.isArray(data.experience) ? data.experience : data.experience ? JSON.parse(data.experience) : [],
          about: data.about || "",
        };

        setUser(parsedUser);

        const storage = localStorage.getItem('token') ? localStorage : sessionStorage;
        storage.setItem("user", JSON.stringify(parsedUser));
      } catch (err) {
        console.error("Failed to fetch user:", err);
      }
    };

    fetchUser();
  }, []);

  if (!user) return <p>Loading...</p>;

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleArrayChange = (field, value) => {
    setUser({
      ...user,
      [field]: value.split(",").map((s) => s.trim()),
    });
  };

  const handleSave = async () => {
    try {
      const token = localStorage.getItem('token') || sessionStorage.getItem('token');

      const payload = {
        ...user,
        skills: JSON.stringify(user.skills || []),
        projects: JSON.stringify(user.projects || []),
        connections: JSON.stringify(user.connections || []),
        experience: JSON.stringify(user.experience || []),
      };

      const res = await axios.put(`http://localhost:5000/api/users/${user.id}`, payload, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const updatedUser = {
        ...res.data.user,
        skills: Array.isArray(res.data.user.skills) ? res.data.user.skills : JSON.parse(res.data.user.skills || "[]"),
        projects: Array.isArray(res.data.user.projects) ? res.data.user.projects : JSON.parse(res.data.user.projects || "[]"),
        connections: Array.isArray(res.data.user.connections) ? res.data.user.connections : JSON.parse(res.data.user.connections || "[]"),
        experience: Array.isArray(res.data.user.experience) ? res.data.user.experience : JSON.parse(res.data.user.experience || "[]"),
        about: res.data.user.about || "",
      };

      setUser(updatedUser);
      const storage = localStorage.getItem('token') ? localStorage : sessionStorage;
      storage.setItem("user", JSON.stringify(updatedUser));
      Swal.fire({
        title: 'Profile Updated',
        text: 'Your profile changes have been saved successfully.',
        icon: 'success',
       confirmButtonText: 'OK',
        confirmButtonColor: '#3085d6', 
      });
      setEditMode(false);
    } catch (err) {
      console.error(err);
        Swal.fire({
              title: 'Error',
              text: 'Failed to save profile changes. Please try again.',
              icon: 'error',
              confirmButtonText: 'OK',  
            });
    }
  };

  const displayName = user.name || "User";
  const initial = displayName.charAt(0).toUpperCase();

  return (
    <>
      <Navbar />
      <div className="prof-wrap">
        <aside className="prof-left">
          <div className="pfp"><span>{initial}</span></div>

          {editMode ? (
            <>
              <input name="name" value={user.name || ""} onChange={handleChange} placeholder="Name" />
              <input name="email" value={user.email || ""} onChange={handleChange} placeholder="Email" />
            </>
          ) : (
            <>
              <h1 className="name">{displayName}</h1>
              <p className="email">{user.email}</p>
            </>
          )}

          <div className="profile-stats">
            <div className="profile-stat-item">
              <span className="profile-stat-label">Connections</span>
              <span className="profile-stat-number">{(user.connections || []).length || "–"}</span>
            </div>
            <div className="profile-stat-item">
              <span className="profile-stat-label">Projects</span>
              <span className="profile-stat-number">{(user.projects || []).length || "–"}</span>
            </div>
          </div>

          <button onClick={() => (editMode ? handleSave() : setEditMode(true))}>
            {editMode ? "Save" : "Edit Profile"}
          </button>
        </aside>

        <main className="prof-right">
          <section className="card">
            <h2 className="card-title">About</h2>
            {editMode ? (
              <textarea name="about" value={user.about || ""} onChange={handleChange} />
            ) : (
              <p>{user.about || "None"}</p>
            )}
          </section>

          <section className="card">
            <h2 className="card-title">Skills</h2>
            {editMode ? (
              <input
                name="skills"
                value={(user.skills || []).join(", ")}
                onChange={(e) => handleArrayChange("skills", e.target.value)}
                placeholder="For each skill put a ',' to separate it"
              />
            ) : (
              <div className="chips">
                {(user.skills || []).length > 0
                  ? user.skills.map((s, i) => <span key={i} className="chip">{s}</span>)
                  : "None"}
              </div>
            )}
          </section>

          <section className="card">
            <h2 className="card-title">Experience</h2>
            {editMode ? (
              <input
                name="experience"
                value={(user.experience || []).join(", ")}
                onChange={(e) => handleArrayChange("experience", e.target.value)}
              />
            ) : (
              <ul>
                {(user.experience || []).length > 0
                  ? user.experience.map((exp, i) => <li key={i}>{exp}</li>)
                  : <li>None</li>}
              </ul>
            )}
          </section>
        </main>
      </div>
    </>
  );
}