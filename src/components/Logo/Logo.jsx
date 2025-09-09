import React from "react";
import NavData from "../Nav/NavData";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
const Logo = () => {
  return (
    <NavLink to={NavData.logo.href}>
      <StyledLogo src={NavData.logo.src} alt={NavData.logo.alt} />
    </NavLink>
  );
};

export default Logo;

const StyledLogo = styled.img`
  width: 150px;
`;
