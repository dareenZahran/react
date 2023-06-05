import React, { useState, useEffect, useRef ,useMemo} from 'react';
import './cssfile.css';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
  const navigate = useNavigate();
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

  const headers = useMemo(() => {
    const token = localStorage.getItem('token');
    return {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    };
  }, []);
  


  
  const handleSubmit = async (e) => {
    e.preventDefault();

    // const productData = {
    //   name,
    //   description,
    //   price,
    //   photo
    // };

  
      axios.post('http://localhost:8080/products', { name,description,price, photo })
      .then(response => 
        console.log(response)
    )
        
          .catch(error => {
          console.log(error)
      });

   
      navigate("/home");
    // try {
    //   const response = await fetch('http://localhost:8080/products', {name,description,price,photo}
      
    //   // {
    //   //   method: 'POST',
    //   //   headers: {
    //   //     'Content-Type': 'application/json'
    //   //   },
    //   //   body: JSON.stringify(productData)
    //   // }
    //   );

    //   if (response.ok) {
    //     console.log(response)
    //     setName(response.data.name);
    //     setDescription(response.data.description);
    //     setPrice(0);
    //     setPhoto("https://i.ibb.co/7pNNJbw/images-2.jpg");
    //     // setError('');
    //   } else {
    //     const data = await response.json();
    //     setError(data.message);
    //   }
    // } catch (error) {
    //   setError('An error occurred. Please try again.');
    // }
  };


  // if (localStorage.getItem('email') !== 'test@gmail.com') {
  //   return <p>Access Denied</p>;
  // }
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

        
        
        
        
      </form>
    </div>
  );
};

export default AddProduct;