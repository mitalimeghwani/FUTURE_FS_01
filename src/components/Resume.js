import React from 'react';
import './Resume.css';

function Resume() {
  return (
    <div className="resume-section">
      <h2>My Resume</h2>
      <a href="/mitali-resume.pdf" download className="download-btn">
        Download Resume (PDF)
      </a>
    </div>
  );
}

export default Resume;