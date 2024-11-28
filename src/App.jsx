import { useState } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import ErrorPage from "./components/ErrorPage";
import Success from "./components/Success";

function App() {
  return (
    <Router>
      <>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="Success">
            <Success />
          </Route>
          <Route path="ErrorPage">
            <ErrorPage />
          </Route>
        </Switch>
      </>
    </Router>
  );
}

export default App;
