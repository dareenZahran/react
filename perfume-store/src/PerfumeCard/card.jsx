import React from "react";
import { Link } from 'react-router-dom';
import './card.css';
const Card = ({ product }) =>{
  
   
    return (
        <Link to={`/details`}>
         <div className="product-card">
      <img src={product.photo} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>Price: {product.price}</p>
    </div>
        </Link>
      );
}

export default Card;


