import React from "react";

export default class EditTodoComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.location.state.data
      }
    
      handleInputChange=(event)=> {
        event.preventDefault();
        this.setState({ 
            [event.target.name]: event.target.value
         })
      }
    
      handleSubmit=(event)=> {
        event.preventDefault();
        const data = this.state
        console.log(data)
        fetch('http://localhost:3333/tasks/edit', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
      }


  render() {
    console.log(this.props.location.state);
    console.log(this.state);


    return (  
    <div className="container">
        <section className="create_section">
        <form onSubmit={this.handleSubmit} action="/tasks/add" method="POST">
        <input
            type="hidden"
            name="id"
            value={this.state._id}
            onChange={this.handleInputChange}
          />
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.handleInputChange}
          />
          <br />
          <input
            type="text"
            name="instruction"
            onChange={this.handleInputChange}
            value={this.state.instruction}

          />
          <br />
          <input type="submit" value="submit" className="button" />
        </form>
      </section>
      </div>
    );
  }
}
