import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  border: 2px solid black;
  margin: 5px;
  height: 400px;
  width: 80%;
  background: linear-gradient(#3598db, #3498db, #2ecc71);
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out, background-color 0.3s ease-in-out;

  &:hover {
    transform: scale(1.08);  // Zoom out visibly
    box-shadow: 0 8px 16px rgba(100, 0, 0, 10);  // Darker reddish box shadow
    background-color: initial;  // Keep the original background color
  }
`;


const ProjectCard = ({ project }) => {
  return (
    <div>
      <Box>
        <h2 style={{ textAlign: 'center', fontSize: '30px' }}>{project.title}</h2>
        <p style={{ marginLeft: '15px' }}>{project.description}</p>
        <h3 style={{ textAlign: 'center', marginBottom:'0px' }}>Technologies Used: </h3>
        <ul style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'space-around' }}>
          {project.technologies.map((tech, index) => (
            <li style={{marginLeft:'140px'}} key={index}>{tech}</li>
          ))}
        </ul>
        <div style={{marginTop:'10px', textAlign: 'center', fontSize: '20px' }}>
          <a href={project.githubLink} target='_blank' rel="noopener noreferrer">
            Watch out project
          </a>
        </div>
      </Box>
    </div>
  );
};

export default ProjectCard;


