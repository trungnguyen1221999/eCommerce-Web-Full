import React from "react";
import CompareData from "./CompareData";
import styled from "styled-components";

const Compare = () => {
  return (
    <CompareWrapper>
      <IconWrapper>{CompareData.svg}</IconWrapper>
      <Title>{CompareData.title}</Title>
      <Button>{CompareData.btn}</Button>
    </CompareWrapper>
  );
};

export default Compare;

/* ---------------- Styled Components ---------------- */

const CompareWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 2rem;
  border: 1px solid #ddd;
  border-radius: 8px;
`;

const IconWrapper = styled.div`
  width: 50px;
  height: 50px;
  svg {
    width: 100%;
    height: 100%;
    fill: #333;
  }
`;

const Title = styled.h3`
  font-size: 1.4rem;
  font-weight: 600;
  text-align: center;
`;

const Button = styled.button`
  padding: 0.6rem 1.2rem;
  border: none;
  background-color: #333;
  color: #fff;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    opacity: 0.9;
  }
`;
