import React from "react";
import "./Library.css";
import ArticleCard from "../ArticleCard/ArticleCard";

const Library = ({ articles }) => {
  const articleCards = articles?.map((el) => (
    <ArticleCard key={el.url} {...el} />
  ));

  const determineRender = () => {
    return articleCards.length > 0 ? (
      articleCards
    ) : (
      <p>No Articles Available</p>
    );
  };

  return (
    <>
      <h2>Library</h2>
      <section className="articles-container">
        {articles && determineRender()}
      </section>
    </>
  );
};

export default Library;
