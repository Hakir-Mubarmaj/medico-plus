import React from 'react';
import './Header.css'; // Add your custom styles here

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <img src="/logo.png" alt="Logo" className="logo" />
        <nav className="nav">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#courses">Courses</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <button className="login-button">Login</button>
      </div>
    </header>
  );
};

export default Header;
