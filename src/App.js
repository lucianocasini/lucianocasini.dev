import React from 'react';
import './assets/styles/general.css';
import AboutMe from './components/AboutMe';
import { Contact } from './components/Contact';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Welcome from './components/Welcome';

function App() {
  return (
    <div id="main">
      <Welcome />
      <Navbar />
      <AboutMe />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
