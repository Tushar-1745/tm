import React from 'react'

const containerStyle = {
  display: 'flex',
  flexDirection: 'row', // Assuming you want a horizontal layout
  flexWrap: 'wrap',
  justifyContent: 'space-around'
};

const boxStyle = {
  border: '2px solid black',
  margin: '5px',
  height: '400px',
  width: '30%',
  background: 'linear-gradient(#3598db, #3498db, #2ecc71)'
};

function Projects() {
  return (
    <div>
      <h1 style={{fontSize:'60px', fontStyle:'italic',textAlign: 'center'}}>My Projects</h1>
      <div className="container" style={containerStyle}>
        <div className="box" style={boxStyle}>
          <h2 style={{ textAlign: 'center', fontSize: '30px' }}>Full-Stack Project: CRUD Operation</h2>
          <p style={{ marginLeft: '15px' }}>Development of Full Stack Project of Create, Read, Update and Delete Operation</p>
          <h3 style={{ textAlign: 'center' }}>Technologies Used: </h3>
          <ul style={{ marginLeft: '150px' }}>
            <li>ReactJs</li>
            <li>MaterialUI</li>
            <li>SpringBoot</li>
            <li>Hibernate</li>
            <li>MySQL</li>
          </ul>
          <div style={{ textAlign: 'center', fontSize:'20px' }}><a href="http://github.com/Tushar-1745/Full-Stack-Project-CRUD-Operations" target='_blank'>watch out project</a></div>
        </div>
        <div className="box" style={boxStyle}>
          <h2 style={{ textAlign: 'center', fontSize: '30px' }}>Weather Application</h2>
          <p style={{ marginLeft: '15px', fontSize: '15px' }}>Weather Forecasting Application development using basic Web Development Concepts</p>
          <div >
            <h3 style={{ textAlign: 'center' }}>Technologies Used: </h3>
            <ul style={{ marginLeft: '150px' }}>
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>API</li>
            </ul>
          </div>
          <div style={{ textAlign: 'center', fontSize:'20px' }} ><a href="https://github.com/Tushar-1745/weather-app" target='_blank'>watch out project</a></div>
        </div>
        <div className="box" style={boxStyle}>
          <h2 style={{ textAlign: 'center', fontSize: '30px' }}>News App</h2>
          <p style={{ marginLeft: '15px' }}>Developed Live News Application using ReactJs and Remote API</p>
          <div >
            <h3 style={{ textAlign: 'center' }}>Technologies Used: </h3>
            <ul style={{ marginLeft: '150px' }}>
              <li>ReactJs</li>
              <li>API</li>
            </ul>
          </div>
          <div style={{ textAlign: 'center', fontSize:'20px' }} ><a href="https://github.com/Tushar-1745/https://github.com/Tushar-1745/newsapp" target='_blank'>watch out project</a></div>
        </div>
        <div className="box" style={boxStyle}>
          <h2 style={{ textAlign: 'center', fontSize: '30px' }}>Employee Management System</h2>
          <p style={{ marginLeft: '15px' }}>Java based Employee Management System Project</p>
          <div >
            <h3 style={{ textAlign: 'center' }}>Technologies Used: </h3>
            <ul style={{ marginLeft: '150px' }}>
              <li>Java</li>
              <li>Swing</li>
              <li>AWT</li>
            </ul>
          </div>
          <div style={{ textAlign: 'center', fontSize:'20px' }} ><a href="https://github.com/Tushar-1745/Employee-Management-System" target='_blank'>watch out project</a></div>
        </div>
        <div className="box" style={boxStyle}>
          <h2 style={{ textAlign: 'center', fontSize: '30px' }}>News App</h2>
          <p style={{ marginLeft: '15px' }}>Developed Live News Application using ReactJs and Remote API</p>
          <div >
            <h3 style={{ textAlign: 'center' }}>Technologies Used: </h3>
            <ul style={{ marginLeft: '150px' }}>
              <li>ReactJs</li>
              <li>API</li>
            </ul>
          </div>
          <div style={{ textAlign: 'center', fontSize:'20px' }} ><a href="https://github.com/Tushar-1745/https://github.com/Tushar-1745/newsapp" target='_blank'>watch out project</a></div>
        </div>
      </div>
    </div>
  )
}

export default Projects