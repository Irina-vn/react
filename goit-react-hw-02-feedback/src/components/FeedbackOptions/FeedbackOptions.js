import React from "react";
import PropTypes from "prop-types";
import { Button } from "./styles";

export default function FeedbackOptions({ onLeaveFeedback }) {
  return (
    <>
      <Button type="button" onClick={onLeaveFeedback} name="good">
        Good
      </Button>
      <Button type="button" onClick={onLeaveFeedback} name="neutral">
        Neutral
      </Button>

      <Button type="button" onClick={onLeaveFeedback} name="bad">
        Bad
      </Button>
    </>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.object,
  onLeaveFeedback: PropTypes.func,
};
