// src/components/Navbar.jsx

import React, { useState } from 'react';
import './Navbar.css'; // Create a CSS file for styling

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">Penpaper</div>
      <div className={`navbar-menu ${isOpen ? 'open' : ''}`}>
        <a href="#" className="navbar-item">Home</a>
        <a href="#" className="navbar-item">About</a>
        <a href="#" className="navbar-item">Services</a>
        <a href="#" className="navbar-item">Contact</a>
      </div>
      <button className="navbar-toggle" onClick={toggleMenu}>
        ☰
      </button>
    </nav>
  );
};

export default Navbar;
