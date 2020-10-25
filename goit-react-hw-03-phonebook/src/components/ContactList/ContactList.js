import React from "react";
import ContactItem from "../ContactItem/ContactItem";

export default function ContactList({ filtredContacts, remove }) {
  return (
    <ul>
      {filtredContacts.map(({ id, name, number }) => (
        <ContactItem
          key={id}
          id={id}
          name={name}
          number={number}
          remove={remove}
        />
      ))}
    </ul>
  );
}
