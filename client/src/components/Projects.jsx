import React, { useState } from "react";
import { FaGithub, FaExternalLinkAlt, FaTimes, FaArrowRight, FaWallet, FaChartBar, FaUserCircle } from "react-icons/fa";
import { SiReact, SiPython, SiTailwindcss, SiMongodb, SiExpress, SiNodedotjs, SiFirebase } from "react-icons/si";
import "./Projects.css";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projectList = [
    {
      id: 1,
      title: "Expense Tracker",
      tag: "Finance",
      displayIcon: <FaWallet />, 
      shortDesc: "A real-time financial dashboard for tracking income and expenses.",
      fullDesc: "Built a robust MERN stack application with real-time data visualization. It features a sleek dashboard to track Total Balance, Income, and Expenses. Includes a detailed transaction history with category-wise breakdown and interactive charts for effective budget management.",
      img: "/Expense Tracker.png",
      tech: [<SiReact />, <SiMongodb />, <SiFirebase />, <SiTailwindcss />, <SiExpress />, <SiNodedotjs />],
      github: "https://github.com/Alka-vish/Expense-Tracker",
      live: "https://expense-tracker-iota-indol.vercel.app/",
    },
    {
      id: 2,
      title: "GDP Analysis",
      tag: "Data Science",
      displayIcon: <FaChartBar />, 
      shortDesc: "Comprehensive data visualization of global economic trends.",
      fullDesc: "A data-driven project focused on analyzing and visualizing Global Domestic Product (GDP) patterns. Leveraging Python and powerful data science libraries like NumPy and Pandas, this project uncovers correlations between economic indicators and provides interactive insights into historical growth and future projections.",
      img: "https://images.unsplash.com/photo-1551288049-bbbda5366392?q=80&w=1000",
      tech: [<SiPython />, <SiReact />, <SiTailwindcss />],
    },
    {
      id: 3,
      title: "Personal Portfolio",
      tag: "Web Dev",
      displayIcon: <FaUserCircle />, 
      shortDesc: "My personal website built with React and Custom CSS.",
      fullDesc: "A personal portfolio to showcase my projects, technical skills, and academic background. It features a clean project gallery with interactive modals and a fully responsive layout for all devices. I focused on writing clean CSS and using React for building a fast and simple user interface.",
      img: "/portfolio.png",
      tech: [<SiReact />, <SiTailwindcss />, <SiNodedotjs />, <SiExpress />],
    },
  ];

  return (
    <section id="projects" className="minimal-projects">
      <h2 className="section-title-clean">Projects</h2>

      <div className="compact-grid">
        {projectList.map((project) => (
          <div key={project.id} className="compact-card" onClick={() => setSelectedProject(project)}>
            <div className="card-tag-wrapper">
              <span className="project-category-small">{project.tag}</span>
            </div>

            <div className="project-header-row">
              <div className="project-custom-icon">{project.displayIcon}</div>
              <h3 className="project-name-clean">{project.title}</h3>
            </div>

            <p className="project-brief">{project.shortDesc}</p>
            
            <button className="view-details-btn">
              View Details <FaArrowRight />
            </button>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={() => setSelectedProject(null)}>
              <FaTimes />
            </button>

            <div className="modal-body-vertical">
              <div className="modal-image-full">
                <img src={selectedProject.img} alt={selectedProject.title} />
              </div>

              <div className="modal-content-centered">
                <span className="modal-tag">{selectedProject.tag}</span>
                <h2 className="modal-title">{selectedProject.title}</h2>
                <div className="modal-tech-row">
                  {selectedProject.tech.map((icon, i) => <span key={i}>{icon}</span>)}
                </div>
                <p className="modal-description-justify">{selectedProject.fullDesc}</p>

                <div className="modal-actions-centered">
                  {selectedProject.github && (
                    <a href={selectedProject.github} target="_blank" rel="noreferrer" className="modal-btn git">
                      <FaGithub /> GitHub
                    </a>
                  )}
                  {selectedProject.live && (
                    <a href={selectedProject.live} target="_blank" rel="noreferrer" className="modal-btn live">
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  )}
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