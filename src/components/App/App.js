import React, { useState, useEffect } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import NewsFeed from "../NewsFeed/NewsFeed";
import ArticleDetails from "../ArticleDetails/ArticleDetails";
import { apiCalls } from "../apiCalls";

function App() {
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
