import React from 'react';

const ProductCard = ({ item }) => {
  return (
    <div>
      {item.id}. {item.name} {item.price}
      <button>Details</button>
      <button>Edit</button>
      <button>Delete</button>
    </div>
  )
}

export default ProductCard