import React from "react";
import "./SearchBar.css";

const SearchBar = ({ onCategoryChange }) => {
  const handleCategoryChange = (e) => {
    onCategoryChange(e.target.value);
  };

  return (
    <section>
      <div>
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
