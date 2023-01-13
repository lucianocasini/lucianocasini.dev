import React from 'react';
import { FaDownload, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import '../assets/styles/Contact.scss';

export const Contact = () => {
  return (
    <section id="contact">
      <h1>¿Necesitas un developer en tu equipo?</h1>
      <p>¡Hablemos!</p>
      <div className="buttons">
        <a href="mailto:contacto@lucianocasini.dev" className="btn">
          Envíame un mail
        </a>
        <div className="social-networks">
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
            <FaGithub className="icon" />
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
      </div>
    </section>
  );
};
