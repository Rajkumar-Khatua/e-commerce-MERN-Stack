// MobileFilters.js
import React, { useState } from "react";
import { GiCursedStar } from "react-icons/gi"; // Import the rating star icon
import "./MobileFilters.scss"; // Add your styling
import { CiFilter } from "react-icons/ci";
import { AiOutlineClear } from "react-icons/ai";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { MdFilterList } from "react-icons/md";
import { MdOutlineFilterListOff } from "react-icons/md";

const MobileFilters = () => {
  const [showFilters, setShowFilters] = useState(false);

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  return (
    <div className="mobile-filters">
      <button className="toggle-filters-button" onClick={toggleFilters}>
        {showFilters ? (
          <>
            Hide Filters <MdFilterList className="filter-icon" />
          </>
        ) : (
          <>
            Show Filters <MdOutlineFilterListOff className="filter-icon" />
          </>
        )}
      </button>
      {showFilters && (
        <div className="filters">
          <div className="filter-heading">
            <span className="filter-title">
              Filters <MdFilterList className="filter-icon" />
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
      )}
    </div>
  );
};

export default MobileFilters;
