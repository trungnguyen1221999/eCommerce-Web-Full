import React from "react";
import CompareData from "./CompareData";
import styled from "styled-components";
import Button from "../../Button";
const Compare = () => {
  return (
    <CompareWrapper>
      <IconWrapper>{CompareData.svg}</IconWrapper>
      <Title>{CompareData.title}</Title>
      <StyedButton label={CompareData.btn}></StyedButton>
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
`;

const IconWrapper = styled.div`
  width: 40px;
  height: 40px;
  svg {
    width: 100%;
    height: 100%;
    fill: #000000;
  }
`;

const Title = styled.h3`
  font-size: 1.8rem;
  font-weight: 200;
  text-align: center;
  text-transform: uppercase;
`;

const StyedButton = styled(Button)`
  margin: 0 auto;
  position: fixed;
  bottom: 2rem;
  width: 30rem;
`;
