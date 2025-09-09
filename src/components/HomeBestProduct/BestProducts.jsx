import React, { useState, useEffect } from "react";
import styled from "styled-components";
import BestProductData from "./BestProductData";

import ProductCard from "./../Product/ProductCard";
import Button from "../Button";
import Container from "../Containers/Container";

const BestProducts = () => {
  const { heading, desc, ads } = BestProductData;

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date(ads.time).getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [ads.time]);

  const products = Array.from({ length: 6 }, (_, i) => i + 1);

  // Hàm format luôn 2 số
  const formatTime = (num) => (num < 10 ? `0${num}` : num);

  return (
    <Container>
      <Section>
        <SubHeading>{desc}</SubHeading>
        <HeadingWrapper>
          <Line />
          <Heading>{heading}</Heading>
          <Line />
        </HeadingWrapper>

        <GridWrapper>
          {/* Ads chiếm 2 cột */}
          <AdsCard>
            <AdsContent>
              <CountdownWrapper>
                <CountdownBox>
                  {formatTime(timeLeft.days)}
                  <CountdownLabel>Days</CountdownLabel>
                </CountdownBox>
                <CountdownBox>
                  {formatTime(timeLeft.hours)}
                  <CountdownLabel>Hours</CountdownLabel>
                </CountdownBox>
                <CountdownBox>
                  {formatTime(timeLeft.minutes)}
                  <CountdownLabel>Mins</CountdownLabel>
                </CountdownBox>
                <CountdownBox>
                  {formatTime(timeLeft.seconds)}
                  <CountdownLabel>Secs</CountdownLabel>
                </CountdownBox>
              </CountdownWrapper>

              <AdsTitle>{ads.title}</AdsTitle>
              <Button label={ads.btn} />
            </AdsContent>
          </AdsCard>

          {/* Hàng 1: 2 product card */}
          {products.slice(0, 2).map((p) => (
            <ProductCard key={p} />
          ))}

          {/* Hàng 2: 4 product card */}
          {products.slice(2).map((p) => (
            <ProductCard key={p} />
          ))}
        </GridWrapper>
      </Section>
    </Container>
  );
};

export default BestProducts;

// Styled Components
const Section = styled.section`
  padding: 4rem 2rem;
  margin-top: 10rem;
`;

const SubHeading = styled.p`
  font-size: 1.6rem;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 1.2rem;
  color: ${({ theme }) => theme.colors.text};
`;

const HeadingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 6rem;
`;

const Line = styled.span`
  flex: 1;
  height: 2px;
  border: 0.5px solid ${({ theme }) => theme.colors.primary};
  background-color: transparent;
  opacity: 0.2;
`;

const Heading = styled.h2`
  font-size: 3rem;
  text-align: center;
  font-weight: 400;
  margin: 0 1.5rem;
  color: ${({ theme }) => theme.colors.text};
`;

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
`;

const AdsCard = styled.div`
  grid-column: span 2;
  background: url(${(props) => BestProductData.ads.background}) center/cover
    no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 30rem;
  border-radius: 1rem;
  color: white;
`;

const AdsContent = styled.div`
  text-align: center;
  padding: 2rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CountdownWrapper = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const CountdownBox = styled.div`
  background: white;
  color: black;
  padding: 1rem 1.2rem;
  border-radius: 0.5rem;
  min-width: 4rem;
  text-align: center;
  font-size: 1.6rem;
  font-weight: 600;
`;

const CountdownLabel = styled.div`
  font-size: 1.5rem;
  margin-top: 0.3rem;
  color: ${({ theme }) => theme.colors.textLight};
`;

const AdsTitle = styled.h3`
  font-size: 3rem;
  margin-bottom: 1.6rem;
  color: ${({ theme }) => theme.colors.primary || "#3333"};
`;
