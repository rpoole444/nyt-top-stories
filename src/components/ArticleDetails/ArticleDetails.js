import React from "react";
import "./ArticleDetails.css";
import { useHistory } from "react-router-dom";

const ArticleDetails = (props) => {
  const { articles, id } = props;
  console.log({ id, articles });
  const selectedArticle = articles?.find((el, index) => index === Number(id));

  console.log(selectedArticle);
  const history = useHistory();
  const goBack = () => {
    history.goBack();
  };
  return (
    <>
      <section>
        <h2>{selectedArticle.title}</h2>
        <p>Category: {selectedArticle.section}</p>
        <img
          src={selectedArticle.multimedia[0]?.url}
          alt={selectedArticle.subsection}
        />
        <p>Photo Copyright by: {selectedArticle.multimedia[0].copyright}</p>
        <p>{selectedArticle.multimedia[0].caption}</p>
        <p>{selectedArticle.abstract}</p>
        <p>Written By: {selectedArticle.byLine}</p>
      </section>
      <button onClick={() => goBack()}>Go Back</button>
    </>
  );
};

export default ArticleDetails;
