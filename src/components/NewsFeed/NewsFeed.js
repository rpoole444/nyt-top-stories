import React from "react";
import "./NewsFeed.css";
import SearchBar from "../SearchBar/SearchBar";
import Library from "../Library/Library";

const NewsFeed = ({ onCategoryChange, articles }) => {
  return (
    <section>
      <h2>NewsFeed</h2>
      <SearchBar onCategoryChange={onCategoryChange} />
      <Library articles={articles} />
    </section>
  );
};

export default NewsFeed;
