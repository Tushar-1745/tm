import React from 'react';
import dsaImage from '../pictures/dsa.jpeg';
import webDevelopmentImage from '../pictures/webdevelopment.jpeg';

const Certifications = () => {
  const certificationsContainerStyle = {
    display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around',
    marginBottom: '40px',
  };
  
  const certificationStyle = {
    display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column',
    padding: '20px', margin: '80px 20px', borderRadius: '10px', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#283747', color: '#F8F9FA', textAlign: 'center', width: '400px',  
    transition: 'transform 0.3s ease-in-out',
  };

  const certificationImageStyle = {
    width: '100%', height: 'auto', borderRadius: '10px',
  };

  // Hover effect functions
  const handleHover = (e) => {
    e.target.style.transform = 'scale(1.05)';
  };

  const handleHoverOut = (e) => {
    e.target.style.transform = 'scale(1)';
  };

  return (
    <div>
      <h1 style={{ fontSize: '60px', fontStyle: 'italic', textAlign: 'center' }}>Certifications</h1>
      <div style={certificationsContainerStyle}>


        {/* Certification 1 */}
        <div
          style={certificationStyle}
          onMouseEnter={handleHover}
          onMouseLeave={handleHoverOut}
        >
          <h2>Data Structure and Algorithms using Java</h2>
          <h4 style={{marginTop: '-5px'}}>by NPTEL</h4>
          <img src={dsaImage} alt="DSA" style={certificationImageStyle} />
          <div style={{ marginTop: '20px' }}>
            <h2>Key Skills</h2>
            <ul style={{ paddingLeft:'70px', marginTop:'-15px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <li>Java Language</li>
              <li>Data Structures</li>
              <li>Algorithms</li>
            </ul>

          </div>
        </div>

        {/* Certification 2 */}
        <div
          style={certificationStyle}
          onMouseEnter={handleHover}
          onMouseLeave={handleHoverOut}
        >
          <h2>Web Development</h2>
          <h4 style={{marginTop: '-5px'}}>by Udemy</h4>
          <img src={webDevelopmentImage} alt="Web Development" style={certificationImageStyle} />
          <div style={{ marginTop: '20px' }}>
          <h2>Key Skills</h2>
            <ul style={{ paddingLeft:'70px', marginTop:'-15px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;

