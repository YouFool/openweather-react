import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import Forecast from "./pages/forecast/Forecast";
import CityPage from "./pages/city/CityPage";

export default () => (
  <Router>
    <Switch>
      <Route exact path="/" component={CityPage} />
      <Route path="/city/:cityId" component={Forecast} />
    </Switch>
  </Router>
);
