import React, { useState } from 'react';
import './login.css';
import { Navigate, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import SignUp from '../SignUp/SignUp';
const Login = () => {
  const nav = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
const emailRegex = /^[\w-.]+@(gmail|hotmail|yahoo)\.(com|net|org)$/i;
    const isValidEmail = emailRegex.test(email);
    if (email.trim() === '' || password.trim() === '') {
      setError('Please enter both email and password.');
      return;
    }

    
    if (!isValidEmail) {
      setError('Invalid email format. Please enter a valid email address.');
      return;
    }
    if (password.length < 4) {
      setError('Password must be at least 4 characters long.');
      return;
    }

    setError(null);
    console.log('Logged in successfully!');
    nav('/home');
  
  }
  const isSubmitButtonDisabled = email.trim() === '' || password.trim() === '' || error !== null;

  return (
    <div className="login-container" style={{ backgroundImage: `url("img/img6.png")` }}>
      <h1 className="h">Login into your account</h1>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label className="labelE">Email:</label>
          <input type="email" value={email} onChange={handleEmailChange} placeholder="example@gmail.com" />
        </div>
        <div className="form-group">
          <label className="labelP">Password:</label>
          <input type="password" value={password} onChange={handlePasswordChange} />
          {error && <p className="error">{error}</p>}
        </div>
        <button type="submit" className="submit">
          Login
        </button>
        <br></br>
        {/* <button className="google"  disabled={isSubmitButtonDisabled}>Login With Google</button> */}
        <a href="https://www.google.com" className="google" >
          Login With Google
        </a>
        <h5>  Don't have an account? <Link to="/SignUp">Sign up</Link></h5>
      </form>
    </div>
  );
};

export default Login;
