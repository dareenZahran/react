import React from 'react';
import Card from '../PerfumeCard/card';
// import axios from 'axios';
import { useState,useEffect } from 'react';
const Home = () => {
  
  const [products, setProducts] = useState([]);
  // useEffect(() => {
  //   axios.get('http://localhost:8080/products')
  //     .then(response => {
  //       setProducts(response.data);
  //     })
  //     .catch(error => {
  //       console.error(error);
  //     });
  // }, []);
  useEffect(() => {
    fetch('http://localhost:8080/products/')
      .then((res) => res.json())
      .then((data) => {
        console.log('data', data);
        setProducts(data._embedded.productsList);
      })
      .catch((err) => console.log('err', err));
  }, []);


  return (
    <div className='home'>
    {products.map(product => (
      <Card key={product.id} product={product} />
    
    ))}
  </div>
  );
};

export default Home;

