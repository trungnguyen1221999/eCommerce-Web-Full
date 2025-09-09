// src/components/common/Button.jsx
import React from "react";
import styled from "styled-components";

const Button = ({ label, ...props }) => {
  return <StyledButton {...props}>{label}</StyledButton>;
};

export default Button;
const StyledButton = styled.button`
  font-size: 1.4rem;
  padding: 1.5rem 5rem;
  border: none;
  border-radius: 0.4rem;
  cursor: pointer;
  background: ${({ theme }) => theme.colors.primary || "#333"};
  color: #fff;
  transition: all 0.3s ease;

  &:hover {
    background: transparent;
    color: ${({ theme }) => theme.colors.primary || "#333"};
    border: 0.1rem solid ${({ theme }) => theme.colors.primary || "#333"};
  }
`;
