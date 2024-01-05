// ProductCard.js
import React from "react";
import "./ProductCard.scss"; // Add your styling
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-details">
        <h3 className="product-name">{product.name}</h3>
        <h2 className="product-price">INR {product.price}</h2>
        <p className="product-description">{product.description}</p>
        <button className="product-cart">Add to Cart</button>
        <Link to={`/product/${product.id}`}>Details</Link>
      </div>
    </div>
  );
};

export default ProductCard;
