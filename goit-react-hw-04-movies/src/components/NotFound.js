import React from "react";
import { Link } from "react-router-dom";
import imagePath from "../assets/dfa4ec131cf975e7887ad4c36da126be.jpg";
import styled from "styled-components";

const WrapNotFound = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NotFound = () => (
  <WrapNotFound>
    <h1>404</h1>
    <img src={imagePath} alt="cat detective" width="320" />
    <p>
      Упс, кажется Вы потерялись. Вот <Link to="/">ccылка</Link> на главную
      страницу.
    </p>
  </WrapNotFound>
);

export default NotFound;
