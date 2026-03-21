import React from 'react';
import './Contact.css';
import { FaLinkedin, FaGithub, FaYoutube, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const socials = [
    {
      id: 1,
      name: "LinkedIn",
      handle: "Alka Vishwakarma",
      icon: <FaLinkedin />,
      link: "https://linkedin.com/in/alkavishwakarma",
      vibe: "The Professional Side"
    },
    {
      id: 2,
      name: "GitHub",
      handle: "@alkavishwakarma",
      icon: <FaGithub />,
      link: "https://github.com/alkavishwakarma",
      vibe: "Where Code Lives"
    },
    {
      id: 3,
      name: "Email",
      handle: "alkavishwakarma@email.com",
      icon: <FaEnvelope />,
      link: "mailto:alkavishwakarma@email.com",
      vibe: "Let's Build Something"
    },
    {
      id: 4,
      name: "YouTube",
      handle: "Coming Soon!",
      icon: <FaYoutube />,
      link: "#",
      vibe: "Vlogs & Tutorials"
    }
  ];

  return (
    <section className="contact-section" id="contact">
      <h2 className="section-title-clean">Get In Touch</h2>
      <p className="contact-subtitle">Let's collab on some crazy Agentic AI projects! 🚀</p>
      
      <div className="social-grid">
        {socials.map((social) => (
          <a 
            key={social.id} 
            href={social.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-handle-card"
          >
            <div className="social-icon">{social.icon}</div>
            <h3 className="handle-name">{social.name}</h3>
            <span className="handle-text">{social.handle}</span>
            <p className="handle-vibe">{social.vibe}</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact;