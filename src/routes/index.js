import React from "react";
import Home from "../page/Home";
import Layout from "../components/Layout";
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";

export default function Router() {
  return (
    <BrowserRouter>
      <Layout>
        <NavLink to="/">Todo</NavLink>
        <NavLink to="/done">Done</NavLink>
      </Layout>
      <Switch>
        <Route path="/" component={Home} exact={true}></Route>
        <Route path="/done" component={Home} exact={true}></Route>
      </Switch>
    </BrowserRouter>
  );
}
