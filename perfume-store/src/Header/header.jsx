import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <Link to="/header">
        <h1 className='logo'>MY PERFUM</h1>
        
        </Link>
       
        <div className="search-container">
        <input type="text" placeholder="Search" />
      </div>
      <div className="profile-container">
        <div className="profile-circle"></div>
      </div>
    </header>
  );
}

export default Header;
