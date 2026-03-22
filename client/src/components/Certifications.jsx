import React from 'react';
import { FaExternalLinkAlt, FaAward } from 'react-icons/fa';
import './Certifications.css';

const Certifications = () => {
  const certs = [
    {
      id: 1,
      name: "Java Programming",
      company: "Oracle Certified",
      date: "2025-26",
      logo: "/oracle.png", 
      color: "#F80000",
      link: "https://drive.google.com/file/d/1vpPe5GAiVK5ysKb5jpCJHI10G5mQHzBn/view?usp=sharing"
    },
    {
      id: 2,
      name: "Database Programming with SQL",
      company: "Oracle Certified",
      date: "2025-26",
      logo: "/oracle.png",
      color: "#F80000",
      link: "https://drive.google.com/file/d/148Gkp3ZzruRUspadIRxwDtg7rwdjPZ5f/view?usp=sharing"
    },
    {
      id: 3,
      name: "Python For Data Science",
      company: "NPTEL",
      date: "Jul-Aug 2024",
      logo: "/nptel.jpg", 
      color: "#3776AB",
      badge: "Silver Badge",
      link: "https://drive.google.com/file/d/1WDk-60fCpidWIgTflBY1iAvqBjHN2naL/view?usp=sharing"
    },
    {
      id: 4,
      name: "Fundamentals of Deep Learning",
      company: "NVIDIA",
      date: "Aug 2025",
      logo: "/nvidia.webp",
      color: "#76B900",
      link: "https://drive.google.com/file/d/1Wq_lOiLpDyoVlD4dFG77tNFYJysNU0DP/view?usp=sharing"
    },
    {
      id: 5,
      name: "Introduction to Machine Learning",
      company: "NPTEL",
      date: "Jul-Oct 2024",
      logo: "/nptel.jpg",
      color: "#FFD700",
      link: "https://drive.google.com/file/d/1EDOJ-CIJUPXf25h3zLwcOg9dLk6ejQZn/view?usp=sharing"
    }
  ];

  return (
    <section id="certifications" className="cert-section">
      <h2 className="section-title-clean">Certifications</h2>
      
      <div className="cert-grid">
        {certs.map((cert) => (
          <div key={cert.id} className="cert-card" style={{ "--brand-glow": cert.color }}>
            <div className="cert-logo-box">
              {/* Using img instead of buggy icons */}
              <img src={cert.logo} alt={cert.company} className="cert-logo-img" />
            </div>
            <div className="cert-info">
              <div className="cert-header-row">
                <span className="cert-company">{cert.company}</span>
                {cert.badge && <span className="silver-badge">{cert.badge}</span>}
              </div>
              <h3 className="cert-name">{cert.name}</h3>
              <p className="cert-date">{cert.date}</p>
              <a href={cert.link} target="_blank" rel="noreferrer" className="view-cert-link">
                Verify Certificate <FaExternalLinkAlt />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;