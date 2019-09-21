import React from "react";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "../App";
import Landing from "./LandingPage/Landing";
import Registration from "./RegistrationPage/Registration";
import Login from "./LoginPage/Login";
import Home from "./HomePage/Home";

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/hello" component={App} />
        <Route path="/landing" component={Landing} />
        <Route path="/registration" component={Registration} />
        <Route path="/login" component={Login} />
        <Route path="/home" component={Home} />
      </Switch>
    </Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default Root;
