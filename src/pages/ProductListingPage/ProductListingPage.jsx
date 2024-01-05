import React, { useEffect, useState } from "react";
import "./ProductListingPage.scss";
import { GiCursedStar } from "react-icons/gi";
import { CiFilter } from "react-icons/ci";
import { AiOutlineClear } from "react-icons/ai";
import ProductCard from "../../components/ProductCard/ProductCard";
import data from "../../../data.json";
import MobileFilters from "../../components/MobileFilters/MobileFilters";

const ProductListingPage = () => {
  const [showFilters, setShowFilters] = useState(window.innerWidth < 767);
  const [filteredProducts, setFilteredProducts] = useState(data.mobiles);
  const [selectedDateFilters, setSelectedDateFilters] = useState([]);

  const [selectedFilters, setSelectedFilters] = useState({
    date: "latest",
    price: 0,
    brand: [],
    category: [],
    color: [],
    rating: [],
  });

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

  useEffect(() => {
    const applyFilters = () => {
      let sortedProducts = [...data.mobiles];

      // Sort by date
      if (selectedFilters.date === "latest") {
        sortedProducts.sort((a, b) => new Date(b.date) - new Date(a.date));
      } else if (selectedFilters.date === "oldest") {
        sortedProducts.sort((a, b) => new Date(a.date) - new Date(b.date));
      }

      // Apply other filters
      sortedProducts = sortedProducts
        .filter(
          (product) =>
            selectedFilters.price === 0 ||
            product.price <= selectedFilters.price
        )
        .filter(
          (product) =>
            selectedFilters.brand.length === 0 ||
            selectedFilters.brand.includes(product.brand)
        )
        .filter(
          (product) =>
            selectedFilters.category.length === 0 ||
            selectedFilters.category.includes(product.category)
        )
        .filter(
          (product) =>
            selectedFilters.color.length === 0 ||
            selectedFilters.color.includes(product.color)
        )
        .filter(
          (product) =>
            selectedFilters.rating.length === 0 ||
            selectedFilters.rating.includes(product.ratings.average)
        );

      setFilteredProducts(sortedProducts);
    };

    applyFilters();
  }, [selectedFilters]);

  const handleClearAllFilters = () => {
    setSelectedFilters({
      date: "latest",
      price: 0,
      brand: [],
      category: [],
      color: [],
      rating: [],
    });
    setSelectedDateFilters([]);
  };

  const handlePriceChange = (e) => {
    setSelectedFilters({
      ...selectedFilters,
      price: parseInt(e.target.value),
    });
  };

  const handleSortChange = (e) => {
    setSelectedFilters({
      ...selectedFilters,
      date: e.target.value,
    });
  };

  const isDateInRange = (productDate, filter) => {
    const productDateTime = new Date(productDate).getTime();
    const filterDateTime = new Date(filter).getTime();

    // You may need to adjust this logic based on your requirements
    // This example considers the last 24 hours
    return productDateTime > filterDateTime - 24 * 60 * 60 * 1000;
  };

  const getSortedBrandNames = (products) => {
    const brandNames = Array.from(
      new Set(products.map((product) => product.brand))
    );
    return brandNames.sort();
  };

  const sortedBrandNames = getSortedBrandNames(data.mobiles);

  // Add handleBrandChange function
  const handleBrandChange = (brandName) => {
    const updatedBrandFilters = selectedFilters.brand.includes(brandName)
      ? selectedFilters.brand.filter((brand) => brand !== brandName)
      : [...selectedFilters.brand, brandName];

    setSelectedFilters({
      ...selectedFilters,
      brand: updatedBrandFilters,
    });
  };

  // Add handleColorChange function
  const handleColorChange = (colorName) => {
    const updatedColorFilters = selectedFilters.color.includes(colorName)
      ? selectedFilters.color.filter((color) => color !== colorName)
      : [...selectedFilters.color, colorName];

    setSelectedFilters({
      ...selectedFilters,
      color: updatedColorFilters,
    });
  };

  return (
    <div className="ProductListingPage">
      {/* Mobile filters */}
      {showFilters && (
        <MobileFilters
          handleSortChange={handleSortChange}
          handleClearAllFilters={handleClearAllFilters}
          handleBrandChange={handleBrandChange}
          handleColorChange={handleColorChange}
          selectedFilters={selectedFilters}
          setFilteredProducts={setFilteredProducts}
          products={data.mobiles}
        />
      )}

      <div className="left">
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

          <div className="filter-by-price">
            <span className="filter-by-price-title">Filter by price</span>
            {/* filter price by range */}
            <div className="filter-by-price-range">
              <input
                type="range"
                name=""
                id=""
                className="price-range-input"
                min={0}
                max={2000}
                value={selectedFilters.price}
                onChange={handlePriceChange}
              />
              <span>${selectedFilters.price}</span>
            </div>
          </div>
          {/* filter by brand */}
          <div className="filter-by-brand">
            <span className="filter-by-brand-title">Filter by brand</span>
            <div className="filter-by-brand-list">
              {sortedBrandNames.map((brandName) => (
                <div className="filter-by-brand-item" key={brandName}>
                  <input
                    type="checkbox"
                    name={brandName}
                    id={brandName}
                    // Add an onChange handler to handle brand selection
                    onChange={() => handleBrandChange(brandName)}
                    checked={selectedFilters.brand.includes(brandName)}
                  />
                  <label htmlFor={brandName}>{brandName}</label>
                </div>
              ))}
            </div>
          </div>

          {/* filter by color */}
          <div className="filter-by-color">
            <span className="filter-by-color-title">Filter by color</span>
            <div className="filter-by-color-list">
              {getSortedColorNames(data.mobiles).map((colorName) => (
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
          {filteredProducts.map((product) => (
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

// Helper function to get sorted color names
const getSortedColorNames = (products) => {
  const colorSet = new Set(products.flatMap((product) => product.color));
  return [...colorSet].sort();
};
