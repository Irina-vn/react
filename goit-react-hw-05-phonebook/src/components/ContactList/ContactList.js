import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import ContactItem from "../ContactItem/ContactItem";

export default function ContactList({ filtredContacts, remove }) {
  return (
    <>
      <TransitionGroup component="ul">
        {filtredContacts.map(({ id, name, number }) => (
          <CSSTransition key={id} timeout={250} classNames="list">
            <ContactItem
              key={id}
              id={id}
              name={name}
              number={number}
              remove={remove}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </>
  );
}
