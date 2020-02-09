import React from "react";

export default class DetailsTodoComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.location.state.data;
  }
  render() {
    return (
      <div className="container">
        <section className="details">
          <h1>"{this.state.title}"</h1>
          <p>{this.state.instruction}</p>
        </section>
      </div>
    );
  }
}
