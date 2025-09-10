import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { SideBarProvider } from "./Context/SidebarContext.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SideBarProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </SideBarProvider>
  </StrictMode>
);
