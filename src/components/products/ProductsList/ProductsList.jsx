import React, { useEffect } from 'react';
import { useProducts } from '../../../contexts/ProductContextProvider';
import ProductCard from '../ProductCard/ProductCard';

const ProductsList = () =>  {
  const { products, getProducts } = useProducts();

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <h3>Products List</h3>
      {products.map(item => (
        <ProductCard key={item.id} item={item} />
      ))}
    </>
  )
}

export default ProductsList