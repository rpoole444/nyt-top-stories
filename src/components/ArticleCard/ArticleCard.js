import React from "react";
import "./ArticleCard.css";
import { Link } from "react-router-dom";

const ArticleCard = (props) => {
  let imageUrl = "";
  let imageCaption = "";

  if (props.multimedia && props.multimedia.length > 0) {
    imageUrl = props.multimedia[0].url;
    imageCaption = props.multimedia[0].caption;
  }
  return (
    <Link to={`/article/${props.id}`}>
      <div className="article-card">
        <div className="card-image">
          {imageUrl && (
            <img className="card-image" src={imageUrl} alt={imageCaption} />
          )}
        </div>
        <h2 className="article-title">{props.title}</h2>
        <p className="article-section">Section: {props.section}</p>
        <p className="article-subsection">{props.subsection}</p>
      </div>
    </Link>
  );
};

export default ArticleCard;
