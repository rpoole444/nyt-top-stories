import "./App.css";
import { Route, Switch } from "react-router-dom";
import NewsFeed from "../NewsFeed/NewsFeed";
import ArticleDetails from "../ArticleDetails/ArticleDetails";

function App() {
  return (
    <main className="App">
      <Switch>
        <Route path={"/"} component={NewsFeed} />
        <Route
          path={"/article/:id"}
          render={({ match }) => <ArticleDetails id={match.params.id} />}
        />
      </Switch>
    </main>
  );
}

export default App;
