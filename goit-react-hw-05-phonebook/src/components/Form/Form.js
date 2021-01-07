import React, { Component } from "react";
import uuid from "react-uuid";
import { FormContact, InputForm, ButtonForm } from "./styles";

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
      <FormContact onSubmit={this.handlerSubmit}>
        <p>Name </p>
        <InputForm
          type="text"
          value={name}
          onChange={this.handlerChange}
          name="name"
        />

        <p>Number </p>
        <InputForm
          type="tel"
          value={number}
          onChange={this.handlerChange}
          name="number"
        />

        <ButtonForm type="submit"> Add contact </ButtonForm>
      </FormContact>
    );
  }
}
