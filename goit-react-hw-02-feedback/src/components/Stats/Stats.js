import React from "react";
import PropTypes from "prop-types";
import { Item } from "./styles";

export default function Stats({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <>
      <Item>Good:{good} </Item>
      <Item>Neutral:{neutral}</Item>
      <Item>Bad:{bad}</Item>
      <Item>Total:{total}</Item>
      <Item>Positive feedback:{positivePercentage} %</Item>
    </>
  );
}

Stats.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
