import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import CityPage from "./city/CityPage";
import React from "react";
import Forecast from "./forecast/Forecast";

export default () => (
  <Router>
    <Switch>
      <Route exact path="/" component={CityPage} />
      <Route path="/city/:cityId" component={Forecast} />
    </Switch>
  </Router>
);
