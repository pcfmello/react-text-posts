import React from "react";
import { Switch, Route } from "react-router-dom";
import List from "./List";
import Add from "./Add";

const Main = () => (
  <Switch>
    <Route path="/" exact={true} component={List} />
    <Route path="/add" component={Add} />
    {/* <Route path='*' component={ComponenteDePagina404} /> */}
  </Switch>
);

export default Main;
