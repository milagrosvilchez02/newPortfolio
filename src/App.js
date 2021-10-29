import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import InterestsTab from "./components/InterestsTab";
import Resume from "./components/Resume";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <Header />
      <main className="container">
        <Switch>
          <Route path="/resume" component={Resume}></Route>
          <Route path="/interests" component={InterestsTab}></Route>
          <Route path="/" component={Home} exact></Route>
          <Redirect from="/newPortfolio/" exact to="/home" />
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
