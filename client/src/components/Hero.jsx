import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="hero-greeting">Hi, I'm</div>
        <h1 className="name-line">
          Alka <span className="name-accent">Vishwakarma</span>
        </h1>

        <div className="hero-subtitle">
          <span className="badge-dot"></span>
          Software Engineer
        </div>

        <p className="hero-description">
          Third-year Engineering student at <strong>VESIT</strong>. 
          Building scalable systems and exploring Agentic AI.
        </p>

        <div className="hero-btns">
          <a href="#projects" className="btn-main">View Projects</a>
          <a href="#contact" className="btn-outline">Let's Talk</a>
        </div>
      </div>

      {/* Image Section Added Below */}
      <div className="hero-image-wrapper">
  <img 
    src="/Alka_portfolio-1.png" 
    alt="Alka Vishwakarma" 
    className="hero-pic" 
  />
</div>
    </section>
  );
};

export default Hero;