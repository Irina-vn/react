// import  from "prop-types";
import React from "react";
import PropTypes from "prop-types";
import {
  Table,
  Type,
  Amount,
  Currency,
  Column,
  Cell,
  LineList,
  LineItem,
} from "./styles";

function TransactionHistory({ items }) {
  return (
    <>
      <Table>
        <Column>
          <Cell>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </Cell>
        </Column>

        <LineList>
          {items.map(({ id, type, amount, currency }) => {
            return (
              <LineItem key={id}>
                <Type>{type}</Type>
                <Amount>{amount}</Amount>
                <Currency>{currency}</Currency>
              </LineItem>
            );
          })}
        </LineList>
      </Table>
    </>
  );
}

TransactionHistory.defaultProps = {
  id: 0,
  type: "",
  amount: 0,
  currency: "",
};

TransactionHistory.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

export default TransactionHistory;
