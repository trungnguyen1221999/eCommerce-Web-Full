import React, { useState } from "react";
import styled from "styled-components";
import SvgProductData from "./SvgProductData";

const ProductCard = () => {
  const [hover, setHover] = useState(false);

  return (
    <Card
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <ImageWrapper>
        <img
          src="https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-1.1-min.jpg"
          alt=""
        />
        <img
          src="https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-1.2-min.jpg"
          alt=""
        />
      </ImageWrapper>

      <Title>Product Title</Title>
      <Price>$Price</Price>

      <IconList show={hover}>
        {SvgProductData.map((icon) => (
          <IconItem key={icon.id}>{icon.svg}</IconItem>
        ))}
      </IconList>
    </Card>
  );
};

export default ProductCard;

// Styled Components
const Card = styled.div`
  width: 25rem;
  cursor: pointer;
  position: relative;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 30rem;
  overflow: hidden;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: opacity 0.4s ease;
  }

  img:nth-child(2) {
    opacity: 0;
  }

  &:hover img:nth-child(1) {
    opacity: 0;
  }

  &:hover img:nth-child(2) {
    opacity: 1;
  }
`;

const Title = styled.h2`
  font-size: 1.6rem;
  margin: 1rem 0 0.5rem;
`;

const Price = styled.div`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.primary || "#333"};
`;

// Icon list
const IconList = styled.div`
  position: absolute;
  top: 50%;
  right: 2rem; /* ban đầu ở ngoài */
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  opacity: ${(props) => (props.show ? 1 : 0)};
  transition: all 0.3s ease;
`;

const IconItem = styled.div`
  width: 3.5rem;
  height: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 50%;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background: rgba(255, 255, 255, 1);
    scale: 1.2;
  }

  svg {
    width: 1.6rem;
    height: 1.6rem;
    fill: ${({ theme }) => theme.colors.primary || "#333"};
  }
`;
