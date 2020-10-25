import React, { Component } from "react";
import Form from "./Form/Form";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";

export default class extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
    // name: "",
    // number: "",
  };

  handlerChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  // handlerSubmit = (e) => {
  //   e.preventDefault();
  //   const contact = {
  //     id: uuid(),
  //     name: this.state.name,
  //     number: this.state.number,
  //   };

  //   this.setState({ name: "", number: "" });
  //   return contact;
  // };

  handlerFilter = () => {
    const { filter, contacts } = this.state;

    return contacts.filter((contact) =>
      contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
    );
  };

  addContact = (contact) => {
    const { contacts } = this.state;
    const isName = contacts.find((item) => item.name === contact.name);

    if (isName) {
      alert(`${contact.name} is already in contact.`);
    } else {
      this.setState((prevState) => ({
        contacts: [contact, ...prevState.contacts],
      }));
    }
  };

  removeContact = (contactId) => {
    this.setState((prevState) => {
      return {
        contacts: prevState.contacts.filter(({ id }) => id !== contactId),
      };
    });
  };

  render() {
    const { filter } = this.state;
    const filtredContacts = this.handlerFilter();

    return (
      <>
        <h2>Phonebook</h2>
        <Form addContact={this.addContact} />
        <h2>Contacts</h2>
        <Filter onChange={this.handlerChange} value={filter} />
        <ContactList
          filtredContacts={filtredContacts}
          remove={this.removeContact}
        />
      </>
    );
  }
}
