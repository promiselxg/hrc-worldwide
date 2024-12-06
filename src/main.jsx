import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { ModalProvider } from "./context/modal-context";
import { HelmetProvider } from "react-helmet-async";
import { EditorProvider } from "./context/editor.context";
import { ImageProvider } from "./context/imageUpload.context";
import { AuthContextProvider } from "./context/auth.context";
const helmetContext = {};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthContextProvider>
      <HelmetProvider context={helmetContext}>
        <div className="relative">
          <EditorProvider>
            <ImageProvider>
              <ModalProvider>
                <RouterProvider router={router} />
              </ModalProvider>
            </ImageProvider>
          </EditorProvider>
        </div>
      </HelmetProvider>
    </AuthContextProvider>
  </StrictMode>
);
