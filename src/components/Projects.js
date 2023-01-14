import React from 'react';
import '../assets/styles/Projects.scss';
import playflixImg from '../assets/images/playflix-web.png';
import prodeImg from '../assets/images/prode-web.png';
import pineappleImg from '../assets/images/pineapple-web.png';

const Projects = ({ onLoadImage }) => {
  return (
    <section id="projects">
      <h2>Proyectos</h2>
      <div>
        <article className="project">
          <img src={playflixImg} alt="Playflix" onLoad={onLoadImage} />
          <div className="details">
            <div className="header">
              <h2>PLAYFLIX</h2>
              <p>
                Sitio web de peliculas y series
                <a
                  href="https://github.com/lucianocasini?tab=repositories&q=playflix"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="devicon-github-original"></i>
                </a>
              </p>
            </div>
            <p>
              Playflix es una aplicación web que permite buscar películas y
              series, ver sus detalles y también agregarla a favoritos si tienes
              la sesión iniciada.
            </p>
            <ul>
              <li>
                <i className="devicon-react-original colored"></i>
                <span>ReactJS</span>
              </li>
              <li>
                <i className="devicon-redux-original colored"></i>
                <span>Redux</span>
              </li>
              <li>
                <i className="devicon-sass-original colored"></i>
                <span>Sass</span>
              </li>
              <li>
                <i className="devicon-nodejs-plain colored"></i>
                <span>NodeJS</span>
              </li>
              <li>
                <i className="devicon-express-original colored"></i>
                <span>ExpressJS</span>
              </li>
              <li>
                <i className="devicon-postgresql-plain colored"></i>
                <span>PostgreSQL</span>
              </li>
              <li>
                <i className="devicon-sequelize-plain colored"></i>
                <span>Sequelize</span>
              </li>
            </ul>
          </div>
        </article>

        <article className="project">
          <img src={prodeImg} alt="Prode" onLoad={onLoadImage} />
          <div className="details">
            <div className="header">
              <h2>PRODE MUNDIAL</h2>
              <p>
                PWA de Prode Mundial
                <a
                  href="https://github.com/lucianocasini?tab=repositories&q=prode"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="devicon-github-original"></i>
                </a>
              </p>
            </div>
            <p>
              Pagina web de apuestas deportivas, 3 lenguajes disponibles (EN,
              ES, PT), disponible únicamente en 3 regiones (ARG, USA, BR),
              diversos premios según región, back office admin, custom metrics y
              notificaciones push / email.
            </p>
            <ul>
              <li>
                <i className="devicon-react-original colored"></i>
                <span>ReactJS</span>
              </li>
              <li>
                <i className="devicon-redux-original colored"></i>
                <span>Redux</span>
              </li>
              <li>
                <i className="devicon-nodejs-plain colored"></i>
                <span>NodeJS</span>
              </li>
              <li>
                <i className="devicon-express-original colored"></i>
                <span>ExpressJS</span>
              </li>
              <li>
                <i className="devicon-mongodb-plain colored"></i>
                <span>MongoDB</span>
              </li>
              <li>
                <i className="devicon-firebase-plain colored"></i>
                <span>Firebase</span>
              </li>
            </ul>
          </div>
        </article>

        <article className="project">
          <img src={pineappleImg} alt="Pineapple" onLoad={onLoadImage} />
          <div className="details">
            <div className="header">
              <h2>PINEAPPLE</h2>
              <p>
                Tienda online de celulares
                <a
                  href="https://github.com/lucianocasini?tab=repositories&q=pineapple"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="devicon-github-original"></i>
                </a>
              </p>
            </div>
            <p>
              E-commerce de celulares que permite ver y listar los celulares
              disponibles, buscar productos, dejar reviews, agregar al carrito y
              realizar el checkout. También cuenta con panel de administrador
              donde se puede administrar productos (añadir, editar y eliminar),
              administrar usuarios y ordenes de compra.
            </p>
            <ul>
              <li>
                <i className="devicon-react-original colored"></i>
                <span>ReactJS</span>
              </li>
              <li>
                <i className="devicon-redux-original colored"></i>
                <span>Redux</span>
              </li>
              <li>
                <i className="devicon-nodejs-plain colored"></i>
                <span>NodeJS</span>
              </li>
              <li>
                <i className="devicon-express-original colored"></i>
                <span>ExpressJS</span>
              </li>
              <li>
                <i className="devicon-postgresql-plain colored"></i>
                <span>PostgreSQL</span>
              </li>
              <li>
                <i className="devicon-sequelize-plain colored"></i>
                <span>Sequelize</span>
              </li>
              <li>
                <i className="devicon-materialui-plain colored"></i>
                <span>MaterialUI</span>
              </li>
            </ul>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Projects;
