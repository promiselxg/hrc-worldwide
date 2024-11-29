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
import Give from "./routes/give";
import Livestream from "./routes/livestream";
import RBTI_Layout from "./layouts/rbti.layout";
import RBTI_Home from "./routes/rbti";
import PageNotFound from "./routes/404";

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
      {
        path: "/give",
        element: <Give />,
      },
      {
        path: "/livestream",
        element: <Livestream />,
      },
    ],
    errorElement: <PageNotFound />,
  },
  {
    path: "/rbti",
    element: <RBTI_Layout />,
    children: [
      {
        path: "/rbti",
        element: <RBTI_Home />,
      },
    ],
  },
  {
    path: "/login",
    element: <div>Login page</div>,
  },
]);

export default routes;
