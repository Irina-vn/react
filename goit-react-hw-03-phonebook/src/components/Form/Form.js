import React, { Component } from "react";
import uuid from "react-uuid";

export default class Form extends Component {
  state = {
    name: "",
    number: "",
  };
  handlerChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handlerSubmit = (e) => {
    e.preventDefault();
    const { name, number } = this.state;
    const contact = {
      id: uuid(),
      name: name,
      number: number,
    };
    this.props.addContact(contact);

    this.setState({ name: "", number: "" });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.handlerSubmit}>
        <p>Name </p>
        <input
          type="text"
          value={name}
          onChange={this.handlerChange}
          name="name"
        />

        <p>Number </p>
        <input
          type="tel"
          value={number}
          onChange={this.handlerChange}
          name="number"
        />

        <button type="submit"> Add contact </button>
      </form>
    );
  }
}
