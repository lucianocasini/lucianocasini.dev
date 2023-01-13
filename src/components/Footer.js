import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { MdCopyright } from 'react-icons/md';
import '../assets/styles/Footer.scss';

const Footer = () => {
  return (
    <footer>
      <div className="copy">
        <MdCopyright /> <span>2023 | Desarrollado por Luciano Casini</span>
      </div>
      <div>
        <a
          href="https://github.com/lucianocasini/lucianocasini.dev"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
