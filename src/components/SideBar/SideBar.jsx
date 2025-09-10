import React, { useContext } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import SideBarContext from "../../Context/SidebarContext";

const Sidebar = ({ children }) => {
  const { isOpened, closeSidebar } = useContext(SideBarContext);
  return ReactDOM.createPortal(
    <>
      <Overlay onClick={closeSidebar} isOpened={isOpened.state} />
      <SidebarContainer isOpened={isOpened.state}>
        <svg
          className="svg"
          onClick={closeSidebar}
          isOpened={isOpened.state}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 640"
        >
          <path d="M183.1 137.4C170.6 124.9 150.3 124.9 137.8 137.4C125.3 149.9 125.3 170.2 137.8 182.7L275.2 320L137.9 457.4C125.4 469.9 125.4 490.2 137.9 502.7C150.4 515.2 170.7 515.2 183.2 502.7L320.5 365.3L457.9 502.6C470.4 515.1 490.7 515.1 503.2 502.6C515.7 490.1 515.7 469.8 503.2 457.3L365.8 320L503.1 182.6C515.6 170.1 515.6 149.8 503.1 137.3C490.6 124.8 470.3 124.8 457.8 137.3L320.5 274.7L183.1 137.4z" />
        </svg>
        {children}
      </SidebarContainer>
    </>,
    document.body
  );
};

export default Sidebar;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(212, 212, 212, 0.6);
  opacity: ${({ isOpened }) => (isOpened ? 1 : 0)};
  transition: opacity 0.3s ease-in-out;
  z-index: 9999;
  pointer-events: ${({ isOpened }) => (isOpened ? "auto" : "none")};
`;

const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  transform: ${({ isOpened }) =>
    isOpened ? "translateX(0)" : "translateX(100%)"};
  width: 20vw;
  height: 100vh;
  background: #fff;
  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease-in-out;
  z-index: 10000;
  padding: 20px;
  .svg {
    display: ${({ isOpened }) => (isOpened ? "block" : "none")};
    position: absolute;
    width: 2.5rem;
    padding: 0.5rem;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 50%;
    fill: ${({ theme }) => theme.colors.primary};
    cursor: pointer;
    scale: 1.4;

    &:hover {
      opacity: 0.9;
    }
    left: -4rem;
  }
`;
