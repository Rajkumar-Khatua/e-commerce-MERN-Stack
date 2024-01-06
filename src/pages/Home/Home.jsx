import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./home.scss";
import { Link } from "react-router-dom";

const Home = () => {
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const slidesData = [
    {
      image:
        "https://images.pexels.com/photos/887751/pexels-photo-887751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Superior Performance",
      description:
        "Experience lightning-fast speed and seamless multitasking with our latest mobile.",
      price: "$499.99",
      specialOffer: "Limited Time Special Offer",
    },
    {
      image:
        "https://images.pexels.com/photos/887751/pexels-photo-887751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Capture Every Moment",
      description:
        "Unleash your creativity with a high-quality camera that captures stunning photos and videos.",
      price: "$599.99",
      specialOffer: "Free Accessories Bundle with Purchase",
    },
    {
      image:
        "https://images.pexels.com/photos/887751/pexels-photo-887751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Sleek and Stylish Design",
      description:
        "Elevate your style with a mobile that combines cutting-edge technology with a sleek and modern design.",
      price: "$449.99",
      specialOffer: "Trade-in your old device and get an additional $50 off",
    },
  ];

  return (
    <div className="home">
      <section className="hero-section">
        <Slider {...carouselSettings} className="carousel">
          {slidesData.map((slide, index) => (
            <div
              key={index}
              className="carousel-item"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {console.log(slide.image)}
              <div className="carousel-content">
                <h1 className="hero-product-title">{slide.title}</h1>
                <p className="hero-dec"> {slide.description}</p>
                <div className="price-tag">
                  <span className="price">{slide.price}</span>
                  <span className="offer">{slide.specialOffer}</span>
                </div>
                <div className="buttons">
                  <Link to="/products" className="cta-button">
                    Shop Now
                  </Link>
                  <Link to="/products" className="secondary-button">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>
    </div>
  );
};

export default Home;
