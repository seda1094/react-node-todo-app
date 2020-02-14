import React from "react";
import AddTodoComponent from "../add-todo-component/add-todos-component";
import AllTodosComponent from "../all-todos-component/all-todos-component";
export default class LoadingComponent extends React.Component {
  render() {
    return (
      <div className="loading">
        <img src="https://i.gifer.com/DAf.gif" alt=""/>
      </div>
    );
  }
}
