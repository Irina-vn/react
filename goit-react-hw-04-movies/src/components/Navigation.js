import React from "react";
import { NavLink } from "react-router-dom";
import routes from "../routes";
import styled from "styled-components";

export const StyleLink = styled(NavLink)`
  color: teal;
  &:hover {
    text-decoration: underline;
  }
  &.active {
    color: red;
  }
`;
export const ListNav = styled.ul`
  max-width: 100px;
  list-style: none;
  display: flex;
  justify-content: space-between;
`;

const Navigation = () => (
  <ListNav>
    <li>
      <StyleLink exact to={routes.home}>
        Home
      </StyleLink>
    </li>
    <li>
      <StyleLink to={routes.movies}>Movies</StyleLink>
    </li>
  </ListNav>
);

export default Navigation;
