


import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './card.css';
import { CartContext } from '../CartContext/CartContext';

const Card = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`}>
        <img src={product.photo} alt={product.name} />
        <h3>{product.name}</h3>
      </Link>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default Card;



