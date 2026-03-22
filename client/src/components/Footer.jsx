import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-line"></div>
      <div className="footer-content">
        <p>© {currentYear} | Built with React by Alka Vishwakarma</p>
        <div className="footer-bottom-text">Let's build something amazing together.</div>
      </div>
    </footer>
  );
};

export default Footer;