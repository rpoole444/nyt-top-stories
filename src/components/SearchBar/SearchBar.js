import React from "react";
import "./SearchBar.css";

const SearchBar = ({ onCategoryChange, onSearchTermChange, searchTerm }) => {
  const handleCategoryChange = (e) => {
    onCategoryChange(e.target.value);
  };

  const handleSearchInputChange = (e) => {
    onSearchTermChange(e.target.value);
  };

  return (
    <section>
      <div>
        <input
          type="text"
          value={searchTerm}
          placeholder="search for keyword"
          onChange={(e) => handleSearchInputChange(e)}
        ></input>
        <select onChange={(e) => handleCategoryChange(e)}>
          <option value="home">Home</option>
          <option value="arts">Arts</option>
          <option value="science">Science</option>
          <option value="us">US</option>
          <option value="world">World</option>
        </select>
      </div>
    </section>
  );
};

export default SearchBar;
