import React, { useState } from "react";
import styled from "styled-components";
import SvgProductData from "./SvgProductData";

const ProductCard = ({ product }) => {
  const [hover, setHover] = useState(false);

  return (
    <Card
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <ImageWrapper>
        <img className="front" src={product.images[0]} alt="" />
        <img className="back" src={product.images[1]} alt="" />
      </ImageWrapper>

      <Title>{product.name}</Title>
      <Price>$ {product.price}</Price>

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

  img.front {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: opacity 0.4s ease;
    opacity: 1;
  }

  img.back {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: opacity 0.4s ease;
    opacity: 0;
  }

  &:hover img.front {
    opacity: 0;
  }
  &:hover img.back {
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

const IconList = styled.div`
  position: absolute;
  top: 50%;
  right: 2rem;
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
