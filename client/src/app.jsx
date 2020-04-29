import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./pages/landing/LandingPage";
import SuccessPage from "./pages/success/SuccessPage";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/success" component={SuccessPage} />
      </Switch>
    </Router>
  );
}
