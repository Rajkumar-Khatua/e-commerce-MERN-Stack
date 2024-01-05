import React from "react";
import { useParams } from "react-router-dom";
import data from "../../../data.json";
import {
  FaPalette,
  FaHdd,
  FaCamera,
  FaDesktop,
  FaBatteryFull,
} from "react-icons/fa";
import "./ProductDetailsPage.scss";
import { GiProcessor } from "react-icons/gi";
import { TiVendorAndroid } from "react-icons/ti";
import { TbRulerMeasure } from "react-icons/tb";
import { LiaWeightSolid } from "react-icons/lia";
import { GiFeather } from "react-icons/gi";
import { MdOutlineHomeWork } from "react-icons/md";
import { CiCalendarDate } from "react-icons/ci";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const product = data.mobiles.find((item) => item.id === parseInt(id));

  if (!product) {
    return <p>Product not found</p>;
  }

  const {
    name,
    brand,
    description,
    price,
    color,
    storage,
    camera,
    display,
    battery,
    processor,
    operating_system,
    connectivity,
    dimensions,
    weight,
    features,
    manufacturer,
    ratings,
    image,
    date,
  } = product;

  return (
    <div className="product-details-container">
      <div className="product-details-single-details">
        <div className="product-image-single-details">
          <img src={image} alt={name} className="product-img-single-details" />
        </div>
        <div className="product-info-single-details">
          <h2 className="product-title-single-details">{name}</h2>
          <p className="product-brand-single-details">{brand}</p>
          <p className="product-description-single-details">{description}</p>
          <p className="product-price-single-details">${price}</p>

          <div className="product-details-list-single-details">
            {renderDetail("Color", color, <FaPalette />)}
            {renderDetail("Storage", storage, <FaHdd />)}
            {renderDetail("Camera", camera, <FaCamera />)}
            {renderDetail("Display", display, <FaDesktop />)}
            {renderDetail("Battery", battery, <FaBatteryFull />)}
            {renderDetail("Processor", processor, <GiProcessor />)}
            {renderDetail(
              "Operating System",
              operating_system,
              <TiVendorAndroid />
            )}
            {renderDetail("Connectivity", connectivity, <FaHdd />)}
            {renderDetail("Dimensions", dimensions, <TbRulerMeasure />)}
            {renderDetail("Weight", weight, <LiaWeightSolid />)}
            {renderDetail("Features", features.join(", "), <GiFeather />)}
            {renderDetail("Manufacturer", manufacturer.name, <MdOutlineHomeWork />)}
            {renderDetail("Country", manufacturer.country, <MdOutlineHomeWork />)}
            {renderDetail("Website", manufacturer.website, <MdOutlineHomeWork />)}
            {renderDetail("Date", date, <CiCalendarDate />)}
          </div>
          <div className="add-to-cart-single-details">
            <button className="product-btn-single-details">Add to Cart</button>
            <div className="buy-now-single-details">
              <button className="product-btn-single-details">Buy Now</button>
            </div>
          </div>
          <div className="product-ratings-single-details">
            <p className="average-rating-single-details">
              Average Rating: {ratings ? ratings.average || 0 : 0}
            </p>
            <p className="total-reviews-single-details">
              Total Reviews: {ratings ? ratings.count || 0 : 0}
            </p>
            <ul className="reviews-list-single-details">
              {ratings && ratings.reviews
                ? ratings.reviews.map((review, index) => (
                    <li key={index} className="review-item-single-details">
                      <p className="user-single-details">User: {review.user}</p>
                      <p className="rating-single-details">
                        Rating: {review.rating}
                      </p>
                      <p className="comment-single-details">
                        Comment: {review.comment}
                      </p>
                    </li>
                  ))
                : null}
            </ul>
          </div>

         
        </div>
      </div>
    </div>
  );
};

// Helper function to render details with icons
const renderDetail = (label, value, icon) => (
  <div className="detail-single-details">
    <span className="detail-icon-single-details">{icon}</span>
    <span className="detail-label-single-details">{label}:</span>
    <span className="detail-value-single-details">{value}</span>
  </div>
);

export default ProductDetailsPage;
