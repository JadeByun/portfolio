import React from 'react';
import Card from './ProjectCard';
import { getProjects } from '../services/projectService';

const Projects = () => {
  const projects = getProjects();
  return (
    <div className='section' id='projects'>
      <div className='container'>
        <h4 className='heading-tertiary'>03</h4>
        <h1 className='heading-secondary'>
          My <br /> Projects
        </h1>
        <div className='cards'>
          <Card projects={projects} />
        </div>
      </div>
    </div>
  );
};

export default Projects;
