import React from 'react';

const EduBox = {
  border: '4px solid black', background: 'linear-gradient(45deg, #ff6b6b, #48dbfb, #1dd1a1)',
  height: '300px', borderRadius: '15px', padding: '20px', transition: 'transform 0.3s, box-shadow 0.3s', 
};
const EduHeading = {
  alignItems: 'center', textDecoration: 'underline', color: '#2d3436',
};
const EduDetailBox = {
  display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '20px',
  marginTop: '-11px', color: '#2d3436',
};
const pStyle = {
  marginBottom: '0px', fontSize: '18px',
};

const Education = () => {
  const handleHover = (event) => {
    const card = event.currentTarget;
    card.style.transform = 'scale(1.05)';
    card.style.boxShadow = '0px 0px 20px rgba(0, 0, 0, 0.2)';
  };

  const handleHoverExit = (event) => {
    const card = event.currentTarget;
    card.style.transform = 'scale(1)';
    card.style.boxShadow = '0px 0px 0px rgba(0, 0, 0, 0.2)';
  };

  return (
    <div style={{ height: '80vh' }}>
      <h1 style={{ fontSize: '60px', fontStyle: 'italic', textAlign: 'center' }}>Education</h1>

      <div style={{ marginTop:'70px', display: 'flex', flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-evenly' }}>
        <div
          style={{ ...EduBox, width: '350px' }}
          onMouseEnter={handleHover}
          onMouseLeave={handleHoverExit}
        >
          <h2 style={EduHeading}>Primary Education</h2>
          <div style={EduDetailBox}>
            <p style={pStyle}><strong>Name: </strong>Shaskiya Vidyaniketan, Pusegaon</p>
            <p style={pStyle}><strong>Address:</strong>Pusegaon, Dist-Satara</p>
            <p style={pStyle}><strong>SSC Percentage: </strong>97</p>
          </div>
        </div>

        <div
          style={{ ...EduBox }}
          onMouseEnter={handleHover}
          onMouseLeave={handleHoverExit}
        >
          <h2 style={EduHeading}> Junior College</h2>
          <div style={EduDetailBox}>
            <p style={pStyle}><strong>Name: </strong>Laxmanrao Apte Jr. College</p>
            <p style={{...pStyle, marginLeft: '-1px'}}><strong>Address: </strong>Deccan Gymkhana, Pune-411004</p>
            <p style={pStyle}><strong>Course:</strong>12th Science Stream</p>
            <p style={pStyle}><strong>HSC Percentage: </strong>73.23</p>
            <p style={pStyle}><strong>Course Duration: </strong>2018-2020</p>
          </div>
        </div>

        <div
          style={{ ...EduBox, width: '430px' }}
          onMouseEnter={handleHover}
          onMouseLeave={handleHoverExit}
        >
          <h2 style={EduHeading}>Senior College</h2>
          <div style={EduDetailBox}>
            <p style={{ ...pStyle, marginLeft: '-1px' }}><strong>Name: </strong>Sinhgad Institute of Technology and Science</p>
            <p style={pStyle}><strong>Address: </strong>Narhegaon, Ambegaon, Pune</p>
            <p style={pStyle}><strong>Course:</strong> Computer Science and Engineering</p>
            <p style={pStyle}><strong>CGPA: </strong>8.25</p>
            <p style={pStyle}><strong>Course Duration: </strong>2020-2024</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;




