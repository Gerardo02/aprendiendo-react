import React from "react";

import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";
import mainPage from "./pages/App2";
import secondPage from "./pages/second";
const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={mainPage} />
        <Route exact path="/captura" component={secondPage} />
      </Switch>
    </Router>
  );
};

export default App;
