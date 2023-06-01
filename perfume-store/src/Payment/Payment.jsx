import React, { useState } from 'react';
import './Payment.css';

const Payment = () => {
  const [paymentDate, setPaymentDate] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [amount, setAmount] = useState(0);
  const [error, setError] = useState('');

  const handlePayment = async (e) => {
    e.preventDefault();

    const paymentData = {
      paymentDate,
      paymentMethod,
      amount
    };

    try {
      const response = await fetch('/api/payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(paymentData)
      });

      if (response.ok) {
        // Payment successful
        // Reset form fields
        setPaymentDate('');
        setPaymentMethod('');
        setAmount(0);
        setError('');
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
    <div>

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
          <input
            type="text"
            id="paymentMethod"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(parseFloat(e.target.value))}
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
