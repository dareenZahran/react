import React from 'react';
import Card from '../PerfumeCard/card';
// import axios from 'axios';
import { useState,useEffect } from 'react';
const Men = () => {
  
  const [products, setProducts] = useState([]);
 
  useEffect(() => {
    fetch('http://localhost:8080/filtering/category/1')
      .then((res) => res.json())
      .then((data) => {
        console.log('data', data);
        setProducts(data.products);
      })
      .catch((err) => console.log('err', err));
  }, []);


  return (
    <div className='home'>
    {products.map(product => (
      <Card key={product.id} product={product} />
      // if
    ))}
  </div>
  );
};

export default Men;