import React from "react";
import "./ArticleDetails.css";

const ArticleDetails = (props) => {
  const { articles, id } = props;
  console.log({ id, articles });
  const selectedArticle = articles?.find((el, index) => index === Number(id));

  console.log(selectedArticle);
  return (
    <section>
      <h2>ArticleDetails</h2>
    </section>
  );
};

export default ArticleDetails;
