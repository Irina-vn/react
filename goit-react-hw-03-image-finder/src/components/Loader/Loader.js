import React, { Component } from "react";
import Loader from "react-loader-spinner";
import styled from "styled-components";

const Wrap = styled.div`
  display: flex;
  justify-content: center;
`;

export default class App extends Component {
  //other logic
  render() {
    return (
      <Wrap>
        <Loader
          type="Grid"
          color="#00BFFF"
          height={80}
          width={80}
          timeout={3000} //3 secs
        />
      </Wrap>
    );
  }
}
