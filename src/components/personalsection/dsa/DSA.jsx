
import React, { useState } from 'react';
import Arrays from './Arrays'; // Importing the data
import tm from './tm.jpg'


const pStyle = {
  fontSize: '20px', color: 'white', display: 'flex', alignItems: 'center', cursor: 'pointer'
};

const languageStyle = {
  height: '30px', margin: 'auto', width: '30%', border: '2px solid black', borderRadius: '20px', pointer: 'cursor'
  , backgroundColor: 'wheat'

}
function DSA() {
  const [isArrayOpen, setIsArrayOpen] = useState(false);
  const [isStringOpen, setIsStringOpen] = useState(false);
  const [isStackOpen, setIsStackOpen]= useState(false);
  const [style, setStyle] = useState(false);
  const [BgStyel, setBgStyle] = useState(languageStyle)

  const toggleArray = () => {
    setIsArrayOpen(!isArrayOpen);
  };
  const toggleString=()=>{
    setIsStringOpen(!isStringOpen);
  }
  const toggleStack=()=>{
    setIsStackOpen(!isStackOpen);
  }
  return (
    <div className="App">
      <div style={{ marginLeft: '10px', height: '90vh', width: '250px', backgroundColor: 'black' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', }} >
          <img style={{ height: '100px', objectFit: 'content', width: '100px', borderRadius: '50px', marginTop: '10px' }} styl src={tm} alt="" />
          <h3 style={{ color: 'white', fontSize: '20px', marginTop: '10px' }}>Tushar Madane</h3>
          <hr style={{ border: '2px solid white', width: '230px', color: 'white' }} />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '30px' }}>

          {/* {/* Array */}
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
            <p style={pStyle} onClick={toggleArray}>Array </p>
            <svg onClick={toggleArray} style={{ color: 'white', marginLeft: '40px', marginTop: '6px', transform: `rotate(${isArrayOpen ? '90deg' : '0deg'})` }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
            </svg>
          </div>
          {isArrayOpen &&
            <div style={{ position: 'relative', backgroundColor: 'black', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '30px', width: 'calc(100% - 30px)' }}>
              {Arrays.data.map((item, index) => (
                <div key={index} style={{ maxWidth: '100%', overflow: 'hidden' }}>

                  <a style={{ color: 'wheat', textDecoration: 'none', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'block' }} href={item.url}>{item.no}{item.problem}</a>
                </div>
              ))}
            </div>
          }
          {/* String */}
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
            <p style={pStyle} onClick={toggleString}>String </p>
            <svg onClick={toggleString} style={{ color: 'white', marginLeft: '40px', marginTop: '7px', transform: `rotate(${isStringOpen ? '90deg' : '0deg'})` }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
            </svg>
          </div>
          {isStringOpen &&
            <div style={{ position: 'relative', backgroundColor: 'black', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '30px', width: 'calc(100% - 30px)' }}>
              {Arrays.data.map((item, index) => (
                <div key={index} style={{ maxWidth: '100%', overflow: 'hidden' }}>
                  <a style={{ color: 'wheat', textDecoration: 'none', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'block' }} href={item.url}>{item.no}{item.problem}</a>
                </div>
              ))}
            </div>
          }

          {/* Stack */}
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
            <p style={pStyle} onClick={toggleStack}>Stack </p>
            <svg onClick={toggleStack} style={{ color: 'white', marginLeft: '40px', marginTop: '7px', transform: `rotate(${isStackOpen ? '90deg' : '0deg'})` }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
            </svg>
          </div>
          {isStackOpen &&
            <div style={{ position: 'relative', backgroundColor: 'black', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '30px', width: 'calc(100% - 30px)' }}>
              {Arrays.data.map((item, index) => (
                <div key={index} style={{ maxWidth: '100%', overflow: 'hidden' }}>
                  <a style={{ color: 'wheat', textDecoration: 'none', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'block' }} href={item.url}>{item.no}{item.problem}</a>
                </div>
              ))}
            </div>
          }
        </div>
      </div>
    </div>
  );

}

export default DSA;

