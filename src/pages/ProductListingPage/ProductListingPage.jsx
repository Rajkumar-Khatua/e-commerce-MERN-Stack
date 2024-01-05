// ProductListingPage.js
import React, { useState } from 'react';
import ProductCard from './ProductCard';
import './ProductListingPage.scss';

const productsData = [/* ... your product data ... */];

const ProductListingPage = () => {
  const [products, setProducts] = useState(productsData.slice(0, 10));
  const [filters, setFilters] = useState({
    sortBy: 'name',
  });

  const handleSortByChange = (event) => {
    const sortByValue = event.target.value;
    setFilters((prevFilters) => ({ ...prevFilters, sortBy: sortByValue }));
    // Implement sorting logic based on sortByValue
  };

  const handleShowMore = () => {
    const newProductsToShow = productsData.slice(0, products.length + 10);
    setProducts(newProductsToShow);
  };

  return (
    <div className="product-listing-page">
      <div className="filters">
        <h2>Filters</h2>
        <label>
          Sort By:
          <select value={filters.sortBy} onChange={handleSortByChange}>
            <option value="name">Name</option>
            <option value="price">Price</option>
          </select>
        </label>
      </div>

      <div className="products">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
        {products.length < productsData.length && (
          <button onClick={handleShowMore}>Show More</button>
        )}
      </div>
    </div>
  );
};

export default ProductListingPage;
