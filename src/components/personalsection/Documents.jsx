// import React, { useState } from 'react';
// import documents from './docs';
// import docsBg from './docs/docsBg.jpg'

// const boxStyle = {
//   width: '400px', height: '500px', marginBottom: '10px', border: '1px solid #000', marginBottom: '50px',
//   boxSizing: 'border-box', objectFit: 'contain',
//   backgroundImage: `url(${docsBg})`
// };

// const imgStyle = {
//   height: '400px', width: '350px',
// };

// const h3Style = {
//   margin: '20px auto',
// };

// function Documents() {
//   const [searchTerm, setSearchTerm] = useState('');

//   const filteredDocuments = documents.filter((document) =>
//     document.heading.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <>
//       <div style={{display:'flex', flexDirection:'row', justifyContent:'space-around', alignItems:'center'}}>
//         <h2 style={{marginLeft: '510px', fontSize:'60px', fontStyle:'italic'}}>Documents</h2>
//         <div  >
//           <input style={{width:'300px', padding:' 3px 29px', borderRadius:'25px', fontSize:'20px'}} type="text" placeholder="Search by document name" value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//         </div>
//       </div>

//       <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around', marginTop: '50px' }}>
//         {filteredDocuments.map((document, index) => (
//           <div key={index} style={boxStyle}>
//             <h3 style={h3Style}>{document.heading}</h3>
//             <img src={document.imagePath} alt={document.heading} style={imgStyle} />
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }

// export default Documents;

import React, { useState } from 'react';
import documents from './docs';
import docsBg from './docs/docsBg.jpg';

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const boxStyle = {
  width: '400px',
  height: '500px',
  marginBottom: '50px',
  border: '1px solid #000',
  boxSizing: 'border-box',
  backgroundImage: `url(${docsBg})`,
  backgroundSize: 'cover', // Ensures the background image covers the entire box
};

const imgStyle = {
  height: '400px',
  width: '350px',
  objectFit: 'contain',
};

const h3Style = {
  margin: '20px auto',
};

function Documents() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredDocuments = documents.filter((document) =>
    document.heading.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
        <h2 style={{ marginLeft: '510px', fontSize: '60px', fontStyle: 'italic' }}>Documents</h2>
        <div>
          <input style={{ width: '300px', padding: ' 3px 29px', borderRadius: '25px', fontSize: '20px' }} type="text" placeholder="Search by document name" value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around', marginTop: '50px' }}>
        {filteredDocuments.map((document, index) => (
          <div key={index} style={{ ...containerStyle, ...boxStyle }}>
            <h3 style={h3Style}>{document.heading}</h3>
            <img src={document.imagePath} alt={document.heading} style={imgStyle} />
          </div>
        ))}
      </div>
    </>
  );
}

export default Documents;





