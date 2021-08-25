import React from "react";
import { Route, Switch } from "react-router";
import HomePage from "../HomePage";
import SignUp from "../SignUp/SignUp";

const App = () => {
  return (
    <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/signup" component={SignUp} />
        </Switch>
    </div>
  );
};

export default App;
