import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Resume from './components/Resume';

function App() {
  return (
    <div>
      <Navbar />
      <div id="home"><Home /></div>
      <div id="about"><About /></div>
      <div id ="resume"><Resume /></div>
      <div id="projects"><Projects /></div>
      <div id = "contact"><Contact /></div>
      <Footer/>
    </div>
  );
}

export default App;