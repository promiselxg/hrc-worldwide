import { createBrowserRouter } from "react-router-dom";
import Home from "./routes/home";
import ContactUs from "./routes/contact-us";
import Layout from "./layouts/default.layout";
import Events from "./routes/events";
import Resources from "./routes/resources";
import AboutUs from "./routes/about-us";
import Blog from "./routes/blog";
import BlogDetails from "./routes/blog/details";
import Ministries from "./routes/ministries";
import MinistryDetails from "./routes/ministries/details";

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
        path: "/events",
        element: <Events />,
      },
      {
        path: "/resources",
        element: <Resources />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/blog/:id",
        element: <BlogDetails />,
      },
      {
        path: "/ministry",
        element: <Ministries />,
      },
      {
        path: "/ministry/:id",
        element: <MinistryDetails />,
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
