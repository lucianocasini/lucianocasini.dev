import React, { useEffect, useState } from 'react';
import './assets/styles/general.css';
import AboutMe from './components/AboutMe';
import { Contact } from './components/Contact';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Welcome from './components/Welcome';

function App() {
  const [imagesLoaded, setImagesLoaded] = useState(0);

  const onLoadImage = () => {
    setImagesLoaded((prevImages) => prevImages + 1);
  };

  useEffect(() => {
    const currentLocation = window.location.href;
    if (imagesLoaded === 3 && currentLocation.includes('/#')) {
      const anchor = currentLocation.substring(
        currentLocation.indexOf('#') + 1
      );
      document.getElementById(anchor).scrollIntoView();
    }
  }, [imagesLoaded]);
  return (
    <div id="main">
      <Welcome />
      <Navbar />
      <AboutMe />
      <Experience />
      <Projects onLoadImage={onLoadImage} />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
