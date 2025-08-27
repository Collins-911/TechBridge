import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar.jsx";

const User = () => {
  const [users, setUsers] = useState([]);
  const [hovered, setHovered] = useState(null);

  // Fetch users
  const fetchUsers = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/users"); // ✅ updated endpoint
      setUsers(res.data);
    } catch (err) {
      console.error("Error fetching users:", err);
    }
  };

  // Delete user
  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/users/${id}`); // ✅ updated endpoint
      setUsers(users.filter((user) => user.id !== id));
    } catch (err) {
      console.error("Error deleting user:", err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      <Navbar />
      <div style={styles.container}>
        <h2 style={styles.header}>Users List</h2>
        <table style={styles.table}>
          <thead>
            <tr style={styles.theadRow}>
              <th style={styles.th}>ID</th>
              <th style={styles.th}>Name</th>
              <th style={styles.th}>Email</th>
              <th style={styles.th}>Role</th> {/* ✅ Added Role column */}
              <th style={styles.th}>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 ? (
              users.map((user) => (
                <tr key={user.id} style={styles.tr}>
                  <td style={styles.td}>{user.id}</td>
                  <td style={styles.td}>{user.name}</td>
                  <td style={styles.td}>{user.email}</td>
                  <td style={styles.td}>{user.role}</td> {/* ✅ Show Role */}
                  <td style={styles.td}>
                    <button
                      style={{
                        ...styles.deleteBtn,
                        background:
                          hovered === user.id ? "#c82333" : styles.deleteBtn.background,
                      }}
                      onMouseEnter={() => setHovered(user.id)}
                      onMouseLeave={() => setHovered(null)}
                      onClick={() => deleteUser(user.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td style={styles.noData} colSpan="5">
                  No users found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

// Inline styles
const styles = {
  container: {
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f9f9f9",
    minHeight: "100vh",
  },
  header: {
    textAlign: "center",
    marginBottom: "20px",
    color: "#333",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    backgroundColor: "#fff",
    borderRadius: "8px",
    overflow: "hidden",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  },
  theadRow: {
    backgroundColor: "#007bff",
    color: "white",
  },
  th: {
    padding: "12px",
    textAlign: "left",
    fontWeight: "600",
    fontSize: "14px",
  },
  tr: {
    borderBottom: "1px solid #ddd",
  },
  td: {
    padding: "12px",
    fontSize: "14px",
    color: "#555",
  },
  deleteBtn: {
    background: "#dc3545",
    color: "white",
    border: "none",
    padding: "6px 12px",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "13px",
    transition: "background 0.3s ease",
  },
  noData: {
    textAlign: "center",
    padding: "20px",
    color: "#999",
  },
};

export default User;
