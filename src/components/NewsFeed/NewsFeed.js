import React, { useState, useEffect } from "react";
import "./NewsFeed.css";
import { apiCalls } from "../apiCalls";

const NewsFeed = () => {
  const [fetching, setFetch] = useState(false);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    if (!fetching) {
      apiCalls.getArticles().then((data) => {
        console.log(data);
      });
      setFetch(true);
    }
  }, [fetching]);

  return (
    <section>
      <h2>NewsFeed</h2>
    </section>
  );
};

export default NewsFeed;
