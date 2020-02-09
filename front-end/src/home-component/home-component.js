import React from 'react'
import AddTodoComponent from '../add-todo-component/add-todos-component'
import AllTodosComponent from '../all-todos-component/all-todos-component'
export default class HomeComponent extends React.Component {
    render() {
        return (
            <div className="container task_container">
                <AddTodoComponent></AddTodoComponent>
                <AllTodosComponent></AllTodosComponent>
            </div>
        )
    }
}

