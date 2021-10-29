import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Home from "./components/Home";
import "./App.css";
import Header from "./components/Header";
import InterestsTab from "./components/InterestsTab";

function App() {
  return (
    <React.Fragment>
      <Header />
      <main className="container">
        <Switch>
          <Route path="/interests" component={InterestsTab}></Route>
          <Route path="/home" component={Home}></Route>
          <Redirect from="/" exact to="/home" />
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
