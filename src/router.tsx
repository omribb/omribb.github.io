import React from "react";
import { Route, Switch } from "react-router-dom";
import { About } from "./pages/about";
import { Home } from "./pages/home";

export const Router: React.FC = () => {
  return (
    <Switch>
      <Route exact={true} path={"/"}>
        <Home />
      </Route>
      <Route exact={true} path={"/about"}>
        <About />
      </Route>
    </Switch>
  );
};
