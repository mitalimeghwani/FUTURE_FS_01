import React from "react";
import "./Projects.css";

function Projects() {
  return (
    <div className="projects-container">
      <h2>My Projects</h2>
      <ul>
        <li>
          <span>🛒</span> 
          <a 
            href="https://6835842877edb8993dfdc650--exquisite-sunflower-b0eef3.netlify.app/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Amazon Clone using HTML/CSS/JS
          </a>
        </li>
        <li>
          <span>🎯</span> 
          <a 
            href="https://elaborate-raindrop-b44bf5.netlify.app/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Simon Game Challenge using HTML/CSS/JS
          </a>
        </li>
        <li>
          <span>🥁</span> 
          <a 
            href="https://musical-nougat-38daa7.netlify.app/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Drum Kit Game using HTML/CSS/JS
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Projects;
