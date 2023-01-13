import React from 'react';
import './assets/styles/general.css';
import AboutMe from './components/AboutMe';
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';

function App() {
  return (
    <div id="main">
      <Welcome />
      <Navbar />
      <AboutMe />
    </div>
  );
}

export default App;
