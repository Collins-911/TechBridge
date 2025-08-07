// components/Loader.jsx
import React from 'react';
import '../css/loader.css';

export default function Loader() {
  return (
    <div className="loader-overlay">
      <div className="loader-ring">
   
        <div className="loader-spinner"></div>
      </div>
    </div>
  );
}
