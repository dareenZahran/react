import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import Category from '../Categore/category';

function Header() {
  return (
    <header>
      <Link to="/header">
        <img src='/img/p3.png' alt="Logo" />
      </Link>
      <Category/>

      <div>
        <Link to="/AboutUs">
          <button className="submit2">
            <img src="img/icons8-about-50.png" alt="About Us" /> 
          </button>
        </Link>
      </div>
      
      <div>
        <Link to="/cart">
          <img src='/img/cart.png' alt="Cart" className="cart" />
        </Link>
      </div>

      <div>
        <Link to="/Add">
          <img src='/img/add1.png' alt="Add" className="add" />
        </Link>
      </div>
      
      <div>
        <Link to="/profile">
          <img src='/img/profile.png' alt="Profile" className="profile" />
        </Link>
      </div>
    </header>
  );
}

export default Header;
