import React, { useState, useEffect } from "react";
import "./NewsFeed.css";
import { apiCalls } from "../apiCalls";
import SearchBar from "../SearchBar/SearchBar";
import Library from "../Library/Library";

const NewsFeed = () => {
  const [fetching, setFetch] = useState(false);
  const [articles, setArticles] = useState([]);
  const [category, setCategory] = useState("home");

  useEffect(() => {
    console.log(category);
    if (!fetching) {
      apiCalls.getArticles(category).then((data) => {
        setArticles(data.results);
        console.log("data", data);
        setFetch(true);
      });
    }
  }, [fetching, category]);
  console.log("Results: ", articles);

  const onCategoryChange = (newCategory) => {
    setCategory(newCategory);
    setFetch(false);
  };

  return (
    <section>
      <h2>NewsFeed</h2>
      <SearchBar onCategoryChange={onCategoryChange} />
      <Library articles={articles} />
    </section>
  );
};

export default NewsFeed;
