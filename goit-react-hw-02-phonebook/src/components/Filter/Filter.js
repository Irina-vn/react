import React from "react";

export default function Filter({ value, onChange }) {
  return (
    <>
      <p>Find contacts by name</p>
      <input type="text" value={value} onChange={onChange} name="filter" />
    </>
  );
}
