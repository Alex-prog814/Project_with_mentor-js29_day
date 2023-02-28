import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useProducts } from '../../../contexts/ProductContextProvider';
import { useCart } from '../../../contexts/CartContextProvider';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import IconButton from '@mui/material/IconButton';

const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  const { deleteProduct } = useProducts();
  const { addProductToCart, checkProductInCart } = useCart();

  return (
    <div>
      {item.id}. {item.name} {item.price}
      <button onClick={() => navigate(`/details/${item.id}`)}>Details</button>
      <button onClick={() => navigate(`/edit/${item.id}`)}>Edit</button>
      <button onClick={() => deleteProduct(item.id)}>Delete</button>

      <IconButton size="small" onClick={() => addProductToCart(item)}>
        <AddShoppingCartOutlinedIcon color={checkProductInCart(item.id) ? "primary" : ""} />
      </IconButton>
    </div>
  )
}

export default ProductCard