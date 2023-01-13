import React from 'react';
import '../assets/styles/AboutMe.scss';

const AboutMe = () => {
  return (
    <section id="about-me">
      <h2>Acerca de mí</h2>
      <div>
        <p>
          Hola, soy Luciano, desarrollador web FullStack. Durante años he
          desarrollado diversos tipos de proyectos, abarcando diferentes ámbitos
          y tecnologías. <br />
          Me apasiona desarrollar sistemas que aporten valor y hagan más fácil
          la vida de las personas, que al final son quienes terminan utilizando
          estas herramientas. <br />
          Además de las tecnologías con las que trabajo, también tengo interés
          en temas relacionados a domótica, criptomonedas y finanzas.
        </p>
        <div className="skills">
          <h3>Tecnologías</h3>
          <ul>
            <li>
              <i class="devicon-html5-plain colored"></i>
              <span>HTML5</span>
            </li>
            <li>
              <i class="devicon-css3-plain colored"></i>
              <span>CSS3</span>
            </li>
            <li>
              <i class="devicon-sass-original colored"></i>
              <span>Sass</span>
            </li>
            <li>
              <i class="devicon-javascript-plain colored"></i>
              <span>Javascript</span>
            </li>
            <li>
              <i class="devicon-react-original colored"></i>
              <span>ReactJS</span>
            </li>
            <li>
              <i class="devicon-redux-original colored"></i>
              <span>Redux</span>
            </li>
            <li>
              <i class="devicon-nodejs-plain colored"></i>
              <span>NodeJS</span>
            </li>
            <li>
              <i class="devicon-express-original colored"></i>
              <span>ExpressJS</span>
            </li>
            <li>
              <i class="devicon-postgresql-plain colored"></i>
              <span>PostgreSQL</span>
            </li>
            <li>
              <i class="devicon-sequelize-plain colored"></i>
              <span>Sequelize</span>
            </li>
            <li>
              <i class="devicon-mongodb-plain colored"></i>
              <span>MongoDB</span>
            </li>
            <li>
              <i class="devicon-mysql-plain colored"></i>
              <span>MySQL</span>
            </li>
            <li>
              <i class="devicon-php-plain colored"></i>
              <span>PHP</span>
            </li>
            <li>
              <i class="devicon-git-plain colored"></i>
              <span>Git</span>
            </li>
            <li>
              <i class="devicon-github-original colored"></i>
              <span>GitHub</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
