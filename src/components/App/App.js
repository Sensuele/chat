import React from "react";
import { Route, Switch } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
import  "../../styles/layout.scss";
import HomePage from "../HomePage";
import SignUp from "../SignUp/SignUp";
import { Provider } from "react-redux";
import store from "../../store/store";

const App = () => {
  return (
    <div>
      <Provider  store={store}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/signup" component={SignUp} />
        </Switch>
        </Provider>
    </div>
  );
};

export default App;
