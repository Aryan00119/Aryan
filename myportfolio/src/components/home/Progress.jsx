import React from 'react';
import { ProgressBar, Container, Row, Col } from 'react-bootstrap';
import './Skills.css';  // Create and import a CSS file for custom styles

const Progress = () => {
  const skills = [
    { name: 'React', level: 90 },
    { name: 'CSS', level: 85 },
    { name: 'JavaScript', level: 75 },
    { name: 'Design', level: 90 },
    { name: 'Bootstrap', level: 70 },
    { name: 'Node.js', level: 75 }
  ];

  return (
    <Container className="skills-container">
      <h2 className="skills-heading">My Skills</h2>
      <Row>
        {skills.map((skill, index) => (
          <Col xs={12} md={6} key={index} className="skill-item">
            <h5 className="skill-name">{skill.name}</h5>
            <ProgressBar 
              now={skill.level} 
              label={`${skill.level}%`} 
              variant="warning" 
              className="progress-bar-custom" 
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Progress;
