import React from 'react';
import './category.css'; // Import the CSS file
import { Link } from 'react-router-dom';

const Category = () => {
  return (
    <div className='category'>
      <Link to="/Women">
        <h1 className='women'>WOMEN</h1>
      </Link>
      <Link to="/Men">
        <h1 className='women'>Men</h1>
      </Link>
    </div>
  );
};

export default Category;
