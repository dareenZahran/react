import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { CartContext } from '../CartContext/CartContext';
import './Payment.css';

const Payment = () => {
  const navigate = useNavigate();
  const { cartItems } = useContext(CartContext);
  const [paymentDate, setPaymentDate] = useState(getCurrentDate());
  const [paymentMethod, setPaymentMethod] = useState('');
  const [amount, setAmount] = useState(getTotalPayment());
  const [error, setError] = useState('');

  function getCurrentDate() {
    const today = new Date();
    const year = today.getFullYear();
    let month = today.getMonth() + 1;
    let day = today.getDate();

    if (month < 10) {
      month = `0${month}`;
    }

    if (day < 10) {
      day = `0${day}`;
    }

    return `${year}-${month}-${day}`;
  }

  function getTotalPayment() {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  const handlePayment = async (e) => {
    e.preventDefault();

    const paymentData = {
      paymentDate,
      paymentMethod,
      amount
    };

    try {
      const response = await fetch('http://localhost:8080/Payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(paymentData)
      });

      if (response.ok) {
        // Payment successful
        // Reset form fields
        setPaymentDate(getCurrentDate());
        setPaymentMethod('');
        setAmount(getTotalPayment());
        setError('');

        // Navigate to success page
        navigate('/success');
      } else {
        // Handle error response
        const data = await response.json();
        setError(data.message);
      }
    } catch (error) {
      // Handle fetch error
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div className="payment-container">
      <h2>Payment</h2>
      <form onSubmit={handlePayment}>
        <div>
          <label htmlFor="paymentDate">Payment Date</label>
          <input
            type="date"
            id="paymentDate"
            value={paymentDate}
            onChange={(e) => setPaymentDate(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="paymentMethod">Payment Method</label>
          <select
            id="paymentMethod"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            required
          >
            <option value="">Select Payment Method</option>
            <option value="Credit Card">Credit Card</option>
            <option value="PayPal">PayPal</option>
            <option value="Bank Transfer">Bank Transfer</option>
          </select>
        </div>
        <div>
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            id="amount"
            value={amount}
            readOnly
            required
          />
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit">Make Payment</button>
      </form>
    </div>
  );
};

export default Payment;
