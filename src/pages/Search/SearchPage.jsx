import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./searchPage.scss";
import data from "../../../data.json";

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    // Check if the search query is empty
    if (searchQuery.trim() === "") {
      // Clear the search results if the query is empty
      setSearchResults([]);
      return;
    }

    // Perform the search based on product names and set searchResults state
    const results = data.mobiles.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(results);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="search-page">
      <div className="search-container">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Enter product name"
          className="search-input"
          onKeyPress={handleKeyPress}
        />
        <button onClick={handleSearch} className="search-btn">
          Search
        </button>
      </div>
      {searchResults.length > 0 && (
        <div className="results-container">
          {/* Display search results with details and links */}
          {searchResults.map((result) => (
            <Link
              key={result.id}
              to={`/product/${result.id}`}
              className="result-item"
            >
              <div className="result-img-container">
                <img
                  src={result.image}
                  alt={result.name}
                  className="result-img"
                />
              </div>
              <div className="result-details">
                <h3 className="result-product-name">{result.name}</h3>
                <p className="result-product-desc">{result.description}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchPage;
