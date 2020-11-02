import React, { Component } from "react";
import PropTypes from "prop-types";
import { ButtonUpload } from "./styles";

export default class Button extends Component {
  // static propTypes = {
  //   scrollTo: PropTypes.func.isRequired,
  // };

  componentDidMount() {
    console.log(this.props);
    this.props.onScroll();
  }

  render() {
    return (
      <ButtonUpload type="button" onClick={this.props.onClick}>
        Load more
      </ButtonUpload>
    );
  }
}
