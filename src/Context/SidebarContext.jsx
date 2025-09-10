import { createContext, useState } from "react";

const SideBarContext = createContext();

export default SideBarContext;

export const SideBarProvider = ({ children }) => {
  // const [sidebarType, setSidebarType] = useState(null);
  // const openSidebar = (type) => setSidebarType(type);
  // const closeSidebar = () => setSidebarType(null);
  const initalState = {
    state: false,
    type: null,
  };

  const [isOpened, setIsOpened] = useState(initalState);
  const openSlidebar = (type) => {
    setIsOpened({ state: true, type: type });
  };
  const closeSidebar = () => {
    setIsOpened(initalState);
  };
  return (
    <SideBarContext.Provider
      value={{ isOpened, setIsOpened, openSlidebar, closeSidebar }}
    >
      {children}
    </SideBarContext.Provider>
  );
};
