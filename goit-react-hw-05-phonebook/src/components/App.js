import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import Form from "./Form/Form";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";
import Header from "./Header/Header";
import Alert from "./Alert/Alert";

export default class extends Component {
  state = {
    contacts: [],
    filter: "",
    alert: false,
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
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  handlerChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handlerFilter = () => {
    const { contacts, filter } = this.state;

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  addContact = (contact) => {
    const { contacts } = this.state;
    const isName = contacts.find((item) => item.name === contact.name);

    if (isName) {
      this.setState({ alert: true });
      setTimeout(() => this.setState({ alert: false }), 3000);
      // alert(`${contact.name} is already in contact.`);
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
    const { filter, contacts, alert } = this.state;
    const filtredContacts = this.handlerFilter();

    return (
      <>
        <CSSTransition
          classNames="stylesAlert"
          in={this.state.alert}
          // appear={true}
          timeout={250}
          unmountOnExit
        >
          <Alert alert={alert} />
        </CSSTransition>

        <CSSTransition
          in={true}
          appear={true}
          classNames="fade"
          timeout={500}
          unmountOnEnter
        >
          <Header />
        </CSSTransition>

        <Form addContact={this.addContact} />
        {/* <h2>Contacts</h2> */}
        <Filter onChange={this.handlerChange} value={filter} />
        {contacts.length > 0 && (
          <ContactList
            filtredContacts={filtredContacts}
            remove={this.removeContact}
          />
        )}
      </>
    );
  }
}
