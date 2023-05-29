import React from 'react';
import Card from '../PerfumeCard/card';
import axios from 'axios';
import { useState,useEffect } from 'react';
const Home = () => {
  
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:8080/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);
  return (
    <div>
    {products.map(product => (
      <Card key={product.id} product={product} />
    ))}
  </div>
  );
};

export default Home;
