import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import "../css/profile.css";

export default function Profile() {
  const [user, setUser] = useState(null);
  const [editMode, setEditMode] = useState(false);

  // Fetch user from backend on mount
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const id = 1; // replace with dynamic ID from auth
        const res = await axios.get(`http://localhost:5000/api/users/${id}`);
        const data = res.data;

        // Parse JSON fields
        const parsedUser = {
          ...data,
          skills: Array.isArray(data.skills) ? data.skills : data.skills ? JSON.parse(data.skills) : [],
          projects: Array.isArray(data.projects) ? data.projects : data.projects ? JSON.parse(data.projects) : [],
          connections: Array.isArray(data.connections) ? data.connections : data.connections ? JSON.parse(data.connections) : [],
          experience: Array.isArray(data.experience) ? data.experience : data.experience ? JSON.parse(data.experience) : [],
          about: data.about || "",
        };

        setUser(parsedUser);
        localStorage.setItem("user", JSON.stringify(parsedUser));
      } catch (err) {
        console.error(err);
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
      // Prepare payload with JSON strings for backend
      const payload = {
        ...user,
        skills: JSON.stringify(user.skills || []),
        projects: JSON.stringify(user.projects || []),
        connections: JSON.stringify(user.connections || []),
        experience: JSON.stringify(user.experience || []),
      };

      const res = await axios.patch(`http://localhost:5000/api/users/${user.id}`, payload);

      // Parse JSON fields again after saving
      const updatedUser = {
        ...res.data,
        skills: res.data.skills ? JSON.parse(res.data.skills) : [],
        projects: res.data.projects ? JSON.parse(res.data.projects) : [],
        connections: res.data.connections ? JSON.parse(res.data.connections) : [],
        experience: res.data.experience ? JSON.parse(res.data.experience) : [],
        about: res.data.about || "",
      };

      setUser(updatedUser);
      localStorage.setItem("user", JSON.stringify(updatedUser));
      alert("Profile updated successfully!");
      setEditMode(false);
    } catch (err) {
      console.error(err);
      alert("Failed to update profile");
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
