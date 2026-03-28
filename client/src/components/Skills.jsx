import React, { useState, useEffect } from 'react';
import { FaPython, FaJava, FaJs, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiTensorflow, SiPandas, SiMongodb, SiTailwindcss, SiFirebase, SiMysql, SiExpress } from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const [text, setText] = useState('');
 const fullText = 
  "git init --languages: Java, Python, JS\n" +
  "git add . --skills: MERN, ML, NumPy\n" +
  "git commit -m 'Web Dev with Data Science'\n" +
  "git push --status: 200+ DSA [SUCCESS]\n" +
  "npm run develop --projects: GDP Analyzer...";
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) i = 0;
    }, 70);
    return () => clearInterval(interval);
  }, []);

  const techStack = [
    { name: "Python", icon: <FaPython color="#3776AB" /> },
    { name: "Java", icon: <FaJava color="#007396" /> },
    { name: "JavaScript", icon: <FaJs color="#F7DF1E" /> },
    { name: "React", icon: <FaReact color="#61DAFB" /> },
    { name: "TensorFlow", icon: <SiTensorflow color="#FF9E0F" /> },
    { name: "Node.js", icon: <FaNodeJs color="#339933" /> },
    { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
    { name: "MySQL", icon: <SiMysql color="#4479A1" /> },
    { name: "Tailwind", icon: <SiTailwindcss color="#06B6D4" /> },
    { name: "Firebase", icon: <SiFirebase color="#FFCA28" /> },
    { name: "Express", icon: <SiExpress color="#ffffff" /> },
    { name: "Pandas", icon: <SiPandas color="#150458" /> }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <div className="skills-left">
          <h2 className="skills-title">My Tech Stack</h2>
          
          <div className="tech-grid">
            {techStack.map((tech, index) => (
              <div key={index} className="tech-glass-card">
                <span className="tech-icon">{tech.icon}</span>
                <span className="tech-name">{tech.name}</span>
              </div>
            ))}
          </div>

          <div className="exploring-badge-bottom">
             <span className="static-dot"></span> 
             Currently exploring: <strong>Agentic AI</strong>
          </div>
        </div>

        <div className="skills-right">
          <div className="terminal-glass">
            <div className="terminal-header">
              <span className="t-dot red"></span>
              <span className="t-dot yellow"></span>
              <span className="t-dot green"></span>
            </div>
            <div className="terminal-content">
              <p className="cmd"><span>$</span> status --check</p>
              <pre className="typing-text">{text}<span className="cursor">_</span></pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;