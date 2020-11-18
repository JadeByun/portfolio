import React, { Fragment } from 'react';

const ProjectCard = ({ projects }) => {
  const { id, title, skills, year, month, img, links } = projects;
  return (
    <Fragment>
      {projects &&
        projects.map((project) => (
          <div className='card' key={project.id}>
            <div className='card__side card__side--front'>
              {/* <img src={project.img} className='card__picture' /> */}
              <div className='card__picture'></div>
              <div className='card__heading'>
                <h4 className='card__heading--title'>{project.title}</h4>
                <p className='card__heading--sub'>
                  {project.skills.join(', ')}
                </p>
              </div>
            </div>

            <div className='card__side card__side--back'>
              <div className='card__cta'>
                {project.links &&
                  project.links.map((link) => (
                    <div className='card__cta-1 u-center-text'>
                      <p className='card__source'>{link.title}</p>
                      <a href={link.url} className='btn-text'>
                        {link.button} &rarr;
                      </a>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        ))}
    </Fragment>
  );
};

export default ProjectCard;
