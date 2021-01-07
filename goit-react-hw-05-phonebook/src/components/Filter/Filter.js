import React from "react";
import { FilterInput, WrapFilter } from "./styles";

export default function Filter({ value, onChange }) {
  return (
    <>
      <WrapFilter>
        <label>
          Find contacts by name
          <FilterInput
            type="text"
            value={value}
            onChange={onChange}
            name="filter"
          />
        </label>
      </WrapFilter>
    </>
  );
}
