import React, { Component } from "react";
import { Overlay, ModalWindow } from "./styles";
import PropTypes from "prop-types";

export default class Modal extends Component {
  static propTypes = {
    imgUrl: PropTypes.string,
  }; //вешаем слушатель
  componentDidMount() {
    // console.log("Modal");
    window.addEventListener("keydown", this.handlerKeyDown);
  }
  ///снимаем слушатель, чтобы не забивал оперативку
  componentWillUnmount() {
    // console.log("unmount");
    window.removeEventListener("keydown", this.handlerKeyDown);
  }

  handlerKeyDown = (e) => {
    if (e.code === "Escape") {
      // console.log("close modal");
      this.props.onClose();
    }
  };

  render() {
    return (
      <>
        <Overlay onClick={this.handlerKeyDown}>
          <ModalWindow>
            <img src={this.props.imgUrl} alt="" />
          </ModalWindow>
        </Overlay>
      </>
    );
  }
}
