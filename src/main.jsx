import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// GENERAL CSS
import './css/general.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // <-- Bootstrap import
import ScrollToTop from './components/ScrollToTop.jsx';

// AUTH
import Login from './pages/Auth/Login.jsx';
import Register from './pages/Auth/Register.jsx';

// PAGES
import Home from './pages/Home';
import Mentors from './pages/Mentors.jsx';
import Projects from './pages/Projects.jsx';
import About from './pages/About.jsx';
import Connect from './pages/Connect.jsx';
import Profile from './pages/Profile.jsx';
import Users from './components/Users.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/mentors" element={<Mentors />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/about" element={<About />} />
      <Route path="/connect" element={<Connect />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/users" element={<Users />} />
    </Routes>
  </BrowserRouter>
);
