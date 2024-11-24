import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { ModalProvider } from "./context/modal-context";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="relative">
      <ModalProvider>
        <RouterProvider router={router} />
      </ModalProvider>
    </div>
  </StrictMode>
);
