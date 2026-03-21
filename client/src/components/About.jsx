import React from 'react';
import { FaGraduationCap, FaUserTie, FaStar, FaUserAstronaut } from 'react-icons/fa';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        
        {/* Left Column: About + Roles */}
        <div className="about-left">
          <div className="glass-card about-card">
            <div className="card-header">
              <FaUserAstronaut className="accent-icon" />
              <h3>About Me</h3>
            </div>
            <p>
              3rd-year Engineering student at <strong>VESIT</strong>, specializing in AI & Data Science. 
              I build products that solve real-world problems, from secure cloud storage to 
              real-time sign language detection.
            </p>
          </div>

          <div className="glass-card roles-card">
            <h4 className="column-label">Current Roles</h4>
            <div className="role-item">
              <FaUserTie className="blue-icon" />
              <div>
                <h5>Student Placement Coordinator</h5>
                <span className="date-text">2026 - 2027</span>
              </div>
            </div>
            <div className="role-item">
              <FaStar className="gold-icon" />
              <div>
                <h5>Fellow @ Shooting Star Foundation</h5>
                <span className="date-text">Jan 2024 - Present</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Education */}
        <div className="about-right">
          <div className="glass-card edu-card">
            <h4 className="column-label">Academic Background</h4>
            
            <div className="edu-item">
              <div className="edu-title">
                <FaGraduationCap className="white-icon" />
                <h5>B.Tech in AI & Data Science</h5>
              </div>
              <p>VESIT, Mumbai University</p>
              <div className="edu-meta">
                <span className="date-text">2023 - 2027</span>
                <span className="badge">9.1 CGPA</span>
              </div>
            </div>

            <div className="divider"></div>

            <div className="edu-item">
              <div className="edu-title">
                <div className="mini-icon">HSC</div>
                <h5>Higher Secondary Certificate</h5>
              </div>
              <p>Your Junior College Name</p>
              <div className="edu-meta">
                <span className="date-text">2021 - 2023</span>
                <span className="badge">85%</span>
              </div>
            </div>

            <div className="divider"></div>

            <div className="edu-item">
              <div className="edu-title">
                <div className="mini-icon">SSC</div>
                <h5>Secondary School Certificate</h5>
              </div>
              <p>Your School Name</p>
              <div className="edu-meta">
                <span className="date-text">2020 - 2021</span>
                <span className="badge">92%</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;