import styled from "styled-components";

const Table = styled.table`
  min-width: 432px;
  margin: 0 auto;
  border: 1px solid #222222;
  margin-bottom: 30px;
`;
const Type = styled.td``;
const Amount = styled.td``;
const Currency = styled.td``;

const Column = styled.thead`
  background-color: #00bcd5;
  text-transform: uppercase;
`;
const Cell = styled.tr`
  height: 30px;
`;
const LineList = styled.tbody`
  text-transform: capitalize;
`;

const LineItem = styled.tr`
  height: 30px;

  &:nth-child(2n) {
    background-color: #ecf1f4;
  }
`;

export { Table, Type, Amount, Currency, Column, Cell, LineList, LineItem };
