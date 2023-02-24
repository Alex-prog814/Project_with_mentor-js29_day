import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useProducts } from '../../../contexts/ProductContextProvider';

const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  const { deleteProduct } = useProducts();

  return (
    <div>
      {item.id}. {item.name} {item.price}
      <button onClick={() => navigate(`/details/${item.id}`)}>Details</button>
      <button onClick={() => navigate(`/edit/${item.id}`)}>Edit</button>
      <button onClick={() => deleteProduct(item.id)}>Delete</button>
    </div>
  )
}

export default ProductCard