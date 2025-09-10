import React from "react";
import styled from "styled-components";
import FooterData from "./FooterData";

const FooterContainer = styled.footer`
  background: ${({ theme }) => theme.colors.footer};
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 10rem;
`;

const Logo = styled.img`
  width: 150px;
  display: block;
  margin: 0 auto 20px;
`;

const Nav = styled.ul`
  width: 30vw;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  list-style: none;
  padding: 0;
  margin-bottom: 20px;
`;

const NavItem = styled.a`
  text-decoration: none;
  color: white;
  &:hover {
    opacity: 0.9;
  }
`;

const Desc = styled.p`
  text-align: center;
  margin-bottom: 20px;
  color: white;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 20px;
`;

const Icon = styled.img`
  height: auto;
`;

const CopyRight = styled.p`
  text-align: center;
  color: white;
  font-size: 14px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Logo src={FooterData.logo} alt="Logo" />

      <Nav>
        {FooterData.nav.map((item) => (
          <li key={item.id}>
            <NavItem href={item.link}>{item.title}</NavItem>
          </li>
        ))}
      </Nav>

      <Desc>{FooterData.desc}</Desc>

      <IconWrapper>{<Icon src={FooterData.icon}></Icon>}</IconWrapper>

      <CopyRight>{FooterData.copyRight}</CopyRight>
    </FooterContainer>
  );
};

export default Footer;
