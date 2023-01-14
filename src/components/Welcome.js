import React from 'react';
import '../assets/styles/Welcome.scss';
import { BsChevronDoubleDown } from 'react-icons/bs';

const Welcome = () => {
  return (
    <section id="welcome">
      <div className="name">
        <h1>Luciano Casini</h1>
        <h2>FullStack Developer</h2>
      </div>
      <div className="scroll">
        <span>Desliza para leer un poco sobre mí</span>
        <BsChevronDoubleDown />
      </div>
    </section>
  );
};

export default Welcome;
