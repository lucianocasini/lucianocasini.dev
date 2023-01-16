import React from 'react';
import '../assets/styles/Experience.scss';

const Experience = () => {
  return (
    <section id="experience">
      <h2>Experiencia</h2>
      <div className="timeline-container">
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>ÜMA Health AI</h3>
            <span>Fullstack developer - ene. 2023 - actualidad</span>
            <ul>
              <li>
                ÜMA es una plataforma inteligente de salud y bienestar que
                innova en la gestión de servicios de salud, apalancandose en
                Inteligencia Artificial para lograr una experiencia más
                eficiente dentro de la plataforma.
              </li>
            </ul>
          </div>
        </div>

        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>Multimedios Agroempresario</h3>
            <span>Backend developer - Freelance - jun. 2020 - feb. 2021</span>
            <ul>
              <li>
                - Desarrollé el backend de la nueva plataforma del diario.
              </li>
              <li>
                - Llevé a cabo la migración de datos de la antigua plataforma.
              </li>
              <li>- Configuré el servidor web y almacenamiento de archivos.</li>
              <li>- Desplegué la nueva plataforma en Google Cloud.</li>
              <li>
                - Trabajé con las siguientes tecnologías: PHP, MySQL, Virtual
                Machine, Cloud storage, Cloud SQL.
              </li>
            </ul>
          </div>
        </div>

        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>Arido Software</h3>
            <span>Frontend developer - Fulltime - may. 2017 - ago. 2018</span>
            <ul>
              <li>
                - Desarrollé funcionalidades a las aplicaciones existentes.
              </li>
              <li>- Colaboré en el desarrollo de nuevas aplicaciones web.</li>
              <li>- Brindé soporte técnico a usuarios mediante Zendesk.</li>
              <li>
                - Trabajé con las siguientes tecnologías: React, Sass, SQL,
                jQuery.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
