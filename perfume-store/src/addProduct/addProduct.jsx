import React, { useState, useEffect, useRef } from 'react';
import './cssfile.css';

const AddProduct = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [photo, setPhoto] = useState('');
  const [error, setError] = useState('');
  const containerRef = useRef(null);

  useEffect(() => {
    adjustMediaSize(); // Call the adjustMediaSize function on component mount
    window.addEventListener('resize', adjustMediaSize); // Call the function whenever the window is resized

    return () => {
      window.removeEventListener('resize', adjustMediaSize); // Clean up the event listener on component unmount
    };
  }, []);

  const adjustMediaSize = () => {
    const containerWidth = containerRef.current.offsetWidth;
    const mediaWidth = Math.min(containerWidth, 500);
    const mediaElements = document.getElementsByClassName('media');

    for (let i = 0; i < mediaElements.length; i++) {
      mediaElements[i].style.width = mediaWidth + 'px';
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const productData = {
      name,
      description,
      price,
      photo
    };

    try {
      const response = await fetch('http://localhost:8080/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(productData)
      });

      if (response.ok) {
        setName('');
        setDescription('');
        setPrice(0);
        setPhoto('');
        setError('');
      } else {
        const data = await response.json();
        setError(data.message);
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="container" ref={containerRef}>
          <h2>Add Product</h2>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="price">Price</label>
            <input
              type="number"
              id="price"
              value={price}
              onChange={(e) => setPrice(parseFloat(e.target.value))}
              required
            />
          </div>
          <div>
            <label htmlFor="photo">Photo</label>
            <input
              type="text"
              id="photo"
              value={photo}
              onChange={(e) => setPhoto(e.target.value)}
              required
            />
          </div>
          {error && <p className="error">{error}</p>}
          <button type="submit">Add Product</button>
        </div>
<<<<<<< HEAD
        <div>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="price">Price</label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(parseFloat(e.target.value))}
            required
          />
        </div>
        <div>
          <label htmlFor="photo">Photo</label>
          <input
            type="text"
            id="photo"
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
            required
          />
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit" className="submit">Add Product</button>
=======
>>>>>>> 615ceaf9d587a67e08c5612e6f29f20beab2abe6
      </form>
    </div>
  );
};

export default AddProduct;
