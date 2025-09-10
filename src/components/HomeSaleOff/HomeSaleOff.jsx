import React from "react";
import styled, { keyframes } from "styled-components";
import HomeSaleOffData from "./HomeSaleOffData";
import Button from "../Button";

const HomeSaleOff = () => {
  const { title, desc, btn, imgLeft, imgRight } = HomeSaleOffData;

  return (
    <Container>
      <ImageLeft src={imgLeft} alt="left" />
      <Content>
        <h2>{title}</h2>
        <p>{desc}</p>
        <Button label={btn} />
      </Content>
      <ImageRight src={imgRight} alt="right" />
    </Container>
  );
};

export default HomeSaleOff;

// Styled Components
const Container = styled.div`
  height: 46rem;
  max-width: 90vw;
  margin: 0 auto;
  margin-top: 10rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffff;
  overflow: hidden;
`;

const Content = styled.div`
  text-align: center;
  max-width: 50rem;
  z-index: 2;

  h2 {
    font-size: 4rem;
    margin-bottom: 1.5rem;
    font-weight: normal;
  }

  p {
    font-size: 1.6rem;
    margin-bottom: 2rem;
  }
`;

const ImageLeft = styled.img`
  position: absolute;
  left: 0;
  width: auto;
`;

const ImageRight = styled.img`
  position: absolute;
  right: 0;
  width: auto;
`;
