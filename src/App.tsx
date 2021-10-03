import React from "react";
import Navigation from "./components/Navigation";
import { Switch, Route } from "react-router-dom";
import Home from "./../src/components/Pages/Home/Home";
import Author from "./../src/components/Pages/Author/Author";

const App: React.FC = () => {
  return (
    <div>
      <Navigation />

      <Switch>
        <Route path="/" exact render={() => <Home />} />
        <Route path="/author" exact render={() => <Author />} />
        {/* <Route path='movie' exact render={() => <Movie />}> */}
      </Switch>
    </div>
  );
};

export default App;
