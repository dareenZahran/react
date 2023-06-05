import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import Category from '../Categore/category';
import axios from 'axios';

function Header() {
  function logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    window.location.href = '/login';
  }
  const token = localStorage.getItem('token');
  const isTokenAvailable = token !== null;
  const isEmailTest = localStorage.getItem('email') === 'dareen@gmail.com';
  return (
    <header>
      
      {isTokenAvailable ? (
        <>
          <Link to="/header">
            <img src="img/p3.png" alt="Logo" />
          </Link>
          <Category />
          {isEmailTest && (
        <div>
          <Link to="/Add">
            <img src="img/add1.png" className="add" />
          </Link>
        </div>
      )}
          <div>
            <Link to="/cart">
              <img src="img/cart.png" className="cart" />
            </Link>
          </div>
          <div className="button-group">
            <button id="logout" onClick={logout}>
              Logout
            </button>
          </div>
        </>
      ) : (
        <p>Access Denied</p>
      )}
      {/* <div>
        <Link to="/AboutUs">
          <button className="submit2">
            <img src="img/icons8-about-50.png" alt="About Us" /> 
          </button>
        </Link>
      </div> */}
 

      
      <div>
        <Link to="/profile">
          <img src='/img/profile.png' alt="Profile" className="profile" />
        </Link>
      </div>
    </header>
  );
}

export default Header;
