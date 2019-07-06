import React, { Component } from "react";

class LinkCreate extends Component {
  handleSubmit(event) {
    event.preventDefault();

    console.log(this.refs.link.value);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <div className="form-group">
          <label>Link to shorten</label>
          <input type="text" />
        </div>
      </form>
    );
  }
}
