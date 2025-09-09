import React from "react";
import Container from "./../Containers/Container";
import Logo from "./../Logo/Logo";
import NavData from "./NavData";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <Wrapper>
      <StyledContainer>
        {/* Bên trái */}
        <Group>
          <StyledIconList>
            {NavData.icon.slice(0, 3).map(({ svg }, i) => (
              <span key={i}>{svg}</span>
            ))}
          </StyledIconList>
          <StyledNavLinks>
            {NavData.nav.slice(1, 3).map(({ id, link, title }) => (
              <StyledLink key={id} to={link}>
                {title}
              </StyledLink>
            ))}
          </StyledNavLinks>
        </Group>

        {/* Logo giữa */}
        <Logo />

        {/* Bên phải */}
        <Group>
          <StyledNavLinks>
            {NavData.nav.slice(3).map(({ id, link, title }) => (
              <StyledLink key={id} to={link}>
                {title}
              </StyledLink>
            ))}
            <NavText>{NavData.search}</NavText>
            <NavText>{NavData.signIn}</NavText>
          </StyledNavLinks>
          <StyledIconList>
            {NavData.icon.slice(3).map(({ svg }, i) => (
              <span key={i}>{svg}</span>
            ))}
          </StyledIconList>
        </Group>
      </StyledContainer>
    </Wrapper>
  );
};
export default Nav;

/* ---------------- Styled Components ---------------- */

const StyledContainer = styled(Container)`
  justify-content: space-between;
  align-items: center;
`;

const Group = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const StyledIconList = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;

  svg {
    width: 2.5rem;
    padding: 0.5rem;
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 50%;
    fill: ${({ theme }) => theme.colors.white};
    cursor: pointer;

    &:hover {
      opacity: 0.9;
    }
  }
`;

const StyledNavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
`;

const StyledLink = styled(NavLink)`
  position: relative;
  font-size: 1.6rem;
  font-weight: 500;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};

  &::after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: -0.4rem;
    transform: translateX(-50%) scaleX(0);
    transform-origin: center;
    width: 100%;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.primary};
    transition: transform 0.3s ease;
  }

  &:hover::after {
    transform: translateX(-50%) scaleX(1);
  }

  &.active {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const NavText = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
`;

const Wrapper = styled.div`
  width: 100vw;
  background-color: ${({ theme }) => theme.colors.banner};
  padding: 1rem 0;
`;
