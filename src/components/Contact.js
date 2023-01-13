import React from 'react';
import { FaDownload, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import '../assets/styles/Contact.scss';

export const Contact = () => {
  return (
    <section id="contact">
      <h1>¿Necesitas un developer en tu equipo?</h1>
      <p>¡Hablemos!</p>
      <div className="buttons">
        <a href="mailto:lucianoo.casini@gmail.com" className="btn">
          Envíame un mail
        </a>
        <div className="social-networks">
          <a href="https://www.linkedin.com/in/lucianocasini/" title="Linkedin">
            <FaLinkedinIn className="icon linkedin" />
          </a>
          <a href="https://github.com/lucianocasini/" title="Github">
            <FaGithub className="icon" />
          </a>
          <a
            href="https://drive.google.com/file/d/1xkfPy5p9JjvhJk9LGJ7aI-cb2UUxbIKd/view"
            title="Descargar CV"
          >
            <FaDownload className="icon download-cv" />
          </a>
        </div>
      </div>
    </section>
  );
};
