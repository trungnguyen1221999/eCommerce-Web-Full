import React, { useContext } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import SideBarContext from "../../Context/SidebarContext";

const Sidebar = ({ children }) => {
  const { isOpened, closeSidebar } = useContext(SideBarContext);
  return ReactDOM.createPortal(
    <>
      <Overlay onClick={closeSidebar} isOpened={isOpened.state} />
      <SidebarContainer isOpened={isOpened.state}>{children}</SidebarContainer>
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
`;
