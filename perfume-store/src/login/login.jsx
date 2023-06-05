import React, { useState } from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from "axios";
const Login = ({ onLogin }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (username.trim() === '' || password.trim() === '') {
//       setError('Please enter both username and password.');
//       return;
//     }

//     // Perform login logic
//     // Replace this with your actual login logic
//     fetch('http://localhost:8080/api/auth/signin', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ username, password }),
//     })
//       .then((response) => {

// console.log(response)
//         const token=response.data.accessToken;
//         console.log(token);
//         if (response.ok) {
//           setError(null);
//           console.log('Logged in successfully!');
//           response.json().then((data) => {
//             const { token } = data;
//             localStorage.setItem('token', token);
//           });
//           onLogin(); // Call the onLogin prop to set the authentication state in App.jsx
//           navigate('/home');
//         } else {
//           setError('Invalid username or password.');
//         }
//       })
//       .catch((error) => {
//         setError('An error occurred during login.');
//         console.error(error);
//       });
//   };

const handleSubmit = (event) => {
  event.preventDefault();

  axios.post('http://localhost:8080/api/auth/signin', { username, password })
      .then(response => {
          const token = response.data.accessToken;
          const email=response.data.email;
          
console.log(response)
          localStorage.setItem("token", token);
          localStorage.setItem("email", email);
          
      // localStorage.setItem("Email", email);


          navigate("/home");
      })
      .catch(error => {
          setError(error.response.data.message);
      });
};
  const isSubmitButtonDisabled = username.trim() === '' || password.trim() === '' || error !== '';

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <img src="img/p3.png" className="logo" alt="Logo" />
        <div className="form-group">
          <label className="labelE">Username:</label>
          <input type="text" value={username} onChange={handleUsernameChange} placeholder="Username" />
        </div>
        <div className="form-group">
          <label className="labelP">Password:</label>
          <input type="password" value={password} onChange={handlePasswordChange} />
          {error && <p className="error">{error}</p>}
        </div>
        <button type="submit" className="submit" disabled={isSubmitButtonDisabled}>
          Login
        </button>
        <br />
        <h5>
          Don't have an account? <Link to="/SignUp">Sign up</Link>
        </h5>
      </form>
    </div>
  );
};

export default Login;