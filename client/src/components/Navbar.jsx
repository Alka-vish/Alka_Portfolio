import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Brand Logo */}
        <div className="nav-logo">
          <a href="#home">
            AV<span className="dot">.</span>
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <div
          className={`mobile-icon ${isOpen ? "active" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>

        {/* Navigation Links */}
        <ul className={`nav-links ${isOpen ? "active" : ""}`}>
          <li>
            <a href="#home" onClick={() => setIsOpen(false)}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={() => setIsOpen(false)}>
              About
            </a>
          </li>
          <li>
            <a href="#skills" onClick={() => setIsOpen(false)}>
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" onClick={() => setIsOpen(false)}>
              Projects
            </a>
          </li>
          <li>
            <a href="#certifications" onClick={() => setIsOpen(false)}>
              Certifications
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => setIsOpen(false)}>
              Contact
            </a>
          </li>
          
          <li className="nav-resume">
           <a 
  href="/Alka_Resume.pdf" 
  target="_blank" 
  rel="noopener noreferrer" 
  className="resume-btn"
>
  Resume
</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
