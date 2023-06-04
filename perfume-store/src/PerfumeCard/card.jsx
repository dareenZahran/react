
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './card.css';
import { CartContext } from '../CartContext/CartContext';

const Card = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setAddedToCart(true);
  };

  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`}>
        <img src={product.photo} alt={product.name} />
        <h3>{product.name}</h3>
      </Link>
      <button
        onClick={handleAddToCart}
        className={addedToCart ? 'added-to-cart' : ''}
      >
        {addedToCart ? 'Added to Cart' : 'Add to Cart'}
      </button>
    </div>
  );
};

export default Card;


