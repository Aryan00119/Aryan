import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Carousel from '../../utills/common/Crousel';
import { COLOR } from '../../utills/constants';
const SingleProject = ({ images, projectName, projectDescription, technologiesUsed, features }) => {
    useEffect(() => {
        AOS.init({
            duration: 1200,
        });
    }, []);
    return (
        <div>
            <div className="projct">
                <div className="images-of-project" data-aos="zoom-in">
                    <Carousel images={images} imagesPerRow={1}  heading={projectName} />
                </div>
                <div className="about-project row " style={{ color: COLOR, textAlign: "justify", padding: "20px" }}>
                    <div className="left-ab col-md-6 d-flex flex-column " data-aos="zoom-in">
                        <h2 className='text-center mb-4'>{projectName}</h2>
                        <p>{projectDescription}</p>
                        <span className="font-weight-bold">Features:</span>
                        <ul className="list">
                            {features.map((feature, index) => (
                                <li key={index}><i className="fas fa-check-circle text-success mr-2"></i>{feature}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="right-ab col-md-6 d-flex flex-column " data-aos="zoom-in">
                        <h2 className='text-center mb-4'>Technologies Used</h2>
                        <ul className="list">
                            {technologiesUsed.map((tech, index) => (
                                <li key={index}><span className="font-weight-bold">{tech.name}:</span> {tech.description}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProject;
