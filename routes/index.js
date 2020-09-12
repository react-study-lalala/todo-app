import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/about">about</Route>
        <Route path="/users">users</Route>
        <Route path="/">home</Route>
      </Switch>
    </BrowserRouter>
  );
}
