import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import HomeComponent from "./home-component/home-component";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={HomeComponent} />
          <Route component={Error} />
        </Switch>
      </Router>
    );
  }
}

export default App;
