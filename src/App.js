import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
//pages
import Main_menu from "./pages/Main_menu";
import Test from "./pages/Test";
import Ending from "./pages/Ending";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/test">
          <Test />
        </Route>
        <Route path="/">
          <Main_menu />
        </Route>
        <Route path="/ending">
          <Main_menu />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
