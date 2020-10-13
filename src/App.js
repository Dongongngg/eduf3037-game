import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//pages
import Main_menu from "./pages/Main_menu";
import Test from "./pages/Test";
import Ending from "./pages/Ending";
import NotFoundPage from "./pages/NotFound";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/test" component={Test}></Route>
        <Route path="/" exact component={Main_menu}></Route>
        <Route path="/ending/:result" component={Ending}></Route>
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
}

export default App;
