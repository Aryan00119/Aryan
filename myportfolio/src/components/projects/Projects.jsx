import React from 'react'
import SingleProject from './SingleProject'
import {projects } from '../../utills/constants';
import Footer from '../../utills/common/Footer';


const Projects = () => {
  return (
    <div className='container' style={{marginTop:"90px"}}>
        <h2 className='text-white text-center'>My Projects</h2>
        {projects.map((project) => (
                <SingleProject
                    key={project.projectName}
                    projectName={project.projectName}
                    projectDescription={project.projectDescription}
                    technologiesUsed={project.technologiesUsed}
                    features={project.features}
                    images={project.images}
                />
            ))}

            <Footer/>
    </div>
  )
}

export default Projects
