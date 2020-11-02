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
  };
  componentDidMount() {
    const persistedContacts = localStorage.getItem("contacts");
    if (persistedContacts) {
      this.setState({
        contacts: JSON.parse(persistedContacts),
      });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("Contact Up");

    // console.log("prevState:", prevState);
    // console.log("this.state:", this.state);

    if (prevState.contacts !== this.state.contacts) {
      // console.log("LocalStorage");
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  handlerChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handlerFilter = () => {
    const { contacts, filter } = this.state;
    // console.log(filter);

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
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
