import React from "react";
import PropTypes from "prop-types";

export default function Notification({ message }) {
  return (
    <>
      <span>{message}</span>
    </>
  );
}

Notification.propTepes = {
  message: PropTypes.string,
};
