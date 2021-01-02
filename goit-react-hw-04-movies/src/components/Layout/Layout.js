import React from "react";
import Searchbar from "../Searchbar";
import styled from "styled-components";

export const LayoutStyle = styled.div`
  max-width: 1170px;
  padding: 20px;
`;

const Layout = ({ children }) => (
  <LayoutStyle>
    <Searchbar />
    {children}
  </LayoutStyle>
);

export default Layout;
