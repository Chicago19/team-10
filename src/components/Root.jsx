import React from "react";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "../App";
import Landing from "./LandingPage/Landing";
import Registration from "./RegistrationPage/Registration";

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/hello" component={App} />
        <Route path="/landing" component={Landing} />
        <Route path="/registration" component={Registration} />
      </Switch>
    </Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default Root;
