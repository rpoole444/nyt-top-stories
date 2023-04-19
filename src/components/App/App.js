import React, { useState, useEffect } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import NewsFeed from "../NewsFeed/NewsFeed";
import ArticleDetails from "../ArticleDetails/ArticleDetails";
import { apiCalls } from "../apiCalls";

function App() {
  const [fetching, setFetch] = useState(false);
  const [articles, setArticles] = useState(() => {
    const storedArticles = localStorage.getItem("articles");
    return storedArticles && storedArticles !== "undefined"
      ? JSON.parse(storedArticles)
      : [];
  });

  const [category, setCategory] = useState("home");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (!fetching) {
      apiCalls.getArticles(category).then((data) => {
        setArticles(data.results);
        setFetch(true);
      });
    }
  }, [fetching, category]);

  useEffect(() => {
    localStorage.setItem("articles", JSON.stringify(articles));
  }, [articles]);

  const onSearchTermChange = (newSearchTerm) => {
    setSearchTerm(newSearchTerm);
  };

  const onCategoryChange = (newCategory) => {
    setCategory(newCategory);
    setFetch(false);
  };

  return (
    <main className="App">
      <Switch>
        <Route
          exact
          path={"/"}
          render={() => {
            return (
              <NewsFeed
                articles={articles}
                onCategoryChange={onCategoryChange}
                onSearchTermChange={onSearchTermChange}
                searchTerm={searchTerm}
              />
            );
          }}
        />
        <Route
          path={"/article/:id"}
          render={({ match }) => (
            <ArticleDetails id={match.params.id} articles={articles} />
          )}
        />
      </Switch>
    </main>
  );
}

export default App;
