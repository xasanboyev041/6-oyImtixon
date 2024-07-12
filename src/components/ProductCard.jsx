import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <Link to={`/product/${product.id}`}>View Details</Link>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
