import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { ModalProvider } from "./context/modal-context";
import { HelmetProvider } from "react-helmet-async";
const helmetContext = {};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider context={helmetContext}>
      <div className="relative">
        <ModalProvider>
          <RouterProvider router={router} />
        </ModalProvider>
      </div>
    </HelmetProvider>
  </StrictMode>
);
