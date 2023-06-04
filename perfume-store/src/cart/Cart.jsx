import React, { useContext, useEffect } from 'react';
import { CartContext } from '../CartContext/CartContext';
import './Cart.css';
import { Link } from 'react-router-dom';
import $ from 'jquery'; // Import jQuery

const Cart = () => {
  const { cartItems, increaseQuantity, decreaseQuantity } = useContext(CartContext);

  const handleIncreaseQuantity = (itemId) => {
    increaseQuantity(itemId);
  };

  const handleDecreaseQuantity = (itemId) => {
    decreaseQuantity(itemId);
  };

  const totalPrice = parseFloat(
    cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  ).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  

  useEffect(() => {
    $('.cart-container').css('background-color', 'berple ');

    $('.item-list button').on('click', function () {
      // Handle button click
      console.log('Button clicked!');
    });
  }, []);

  return (
    <div className="cart-container">
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul className="item-list">
          {cartItems.map((item) => (
            <li key={item.id} className="item">
              <img src={item.photo} alt={item.name} className="image" />
              <div className='attribute'>
                <p>{item.name}</p>
                <p>Price: ${item.price}</p>
                <div>
                  <button onClick={() => handleDecreaseQuantity(item.id)} className="m">-</button>
                  <span> {item.quantity}</span>
                  <button onClick={() => handleIncreaseQuantity(item.id)}>+</button>
                  <br />
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
      <h3 className="total">Total Price: ${totalPrice}</h3>

      <div>
        <Link to="/Payment">
          <h3 className="total1">Pay it now</h3>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
