import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import Category from '../Categore/category';

function Header() {
  return (
    <header>
      <Link to="/header">
        <img src='img/p3.png' alt="Logo" />
      </Link>
      <Category/>

      

      <div>
        <Link to="/cart">
          <img src='img/cart.png' className="cart"/>
        </Link>
      </div>

      <div>
        <Link to="/Add">
        <img src='img/add1.png' className="add"/>
        
        </Link>
      </div>
    </header>
  );
}

export default Header;
