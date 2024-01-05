// SearchResult.js
import React from 'react';
import './SearchResult.scss';

const SearchResult = ({ results }) => {
  return (
    <div className="search-result">
      {results.map((result) => (
        <div key={result.id} className="result-item">
          {/* Display your search results here */}
          {result.name}
        </div>
      ))}
    </div>
  );
};

export default SearchResult;
