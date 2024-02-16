// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// function Login() {
//   return (
//     <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '65vh' }}>
//       <form style={{ width: '450px', borderBottom: '1px solid #343a40', padding: '20px 40px', borderRadius: '8px', boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.2)' }}>
//         <div className="form-group mb-3 pl-0" style={{fontSize: '20px'}}>
//           <label htmlFor="exampleInputEmail1" className="mb-1" >Email address</label>
//           <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
//         </div>
//         <div className="form-group mb-3" style={{fontSize: '20px'}}>
//           <label htmlFor="exampleInputPassword1" className="mb-1">Password</label>
//           <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
//         </div>
//         <button type="button" className="btn btn-primary" style={{ margin: '10px 80px', padding: '5px 20px', fontSize: '20px' }}> Submit</button>
//       </form>
//     </div>
//   );
// }

// export default Login;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Perform authentication logic here
    // For simplicity, let's assume email 'test@example.com' and password 'password' are correct
    if (email === 'madanetushar2@gmail.com' && password === '123') {
      // Redirect to Home component
      navigate('/home');
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '65vh' }}>
      <form style={{ width: '450px', borderBottom: '1px solid #343a40', padding: '20px 40px', borderRadius: '8px', boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.2)' }}>
        <div className="form-group mb-3 pl-0" style={{fontSize: '20px'}}>
          <label htmlFor="exampleInputEmail1" className="mb-1" >Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="form-group mb-3" style={{fontSize: '20px'}}>
          <label htmlFor="exampleInputPassword1" className="mb-1">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="button" className="btn btn-primary" style={{ margin: '10px 80px', padding: '5px 20px', fontSize: '20px' }} onClick={handleLogin}> Submit</button>
      </form>
    </div>
  );
}

export default Login;

