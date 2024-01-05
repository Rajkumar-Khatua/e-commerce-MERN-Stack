import React, { useState, useEffect } from "react";
import "./MobileFilters.scss";
import { CiFilter } from "react-icons/ci";
import { AiOutlineClear } from "react-icons/ai";
import { MdFilterList } from "react-icons/md";
import { MdOutlineFilterListOff } from "react-icons/md";

const getSortedBrandNames = (products) => {
  if (!products) {
    return [];
  }

  const brandNames = Array.from(
    new Set(products.map((product) => product.brand))
  );
  return brandNames.sort();
};

const getSortedColorNames = (products) => {
  if (!Array.isArray(products)) {
    return [];
  }

  const colorSet = new Set(products.flatMap((product) => product.color));
  return [...colorSet].sort();
};

const MobileFilters = ({
  handleSortChange,
  handleClearAllFilters,
  handleBrandChange,
  handleColorChange,
  selectedFilters,
  setFilteredProducts,
  handlePriceChange,
  products,
}) => {
  const [showFilters, setShowFilters] = useState(false);
  const brandOptions = getSortedBrandNames(products);
  const colorOptions = getSortedColorNames(products);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setShowFilters(window.innerWidth < 600);
  //   };

  //   window.addEventListener("resize", handleResize);

  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  const applyFilters = () => {
    let sortedProducts = [...products];

    // Sort by date
    if (selectedFilters.date === "latest") {
      sortedProducts.sort((a, b) =>
        b.date ? new Date(b.date) - new Date(a.date) : 0
      );
    } else if (selectedFilters.date === "oldest") {
      sortedProducts.sort((a, b) =>
        a.date ? new Date(a.date) - new Date(b.date) : 0
      );
    }

    // Apply other filters
    sortedProducts = sortedProducts
      .filter(
        (product) =>
          !selectedFilters.price ||
          (product.price && product.price <= selectedFilters.price)
      )
      .filter(
        (product) =>
          selectedFilters.brand.length === 0 ||
          (product.brand && selectedFilters.brand.includes(product.brand))
      )
      .filter(
        (product) =>
          selectedFilters.color.length === 0 ||
          (product.color && selectedFilters.color.includes(product.color))
      );

    setFilteredProducts(sortedProducts);
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
              Filters <CiFilter className="filter-icon" />
            </span>
            <span className="filter-clear" onClick={handleClearAllFilters}>
              Clear All
              <AiOutlineClear className="filter-clear-icon" />
            </span>
          </div>

          {/* filter price by range */}
          <div className="filter-by-price">
            <span className="filter-by-price-title">Filter by price range</span>
            <div className="filter-by-price-range">
              <input
                type="range"
                name="price"
                id="price"
                className="price-range-input"
                min={0}
                max={2000}
                value={selectedFilters.price}
                onChange={handlePriceChange}
              />
              <span>${selectedFilters.price}</span>
            </div>
          </div>
          {/* Sort by date */}
          <div className="filter-by-date">
            <span className="filter-by-date-title">Sort by date</span>
            <select
              value={selectedFilters.date}
              onChange={handleSortChange}
              className="date-sort-select"
            >
              <option value="latest" className="options-date">
                Latest
              </option>
              <option value="oldest" className="options-date">
                Oldest
              </option>
            </select>
          </div>

          {/* Filter by brand */}
          <div className="filter-by-brand">
            <span className="filter-by-brand-title">Filter by brand</span>
            <div className="filter-by-brand-list">
              {brandOptions.map((brandName) => (
                <div className="filter-by-brand-item" key={brandName}>
                  <input
                    type="checkbox"
                    name={brandName}
                    id={brandName}
                    onChange={() => handleBrandChange(brandName)}
                    checked={selectedFilters.brand.includes(brandName)}
                  />
                  <label htmlFor={brandName}>{brandName}</label>
                </div>
              ))}
            </div>
          </div>

          {/* Filter by color */}
          <div className="filter-by-color">
            <span className="filter-by-color-title">Filter by color</span>
            <div className="filter-by-color-list">
              {colorOptions.map((colorName) => (
                <div className="filter-by-color-item" key={colorName}>
                  <input
                    type="checkbox"
                    name={colorName}
                    id={colorName}
                    onChange={() => handleColorChange(colorName)}
                    checked={selectedFilters.color.includes(colorName)}
                  />
                  <label htmlFor={colorName}>{colorName}</label>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileFilters;
