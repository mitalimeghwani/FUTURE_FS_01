// src/components/Footer.js

import React from 'react';
import './Footer.css'; // We'll create this next

export default function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Mitali Meghwani. All rights reserved.</p>
      <p>Connect: 
        <a href=":mitalimeghwani11@gmail.com"> Email </a> | 
        <a href="https://www.linkedin.com/in/mitali-meghwani-04941624b" target="_blank" rel="noreferrer"> LinkedIn </a> | 
        <a href="https://github.com/mitalimeghwani" target="_blank" rel="noreferrer"> GitHub </a>
      </p>
    </footer>
  );
}