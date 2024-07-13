import React from "react";

const ProductItem = ({ product }) => {
  return (
    <div className="product-item">
      <img src={product.imageUrl} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductItem;
