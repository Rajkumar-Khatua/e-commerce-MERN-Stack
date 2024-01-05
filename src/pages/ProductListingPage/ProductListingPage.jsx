  import React, { useEffect, useState } from "react";
  import "./ProductListingPage.scss";
  import { GiCursedStar } from "react-icons/gi";
  import { Link } from "react-router-dom";
  import { CiFilter } from "react-icons/ci";
  import { AiOutlineClear } from "react-icons/ai";
  import ProductCard from "../../components/ProductCard/ProductCard";
  import data from "../../../data.json";
  import MobileFilters from "../../components/MobileFilters/MobileFilters";

  const ProductListingPage = () => {
    const [showFilters, setShowFilters] = useState(window.innerWidth < 767);

    const handleToggleFilters = () => {
      setShowFilters(!showFilters);
    };

    // Add an event listener to update the showFilters state on window resize
    useEffect(() => {
      const handleResize = () => {
        setShowFilters(window.innerWidth < 600);
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);

    return (
      <div className="ProductListingPage">
        {showFilters && (
          <button className="toggle-filters-button" onClick={handleToggleFilters}>
            Filters
          </button>
        )}

        {/* Mobile filters */}
        {showFilters && <MobileFilters />}

        <div className="left">
          <div className="filters">
            <div className="filter-heading">
              <span className="filter-title">
                Filters <CiFilter className="filter-icon" />
              </span>
              <span className="filter-clear">
                Clear All
                <AiOutlineClear className="filter-clear-icon" />
              </span>
            </div>

            {/* Filter by date*/}
            <div className="filter-by-date">
              <span className="filter-by-date-title">Filter by date</span>
              <div className="filter-by-date-list">
                <div className="filter-by-date-item">
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="">Last 24 hours</label>
                </div>
                <div className="filter-by-date-item">
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="">Last 7 days</label>
                </div>
                <div className="filter-by-date-item">
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="">Last 30 days</label>
                </div>
                <div className="filter-by-date-item">
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="">Last 90 days</label>
                </div>
              </div>
            </div>

            <div className="filter-by-price">
              <span className="filter-by-price-title">Filter by price</span>
              {/* filter price by range */}
              <div className="filter-by-price-range">
                <input type="range" name="" id="" className="price-range-input" />
              </div>
            </div>
            {/* filter by brand */}
            <div className="filter-by-brand">
              <span className="filter-by-brand-title">Filter by brand</span>
              <div className="filter-by-brand-list">
                <div className="filter-by-brand-item">
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="">Brand 1</label>
                </div>
                <div className="filter-by-brand-item">
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="">Brand 2</label>
                </div>
                <div className="filter-by-brand-item">
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="">Brand 3</label>
                </div>
                <div className="filter-by-brand-item">
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="">Brand 4</label>
                </div>
              </div>
            </div>

            {/* filter by category */}
            <div className="filter-by-category">
              <span className="filter-by-category-title">Filter by category</span>
              <div className="filter-by-category-list">
                <div className="filter-by-category-item">
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="">Category 1</label>
                </div>
                <div className="filter-by-category-item">
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="">Category 2</label>
                </div>
                <div className="filter-by-category-item">
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="">Category 3</label>
                </div>
                <div className="filter-by-category-item">
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="">Category 4</label>
                </div>
              </div>
            </div>

            {/* filter by color */}
            <div className="filter-by-color">
              <span className="filter-by-color-title">Filter by color</span>
              <div className="filter-by-color-list">
                <div className="filter-by-color-item">
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="">Color 1</label>
                </div>
                <div className="filter-by-color-item">
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="">Color 2</label>
                </div>
                <div className="filter-by-color-item">
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="">Color 3</label>
                </div>
                <div className="filter-by-color-item">
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="">Color 4</label>
                </div>
              </div>
            </div>

            {/* filter by rating */}
            <div className="filter-by-rating">
              <span className="filter-by-rating-title">Filter by rating</span>
              <div className="filter-by-rating-list">
                <div className="filter-by-rating-item">
                  <input type="checkbox" name="" id="" />
                  <GiCursedStar className="rating-icon" />
                </div>
                <div className="filter-by-rating-item">
                  <input type="checkbox" name="" id="" />
                  <GiCursedStar className="rating-icon" />
                  <GiCursedStar className="rating-icon" />
                </div>
                <div className="filter-by-rating-item">
                  <input type="checkbox" name="" id="" />
                  <GiCursedStar className="rating-icon" />
                  <GiCursedStar className="rating-icon" />
                  <GiCursedStar className="rating-icon" />
                </div>
                <div className="filter-by-rating-item">
                  <input type="checkbox" name="" id="" />
                  <GiCursedStar className="rating-icon" />
                  <GiCursedStar className="rating-icon" />
                  <GiCursedStar className="rating-icon" />
                  <GiCursedStar className="rating-icon" />
                </div>
                <div className="filter-by-rating-item">
                  <input type="checkbox" name="" id="" />
                  <GiCursedStar className="rating-icon" />
                  <GiCursedStar className="rating-icon" />
                  <GiCursedStar className="rating-icon" />
                  <GiCursedStar className="rating-icon" />
                  <GiCursedStar className="rating-icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="product-listing">
            {data.mobiles.map((product) => (
              <div
                key={product.id}
                to={`/product/${product.id}`}
                className="product-listing-item"
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  export default ProductListingPage;
