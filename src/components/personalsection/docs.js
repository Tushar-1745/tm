import isem from './docs/1st sem.jpeg';
import iisem from './docs/2nd sem.jpeg';
import iiisem from './docs/3rd sem.jpeg';
import ivsem from './docs/4th sem.jpeg';
import vsem from './docs/5th sem.jpeg';
import visem from './docs/6th sem.jpeg';
import twelfthLC from './docs/12th LC.jpeg';
import rationCard from './docs/ration.jpeg';
import casteValidity from './docs/validity.jpeg';
import tenthResult from './docs/10th result.jpeg';
import twelfthResult from './docs/12th result.jpeg';
import declaration from './docs/declaration.jpeg';
import casphoto from './docs/casphoto.png';
import tmadhaar from './docs/tmadhar.jpeg';
import casteCertificate from './docs/caste certificate.jpeg';
import passbook from './docs/SBI passbook.jpeg';


export const documents = [
    { heading:'Adhaar Card', imagePath:tmadhaar},
    // { heading: 'Casual Photo', imagePath:casphoto},
    { heading:'Declaration', imagePath:declaration },
    { heading: '10th result', imagePath: tenthResult},
    { heading:'12th result', imagePath: twelfthResult},
    { heading: 'Ration Card', imagePath: rationCard},
    { heading: 'Caste validity', imagePath: casteValidity},
    { heading: '12th LC', imagePath: twelfthLC, },
    { heading: 'Caste Certificate', imagePath: casteCertificate},
    { heading: 'SBI passbook', imagePath: passbook},
    { heading: '1st sem result', imagePath: isem,},
    { heading: '2nd sem result', imagePath: iisem,},
    { heading: '3rd sem result', imagePath: iiisem,},
    { heading: '4th sem result', imagePath: ivsem,},
    { heading: '5th sem result', imagePath: vsem,},
    { heading: '6th sem result', imagePath: visem,},
];

export default documents;