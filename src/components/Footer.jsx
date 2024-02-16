import React from 'react';
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  const instagramLink = 'https://www.instagram.com/your-instagram-username';
  const facebookLink = 'https://www.facebook.com/your-facebook-username'; 
  const twitterLink = 'https://twitter.com/madane_tushar'; 

  return (
    <div style={{ marginTop: '20px',backgroundColor: '#333', color: 'white', padding: '20px 0', textAlign: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '10px' }}>
        <h3 style={{ margin: '0 0 -5px' }}>Tushar Bhagwan Madane</h3>
        <p style={{ marginBottom: '-5px' }}>Ghole road, Shivajinagar, Pune, 411005</p>
        <p style={{ marginBottom: '-5px' }}>Email: madanetushar2@gmail.com</p>
        <p>Phone: 8856932017</p>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <a href={instagramLink} target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: 'white' }}>
          <FaInstagram size={30} />
        </a>
        <a href={facebookLink} target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: 'white' }}>
          <FaFacebook size={30} />
        </a>
        <a href={twitterLink} target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: 'white' }}>
          <FaTwitter size={30} />
        </a>
      </div>

      <div style={{ marginTop: '20px'}}>
        <p>&copy; {new Date().getFullYear()} Tushar Madane. All Rights Reserved.</p>
      </div>
    </div>
  );
}

