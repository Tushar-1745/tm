// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const PersonalNavbar = () => {
  return (
    <nav style={{ margin: '40px 60px', border:'4px solid black', height:'80px', width: '1400px', borderRadius: '5px'}}>
      <div><img src="" alt="" /></div>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', marginRight:'80px' }}>
        <div><Link to="/personal/dsa" style={{ marginRight: '40px' }}>DSA</Link></div>
        
        <div><Link to="/personal/documents" style={{ marginRight: '40px' }}>Documents</Link></div>
        <div><Link to="/photos">Photos</Link></div> 
      </div>
    </nav>
  );
}

export default PersonalNavbar;

