import React from 'react';
import './Footer.css'; // Add your custom styles here

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; 2024 Udvash. All Rights Reserved.</p>
        <nav>
          <ul className="footer-nav">
            <li><a href="#privacy">Privacy Policy</a></li>
            <li><a href="#terms">Terms of Service</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
