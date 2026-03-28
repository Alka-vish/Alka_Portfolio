import React from "react";
import {
  FaGraduationCap,
  FaUserTie,
  FaStar,
  FaUserAstronaut,
} from "react-icons/fa";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        {/* Left Column: About + Roles */}
        <div className="about-left">
          <div className="glass-card about-card">
            <div className="card-header">
              <FaUserAstronaut className="accent-icon" />
              <h2 className="column-label">About Me</h2>
            </div>
            <p className="justified-text">
              I am a <strong>3rd-year AI & Data Science student</strong> at <strong>VESIT, Mumbai</strong>. 
              Currently, I am focused on mastering <strong>Full-Stack development</strong> by building 
              real-world projects. Along with web tech, I have a solid grip on <strong>Data Science tools </strong>  
               like <strong>NumPy and Pandas</strong>. I am also a consistent <strong>problem solver</strong>, 
              solving <strong>DSA problems daily</strong> to sharpen my logic and preparation for 
              upcoming placements.
            </p>
          </div>

          <div className="glass-card roles-card">
            <h2 className="column-label">Current Roles</h2>
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
            <h2 className="column-label">Academic Background</h2>

            {/* B.Tech */}
            <div className="edu-item">
              <div className="edu-title">
                <FaGraduationCap className="white-icon" />
                <h5>B.Tech in AI & Data Science</h5>
              </div>
              <p className="college-name">VESIT, Mumbai</p>
              <div className="edu-meta">
                <span className="badge">CGPA: 9.35 (5th sem)</span>
                <span className="date-text">2023 - 2027</span>
              </div>
            </div>

            <div className="divider"></div>

            {/* HSC */}
            <div className="edu-item">
              <div className="edu-title">
                <div className="mini-icon">HSC</div>
                <h5>Higher Secondary Certificate</h5>
              </div>
              <p className="college-name">Vani Vidyalaya Jr. College, Mulund</p>
              <div className="edu-meta">
                <span className="badge">Percentage: 83.83%</span>
                <span className="date-text">2021 - 2023</span>
              </div>
            </div>

            <div className="divider"></div>

            {/* SSC */}
            <div className="edu-item">
              <div className="edu-title">
                <div className="mini-icon">SSC</div>
                <h5>Secondary School Certificate</h5>
              </div>
              <p className="college-name">Gyanodaya Vidya Mandir, Thane (W)</p>
              <div className="edu-meta">
                <span className="badge">Percentage: 96.60%</span>
                <span className="date-text">2020 - 2021</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;