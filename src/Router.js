import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainPage from "./components/MainPage";
import Result from "./components/Result";
const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route exact path="/result" component={Result} />
    </Switch>
  </BrowserRouter>
);

export default Router;
