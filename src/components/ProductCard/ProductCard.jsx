import React from "react";
import "./ProductCard.scss"; 
import { Link } from "react-router-dom";
import { FaOpencart } from "react-icons/fa6";
import { BsInfoCircle } from "react-icons/bs";
import { useCart } from "../Cart/Cart";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);

    // console.log(product);
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-details">
        <h3 className="product-name">{product.name}</h3>
        <h2 className="product-price">$ {product.price}</h2>
        <p className="product-description">{product.description}</p>
        <p className="product-date">Date: {product.date}</p>
        <div className="actions">
          <button className="product-cart" onClick={handleAddToCart}>
            Add to Cart
            <FaOpencart className="cart-icon" />
          </button>
          <Link to={`/product/${product.id}`} className="product-details-btn">
            Details
            <BsInfoCircle className="details-icon" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
