import BannerData from "./BannerData";
import React from "react";
import styled from "styled-components";
import Button from "../Button";
const Banner = () => {
  const { background, title, desc, btn, features } = BannerData;

  return (
    <BannerWrapper bg={background}>
      <BannerContent>
        <BannerTitle>{title}</BannerTitle>
        <BannerDesc>{desc}</BannerDesc>
        <Button label={btn} />
      </BannerContent>

      <FeaturesWrapper>
        {features.map((item) => (
          <FeatureItem key={item.id}>
            {item.svg}
            <FeatureText>
              <FeatureTitle>{item.title}</FeatureTitle>
              <FeatureDesc>{item.desc}</FeatureDesc>
            </FeatureText>
          </FeatureItem>
        ))}
      </FeaturesWrapper>
    </BannerWrapper>
  );
};

export default Banner;

// Styled Components
const BannerWrapper = styled.section`
  position: relative;
  width: 100%;
  height: 60rem;
  background: url(${(props) => props.bg}) center center / 120% no-repeat; /* zoom luôn */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const BannerContent = styled.div`
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
  max-width: 60rem;
  padding: 2rem;
`;

const BannerTitle = styled.h1`
  font-size: 4.8rem; /* tăng font */
  margin-bottom: 1.6rem;
  color: ${({ theme }) => theme.colors.text};
`;

const BannerDesc = styled.p`
  font-size: 1.8rem; /* tăng font một chút */
  margin-bottom: 2.4rem;
  color: ${({ theme }) => theme.colors.text};
`;

const FeaturesWrapper = styled.div`
  position: absolute;
  width: ${({ theme }) => theme.container.maxWidth};
  bottom: 1rem; /* lùi xuống thêm */
  left: 50%;
  transform: translate(-50%, 30%);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4rem;
  background: ${({ theme }) => theme.colors.primary};
  padding: 1.6rem 3.2rem;
  border-radius: 1rem;
  color: white;
`;

const FeatureItem = styled.div`
  display: flex;
  align-items: center; /* icon nằm ngang với text */
  gap: 1.2rem; /* khoảng cách giữa icon và text */
  color: ${({ theme }) => theme.colors.white};
  max-width: 18rem;

  svg {
    width: 3rem;
    height: 3rem;
    flex-shrink: 0;
    fill: currentColor;
  }
`;

const FeatureText = styled.div`
  display: flex;
  flex-direction: column;
`;

const FeatureTitle = styled.h4`
  font-size: 1.6rem;
  margin-bottom: 0.4rem;
  color: ${({ theme }) => theme.colors.white};
`;

const FeatureDesc = styled.p`
  font-size: 1.4rem;
  text-align: left;
  color: ${({ theme }) => theme.colors.white};
`;
