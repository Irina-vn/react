import React, { Component } from "react";

export default class Searchbox extends Component {
  state = {};

  handleInput = (e) => {
    this.setState({ value: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmit(this.state.value);
    this.setState({ value: "" });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleInput}
        />
        <button type="submit">Search</button>
      </form>
    );
  }
}
