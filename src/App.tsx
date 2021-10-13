import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../src/components/Pages/Home/Home";
import Author from "../src/components/Pages/Author/Author";
import Navigation from "./components/UI/Nav/Navigation";
import Movie from "./components/Pages/Movie/Movie";
import Team from "./components/Pages/Team/Team";

const App: React.FC = () => (
  <div>
      <Navigation />

      <Switch>
        <Route path="/" exact={true} render={() => <Home />} />
        <Route path="/author" exact={true} render={() => <Author />} />
        <Route path="/team" exact={true} render={() => <Team />} />
        <Route path="/movie" exact={true} render={() => <Movie />} />
      </Switch>
    </div>
  );

export default App;
