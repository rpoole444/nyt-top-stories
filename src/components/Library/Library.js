import React from "react";
import "./Library.css";
import ArticleCard from "../ArticleCard/ArticleCard";

const Library = ({ articles }) => {
  const articleCards = articles?.map((el, index) => (
    <ArticleCard key={index} id={index} {...el} />
  ));

  return (
    <>
      <section className="articles-container">{articleCards}</section>
    </>
  );
};

export default Library;
