import "regenerator-runtime/runtime";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Menu } from "./components";
import { Videos, Styleguide } from "./pages";

const App = () => (
  <Router>
    <main>
      <Switch>
        <Route path="/styleguide">
          <Styleguide />
        </Route>
        <Route path="/videos">
          <Videos />
        </Route>
      </Switch>
    </main>

    <Menu />
  </Router>
);

ReactDOM.render(<App />, document.getElementById("root"));
