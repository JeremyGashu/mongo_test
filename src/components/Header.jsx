import React from "react";
import styled from "styled-components";

const StyledHeader = styled.p`
  padding-top: 10px;
  padding-bottom: 10px;
  border: 3px solid #eeeeee;
  border-radius: 7px;
  text-align: center;
`;

const Header = ({ title }) => {
  return <StyledHeader>{title}</StyledHeader>;
};

export default Header;
