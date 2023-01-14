import React, { useState } from 'react';
import '../assets/styles/Navbar.scss';
import { FaLinkedinIn, FaGithub, FaDownload, FaBars } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';

const Navbar = () => {
  const [displayMenu, setDisplayMenu] = useState('none');

  const handleResponsiveMenu = () => {
    setDisplayMenu((state) => (state === 'none' ? 'flex' : 'none'));
  };

  return (
    <>
      <div className="icon-responsive-menu">
        <FaBars className="icon-open" onClick={handleResponsiveMenu} />
        <IoMdClose
          className="icon-close"
          onClick={handleResponsiveMenu}
          style={{ display: displayMenu }}
        />
      </div>
      <nav className="Navbar" style={{ display: displayMenu }}>
        <div className="menu-items">
          <a href="#welcome" onClick={handleResponsiveMenu}>
            Inicio
          </a>
          <a href="#about-me" onClick={handleResponsiveMenu}>
            Acerca de mí
          </a>
          <a href="#experience" onClick={handleResponsiveMenu}>
            Experiencia
          </a>
          <a href="#projects" onClick={handleResponsiveMenu}>
            Proyectos
          </a>
          <a href="#contact" onClick={handleResponsiveMenu}>
            Contacto
          </a>
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
    </>
  );
};

export default Navbar;
