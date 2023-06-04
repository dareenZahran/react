import React from 'react';
import Card from '../PerfumeCard/card';
import { useState, useEffect } from 'react';

const Women = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/filtering/category/2')
      .then((res) => res.json())
      .then((data) => {
        console.log('data', data);
        setProducts(data.products);
      })
      .catch((err) => console.log('err', err));
  }, []);

  return (
    <div className="home">
      {products.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Women;
