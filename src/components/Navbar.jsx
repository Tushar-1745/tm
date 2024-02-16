import React from 'react'
import { Link } from 'react-router-dom'
import { IoLogoLinkedin, IoLogoOctocat } from 'react-icons/io5';
import { GrGithub } from 'react-icons/gr';
import Login from './Login';
import { useState } from 'react';

const imgUrl= 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlo2Mcne5gfIgamsBMyHUboDtaQoQsGGC-LA&usqp=CAU';

const navbarStyle = {
  // border: 'black 5px solid', 
  // position: 'sticky', top: '5', zIndex: '1000', 
  margin: '20px 20px auto 20px', height: '80px', borderRadius: '20px', display: 'flex',
  flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', fontSize: '20px'
}
const homeImageStyle = {
  width: '50px', height: '50px', margin: 'auto 25px'
};
const linkContainerStyle = {
  display: 'flex', flexDirection: 'row',
}
const boxStyle = {
  margin: 'auto 20px', textDecoration: 'none',  // Remove underline
}
const logoStyle = {
  margin: '0 20px', color: 'black'
}
const buttonStyle = {
  fontSize: '21px', border: 'none', outline: 'none', color: 'black', padding: '13px 16px',
  backgroundColor: 'inherit', fontFamily: 'inherit', margin: 0, cursor: 'pointer',
}
const divStyle = {
  position: 'relative', display: 'inline-block'
}
const LinkStyle = {
  color: 'white', padding: '6px 16px', textDecoration: 'none', display: 'block', textAlign: 'left',
}
const dropdownStyle = {
  position: 'absolute', backgroundColor: '#0A1434', minWidth: '50px',
  boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)', zIndex: 1,
}
const linkedinLink = 'https://www.linkedin.com/in/tushar-madane-29071b252/'
  const leetcodeLink = 'https://leetcode.com/Tushar1745/'
  const githubLink = 'https://github.com/Tushar-1745'

  const handleProfile = () => {
    alert("this is personal private section of Developer.")
  }


function Navbar() {
  const [isExperienceDropdownOpen, setIsExperienceDropdownOpen] = useState(false);
  const [myPage, setmyPage] = useState(false);

  return (
    <>
      <div style={navbarStyle}>
        <div style={linkContainerStyle}>
          <Link to="/">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgwo34i6dF8u55chEwhiibz6jMGUS1UbdRsc_hTBHLEQvEJM5qCY7qeYD4WroO9cHzB5w&usqp=CAU"
            alt="Home"
            style={homeImageStyle}
          />
          </Link>
          {/* <Link to="/" style={boxStyle}>Home</Link> */}
          <Link to="/education" style={boxStyle}>Education</Link>
          <Link to="/certifications" style={boxStyle}>Certifications</Link>

          <div style={divStyle}
            onMouseEnter={() => setIsExperienceDropdownOpen(true)}
            onMouseLeave={() => setIsExperienceDropdownOpen(false)}>
            <button style={buttonStyle}>Experience </button>
            {isExperienceDropdownOpen && (
              <div style={dropdownStyle} >
                <Link to="/experience/projects" style={LinkStyle}>Projects</Link>
                <Link to="/experience/internship" style={LinkStyle}> Internship</Link>
                <Link to="/experience/job" style={LinkStyle}>Job</Link>
              </div>
            )}
          </div>

        </div>
        <div style={{ marginTop: '5px 10px', display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
          {/* <div style={divStyle}
            onMouseEnter={() => setmyPage(true)}
            onMouseLeave={() => setmyPage(false)}>
              <img style={{...buttonStyle, height: '55px', }}src={imgUrl} alt="" />
              {myPage && (
              <div style={dropdownStyle} >
                <Link to="mypage/documents" style={LinkStyle}>Documents</Link>
                <Link to="mypage/photos" style={LinkStyle}>Photos</Link>
              </div>
            )}
          </div> */}
         <Link to="/login" style={boxStyle}><img style={{height: '30px', marginRight: '10px', mixBlendMode: 'multiply'}} onClick={handleProfile} src={imgUrl} alt="" /></Link>
          <a href=""> </a>
          <a href={linkedinLink} target="_blank" rel="noopener noreferrer" style={logoStyle}>
            <IoLogoLinkedin size={30} />
          </a>
          <a href={leetcodeLink} target="_blank" rel="noopener noreferrer" style={logoStyle}>
            <IoLogoOctocat size={30} />
          </a>
          <a href={githubLink} target="_blank" rel="noopener noreferrer" style={logoStyle}>
            <GrGithub size={30} />
          </a>
        </div>
      </div>
    </>
  )
}

export default Navbar;



