import React, { useEffect } from "react";
import "./ArticleDetails.css";
import { useHistory } from "react-router-dom";

const ArticleDetails = (props) => {
  const { articles, id } = props;

  const selectedArticle = articles?.find((el, index) => index === Number(id));
  console.log(selectedArticle);

  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  if (!selectedArticle) {
    return (
      <div>
        <h2>Article Not Found</h2>
        <button onClick={() => goBack()}>Go Back</button>
      </div>
    );
  }

  return (
    <>
      <section className="article-container">
        <h2>{selectedArticle.title}</h2>
        <p>Category: {selectedArticle.section}</p>
        <img
          src={selectedArticle.multimedia[0]?.url}
          alt={selectedArticle.multimedia[0].caption}
        />
        <p>Photo Copyright by: {selectedArticle.multimedia[0].copyright}</p>
        <p>{selectedArticle.abstract}</p>
        <p>
          Visit the NYT's Article:{" "}
          <a href={selectedArticle.short_url} target="_blank">
            HERE
          </a>
        </p>
        <p>Written By: {selectedArticle.byLine}</p>
      </section>
      <button onClick={() => goBack()}>Go Back</button>
    </>
  );
};

export default ArticleDetails;
