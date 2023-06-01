import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './details.css';

const Details = () => {
  const params = useParams();
  const { id } = params;

  const [product, setProduct] = useState({});


  useEffect(() => {
    fetch(`http://localhost:8080/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log('data', data);
        setProduct(data);
      })
      .catch((err) => console.log('err', err));
  }, []);

/** "id": 1,
        "name": "BALENCIAGA",
        "description": "BALENCIAGA",
        "price": 79.99,
        "photo": "https://i.ibb.co/yyrQy98/download.jpg", */

  // return (
   
  //   <div>
  //     <h1>Product Details</h1>

  //     <div className="product-image">
  //         <img src={product.photo} alt={product.name} />
  //         </div>
  //         <div>
  //           <h3>{product.name}</h3>
  //           <p>{product.description}</p>
  //            <p>Price: {product.price}</p>
  //         </div>
     

      
  //   </div>
  // );
  return (
    <div className="container">
      {/* <h1 className='productDetails'>Product Details</h1> */}
  
      <div className="product-image">
        <img src={product.photo} alt={product.name} />
      </div>
  
      <div>
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <p className="product-price">Price: {product.price}</p>
      </div>
    </div>
  );
  
};

export default Details;