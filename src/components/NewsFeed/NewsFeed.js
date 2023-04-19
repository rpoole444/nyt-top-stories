import React from "react";
import "./NewsFeed.css";
import SearchBar from "../SearchBar/SearchBar";
import Library from "../Library/Library";

const NewsFeed = ({
  onCategoryChange,
  articles,
  onSearchTermChange,
  searchTerm,
}) => {
  const filterArticles = () => {
    if (!searchTerm) {
      return articles;
    }
    return articles.filter((article) =>
      article.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const filteredArticles = filterArticles();

  return (
    <section>
      <h2>New York Times Top Stories</h2>
      <SearchBar
        onCategoryChange={onCategoryChange}
        onSearchTermChange={onSearchTermChange}
      />
      <Library articles={filteredArticles} />
    </section>
  );
};

export default NewsFeed;
