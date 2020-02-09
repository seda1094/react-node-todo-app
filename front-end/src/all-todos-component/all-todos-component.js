import React from "react";
import ItemTodoComponent from "./item-todo-component/item-todo-component";

export default class AllTodosComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:3333/tasks")
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ data: data });
        console.log(this.state);
      });
  }
  render() {
    return (
      <section className="tasks_section">
        <div className="tasks">
          {this.state.data.map((data, index) => {
            return <ItemTodoComponent key={index} data={data} />;
          })}
        </div>
      </section>
    );
  }
}
