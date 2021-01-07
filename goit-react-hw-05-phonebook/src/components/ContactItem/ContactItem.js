import React from "react";
import { ItemContact, Button } from "./styles";

export default function ContactItem({ id, name, number, remove }) {
  return (
    <>
      <ItemContact>
        <p>{name}</p>
        <p>{number}</p>
        <Button type="button" onClick={(e) => remove(id)}>
          X
        </Button>
      </ItemContact>
    </>
  );
}
