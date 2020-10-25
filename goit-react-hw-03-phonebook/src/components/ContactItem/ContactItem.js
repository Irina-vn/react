import React from "react";
import { ItemContact, Button } from "./styles";

export default function ContactItem({ id, name, number, remove }) {
  return (
    <>
      <ItemContact>
        <p>
          {name}:{number}
          <Button type="button" onClick={(e) => remove(id)}>
            Delete
          </Button>
        </p>
      </ItemContact>
    </>
  );
}
