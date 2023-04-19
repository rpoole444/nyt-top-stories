import React from "react";
import "./SearchBar.css";

const SearchBar = ({ onCategoryChange, onSearchTermChange, searchTerm }) => {
  const newsOptions = [
    "arts",
    "automobiles",
    "books",
    "business",
    "fashion",
    "food",
    "health",
    "home",
    "insider",
    "magazine",
    "movies",
    "nyregion",
    "obituaries",
    "opinion",
    "politics",
    "realestate",
    "science",
    "sports",
    "sundayreview",
    "technology",
    "theater",
    "t-magazine",
    "travel",
    "upshot",
    "us",
    "world",
  ];

  const handleCategoryChange = (e) => {
    onCategoryChange(e.target.value);
  };

  const handleSearchInputChange = (e) => {
    onSearchTermChange(e.target.value);
  };

  return (
    <section>
      <div className="input-container">
        <label htmlFor="searchKeyword">
          Search Keyword:
          <input
            className="search-input"
            type="text"
            value={searchTerm}
            placeholder="search for keyword"
            onChange={(e) => handleSearchInputChange(e)}
          ></input>
        </label>
        <label htmlFor="category">
          Category:
          <select
            className="category-input"
            onChange={(e) => handleCategoryChange(e)}
          >
            {newsOptions.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </label>
      </div>
    </section>
  );
};

export default SearchBar;
