import React from "react";
import AllTodosComponent from "../all-todos-component/all-todos-component";
export default class HomeComponent extends React.Component {
  render() {
    return (
      <div className="container task_container">
        <AllTodosComponent></AllTodosComponent>
      </div>
    );
  }
}
