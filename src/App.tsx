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
        <Route exact={true} path="/" render={() => <Home />} />
        <Route path="/author" render={() => <Author />} />
        <Route path="/team" render={() => <Team />} />
        <Route path="/movie" render={() => <Movie />} />
      </Switch>
    </div>
  );

export default App;
