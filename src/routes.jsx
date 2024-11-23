import { createBrowserRouter } from "react-router-dom";
import Home from "./routes/home";
import ContactUs from "./routes/contact-us";
import Layout from "./layouts/default.layout";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <div>About Us</div>,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
    ],
    errorElement: <div>404, page not found</div>,
  },
  {
    path: "/login",
    element: <div>Login page</div>,
  },
]);

export default routes;
