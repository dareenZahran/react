import React, { useState } from 'react';
import './SignUp.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
   const nav = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

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
    console.log('Signed up successfully!');
    nav('/home');
  };

  const isSubmitButtonDisabled = name.trim() === '' || email.trim() === '' || password.trim() === '' || error !== null;

  return (
    <div className="SignUp-container" >
    
      <form onSubmit={handleSubmit} className="SignUp-form">
      <img src='img/p3.png' className='logo'/>
        <div className="form-group">
          <label className="Name">Name:</label>
          <input type="text" value={name} onChange={handleNameChange} />
          <label className="labelE">Email:</label>
          <input type="email" value={email} onChange={handleEmailChange} placeholder="example@gmail.com" />
        </div>
        <div className="form-group">
          <label className="labelP">Password:</label>
          <input type="password" value={password} onChange={handlePasswordChange} />
        </div>
        <button type="submit" className='submit'>
          SignUp
        </button>
        <br />
        {/* <button className="google-signUp">SignUp With Google</button> */}
      
        {error && <p className="error">{error}</p>}
        <h5>Already have an account? <Link to="/login">Login</Link></h5>
      </form>
    </div>
  );
};

export default SignUp;
