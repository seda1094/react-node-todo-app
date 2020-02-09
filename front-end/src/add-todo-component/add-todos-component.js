import React from "react";

export default class DetailsTodoComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      instruction: ""
    }
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
    fetch("http://localhost:3333/tasks/add", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: {
        data: JSON.stringify(data)
      }
    });
  }

  render() {
    return (
      <section className="create_section">
        <form onSubmit={this.handleSubmit} action="/tasks/add" method="POST">
          <input
            type="text"
            name="title"
            placeholder="your title"
            onChange={this.handleInputChange}
          />
          <br />
          <input
            type="text"
            name="instruction"
            placeholder="your instruction"
            onChange={this.handleInputChange}
          />
          <br />
            <input type="submit" value="submit" className="button" />
        </form>
      </section>
    );
  }
}
