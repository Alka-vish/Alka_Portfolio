import React from 'react';
import './Contact.css';
import { FaLinkedinIn, FaGithub, FaEnvelope, FaWhatsapp, FaInstagram, FaTwitter } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const Contact = () => {
  const socialLinks = [
    { id: 1, icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/alka-vishwakarma/", label: "LinkedIn", color: "#0077b5" },
    { id: 2, icon: <FaGithub />, link: "https://github.com/Alka-vish", label: "GitHub", color: "#ffffff" },
    { 
      id: 3, 
      icon: <FaEnvelope />, 
      // Direct Gmail compose link for better experience
      link: "https://mail.google.com/mail/?view=cm&fs=1&to=alkawinner100@gmail.com&su=Project%20Inquiry&body=Hi%20Alka,", 
      label: "Email", 
      color: "#ea4335" 
    },
    { 
      id: 4, 
      icon: <FaWhatsapp />, 
      // WhatsApp API with automated message
      link: "https://api.whatsapp.com/send?phone=917977277429&text=Hi%20Alka,%20I%20saw%20your%20portfolio%20and%20wanted%20to%20connect!", 
      label: "WhatsApp", 
      color: "#25d366" 
    },
    { id: 5, icon: <SiLeetcode />, link: "https://leetcode.com/u/Alka_v/", label: "LeetCode", color: "#ffa116" },
    { id: 6, icon: <FaInstagram />, link: "https://www.instagram.com/alkav243/", label: "Instagram", color: "#e1306c" },
    { id: 7, icon: <FaTwitter />, link: "https://x.com/alka_unofficial", label: "Twitter", color: "#1da1f2" },
];

  return (
    <section id="contact" className="contact-section">
      <div className="contact-header">
        {/* Visibility fixed for this heading */}
        <h2 className="section-title-large">Let's Connect</h2>
        <p className="grow-tagline">Let's grow together</p>
        <p className="collab-text">Open for collaborations and interesting projects.</p>
      </div>

      <div className="icon-constellation">
        {socialLinks.map((social) => (
          <a 
            key={social.id}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className="social-orb"
            style={{ "--brand-color": social.color }}
            data-label={social.label}
          >
            <span className="orb-icon">{social.icon}</span>
            <div className="orb-glow"></div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact;