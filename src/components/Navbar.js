import React from 'react';
import '../assets/styles/Navbar.scss';
import { FaLinkedinIn, FaGithub, FaDownload } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="Navbar">
      <div className="menu-items">
        <a href="#about-me">Acerca de mí</a>
        <a href="#experience">Experiencia</a>
        <a href="#projects">Proyectos</a>
        <a href="#contact">Contacto</a>
      </div>
      <div className="social-icons">
        <a
          href="https://www.linkedin.com/in/lucianocasini/"
          title="Linkedin"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedinIn className="icon linkedin" />
        </a>
        <a
          href="https://github.com/lucianocasini/"
          title="Github"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub className="icon github" />
        </a>
        <a
          href="https://lucianocasini.dev/cv"
          title="Descargar CV"
          target="_blank"
          rel="noreferrer"
        >
          <FaDownload className="icon download-cv" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
