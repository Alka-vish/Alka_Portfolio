import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaTimes, FaArrowRight } from 'react-icons/fa';
import { SiSupabase, SiTensorflow, SiThreedotjs, SiReact, SiPython, SiTailwindcss } from 'react-icons/si';
import './Projects.css';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projectList = [
    {
      id: 1,
      title: "SecureVault",
      tag: "Security",
      shortDesc: "Zero-knowledge AES-256 encrypted storage.",
      fullDesc: "SecureVault focuses on end-to-end security. Files are encrypted in the browser before being uploaded to Supabase, meaning even the server cannot read your data. It features a robust cryptographic engine and a seamless user interface.",
      img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?q=80&w=1000",
      tech: [<SiReact />, <SiSupabase />, <SiTailwindcss />],
      github: "https://github.com/alkavishwakarma",
      live: "#"
    },
    {
      id: 2,
      title: "Astronomy Explorer",
      tag: "SpaceTech",
      shortDesc: "Interactive 3D tracking with NASA APIs.",
      fullDesc: "An interactive space data platform featuring real-time mission trackers and gamified learning. Built using NASA APIs to provide up-to-date cosmic information.",
      img: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=1000",
      tech: [<SiReact />, <SiThreedotjs />],
      github: "https://github.com/alkavishwakarma",
      live: "#"
    },
    {
      id: 3,
      title: "UrbanMine AI",
      tag: "GreenTech",
      shortDesc: "AI-powered e-waste valuation.",
      fullDesc: "Uses computer vision to identify electronic components and estimate their value. Part of the 'UrbanMine: The Pocket Prospector' initiative to promote sustainable recycling.",
      img: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?q=80&w=1000",
      tech: [<SiPython />, <SiTensorflow />],
      github: "https://github.com/alkavishwakarma",
      live: "#"
    }
  ];

  return (
    <section id="projects" className="minimal-projects">
      <h2 className="section-title-clean">Projects</h2>
      
      <div className="compact-grid">
        {projectList.map((project) => (
          <div key={project.id} className="compact-card" onClick={() => setSelectedProject(project)}>
            <div className="card-top">
              <div className="project-icon-box">{project.tech[0]}</div>
              <span className="project-category-small">{project.tag}</span>
            </div>
            <h3 className="project-name-clean">{project.title}</h3>
            <p className="project-brief">{project.shortDesc}</p>
            <button className="view-details-btn">
              View Details <FaArrowRight />
            </button>
          </div>
        ))}
      </div>

      {/* Detail Modal Overlay */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={() => setSelectedProject(null)}>
              <FaTimes />
            </button>
            
            <div className="modal-body">
              <div className="modal-image-pane">
                <img src={selectedProject.img} alt={selectedProject.title} />
              </div>
              
              <div className="modal-text-pane">
                <span className="modal-tag">{selectedProject.tag}</span>
                <h2 className="modal-title">{selectedProject.title}</h2>
                <div className="modal-tech-row">
                  {selectedProject.tech.map((icon, i) => <span key={i}>{icon}</span>)}
                </div>
                <p className="modal-description">{selectedProject.fullDesc}</p>
                
                <div className="modal-actions">
                  <a href={selectedProject.github} target="_blank" rel="noreferrer" className="modal-btn git">
                    <FaGithub /> GitHub
                  </a>
                  <a href={selectedProject.live} className="modal-btn live">
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;