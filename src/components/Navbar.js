import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo"></h2>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li>
  <a href="/mitali-resume.pdf" download target="_blank" rel="noopener noreferrer">
    Download Resume (PDF)
  </a>
</li>
      </ul>
    </nav>
  );
}

export default Navbar;
