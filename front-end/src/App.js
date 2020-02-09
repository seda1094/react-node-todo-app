import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import logo from "./logo.svg";
import EditTodoComponent from "./all-todos-component/edit-todo-component/edit-todo-component";
import DetailsTodoComponent from "./all-todos-component/details-todo-component/details-todo-component";
import HomeComponent from "./home-component/home-component";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={HomeComponent} />
          <Route path="/edit" component={EditTodoComponent} />
          <Route path="/todo-detail" component={DetailsTodoComponent} />
          <Route component={Error} />
        </Switch>
      </Router>
    );
  }
}

export default App;
