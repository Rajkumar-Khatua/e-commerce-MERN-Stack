// SearchPage.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./searchPage.scss";
import data from "../../../data.json";

// Assume productsData is an array of products with 'id', 'name', and 'description' properties
const productsData = [
  {
    id: 1,
    name: "Samsung Galaxy",
    description: "Powerful smartphone with great features.",
    image:
      "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81pmO0iVNhL._SL1500_.jpg",
  },
  { id: 2, name: "Readme", description: "Affordable and feature-packed." },
  {
    id: 3,
    name: "Vivo",
    description: "Innovative technology for mobile lovers.",
    image:
      "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/618RKy-9R7L._SL1200_.jpg",
  },
  {
    id: 4,
    name: "Oppo",
    description: "Capture the best moments with Oppo cameras.",
    image:
      "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/8104evx11QL._SL1500_.jpg",
  },
  {
    id: 5,
    name: "Apple",
    description: "Elegance meets performance.",
    image:
      "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71657TiFeHL._SL1500_.jpg",
  },
  {
    id: 6,
    name: "OnePlus",
    description: "Never settle for less.",
    image:
      "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61CTkx2jIsL._SL1500_.jpg",
  },
  {
    id: 7,
    name: "Realme",
    description: "Youthful and trendy mobile devices.",
    image:
      "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61B2t2Ul9zL._SL1440_.jpg",
  },
];

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
