import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { SideBarProvider } from "./Context/SidebarContext.jsx";
import { ToastProvider } from "./Context/ToastContext.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ToastProvider>
      <SideBarProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </SideBarProvider>
    </ToastProvider>
  </StrictMode>
);
