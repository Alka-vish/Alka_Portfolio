import React from 'react';
import './Footer.css';
import { FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-container">
      <div className="footer-glow-line"></div>
      
      <div className="footer-main">
        <div className="footer-top-row">
          <div className="footer-brand">AV<span>.</span></div>
          <button className="back-to-top" onClick={scrollToTop} aria-label="Back to Top">
            <FaArrowUp />
          </button>
        </div>

        <div className="footer-content">
          <p>© {currentYear} | Designed & Developed by <span>Alka Vishwakarma</span></p>
          <div className="footer-bottom-text">Let's build something amazing together.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;