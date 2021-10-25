import React from "react";
import { Route, Switch } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
import  "../../styles/layout.scss";
import HomePage from "../HomePage";
import SignUp from "../SignUp/SignUp";
import { Provider } from "react-redux";
import store from "../../store/store";
import Login from "../Login/Login";

const App = () => {
  return (
      <Provider  store={store}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/login" component={Login} />
        </Switch>
        </Provider>
  );
};

export default App;
