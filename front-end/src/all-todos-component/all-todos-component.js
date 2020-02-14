import React from "react";
import ItemTodoComponent from "./item-todo-component/item-todo-component";
import { connect } from "react-redux";
import LoadingComponent from "../loading-component/loading-component";
import { fetchTodos } from "../store/actions/todo";

class AllTodosComponent extends React.Component {

  componentDidMount() {
    this.props.fetchTodos()
  }
  render() {
    return (
      <section className="tasks_section">
        {
          this.props.loading 
            ? <LoadingComponent />
            :
            <div className="tasks">
              {this.props.todos.map((data, index) => {
                return <ItemTodoComponent key={index} data={data} />;
              })}
            </div>
        }

        {/* <div className="tasks">
          {this.props.todos.map((data, index) => {
            return <ItemTodoComponent key={index} data={data} />;
          })}
        </div> */}
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todo.todos,
    loading: state.todo.loading
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchTodos: () => dispatch(fetchTodos())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllTodosComponent)