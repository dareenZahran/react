import React from 'react';
import Card from '../PerfumeCard/card';

import { useState,useEffect,useMemo } from 'react';
import AboutUs from '../AboutUs/AboutUs';
const Home = () => {
  // <headers/>
  
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


  const headers = useMemo(() => {
    const token = localStorage.getItem('token');
    return {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    };
  }, []);

  useEffect(() => {
    fetch('http://localhost:8080/products',{headers})
      .then((res) => res.json())
      .then((data) => {
        console.log('data', data);
        setProducts(data._embedded.productsList);
      })
      .catch((err) => console.log('err', err));
  }, [headers]);


  return (
    <div className='home'>
    {products.map(product => (
      <Card key={product.id} product={product} />
    
    ))}
  </div>
  );
  // <AboutUs/>
};

export default Home;