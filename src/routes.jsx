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
import About_RBTI from "./routes/rbti/about";
import Objective from "./routes/rbti/objective";
import Spiritual_Formation from "./routes/rbti/spiritual-formation";
import Candidate_Responsibility from "./routes/rbti/candidate-responsibility";
import Organogram from "./routes/rbti/organogram";
import Login from "./routes/admin";
import AdminLayout from "./layouts/admin.layout";
import Dashboard from "./routes/admin/routes/dashboard";
import EventPage from "./routes/admin/routes/event";
import BlogPage from "./routes/admin/routes/blog";
import AddEventPage from "./routes/admin/routes/event/add";
import EditEventPage from "./routes/admin/routes/event/edit";
import BannerPage from "./routes/admin/routes/banner";
import AddBanner from "./routes/admin/routes/banner/add";
import EditBannerPage from "./routes/admin/routes/banner/edit";
import Setting from "./routes/admin/routes/setting";
import EditMinistyPage from "./routes/admin/routes/ministry/edit";
import MinistryPage from "./routes/admin/routes/ministry";
import AddBlogPage from "./routes/admin/routes/blog/add";
import EditBlogPost from "./routes/admin/routes/blog/edit";
import AboutUsPage from "./routes/admin/routes/about-us";
import EditAboutUs from "./routes/admin/routes/about-us/edit";
import TeamPage from "./routes/admin/routes/team";
import EditTeam from "./routes/admin/routes/team/edit";
import ResourcesPage from "./routes/admin/routes/resource";
import EditResouce from "./routes/admin/routes/resource/edit";

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
    errorElement: <PageNotFound />, // Global error handler for the root routes
  },
  {
    path: "/rbti",
    element: <RBTI_Layout />,
    children: [
      {
        path: "/rbti",
        element: <RBTI_Home />,
      },
      {
        path: "/rbti/about",
        element: <About_RBTI />,
      },
      {
        path: "/rbti/objectives",
        element: <Objective />,
      },
      {
        path: "/rbti/spiritual-formation",
        element: <Spiritual_Formation />,
      },
      {
        path: "/rbti/candidate-responsiblity",
        element: <Candidate_Responsibility />,
      },
      {
        path: "/rbti/organogram",
        element: <Organogram />,
      },
    ],
    errorElement: <PageNotFound />, // Error handler for all RBTI routes
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },

      {
        path: "event",
        element: <EventPage />,
      },
      {
        path: "event/add",
        element: <AddEventPage />,
      },
      {
        path: "event/:id/edit",
        element: <EditEventPage />,
      },
      {
        path: "banner",
        element: <BannerPage />,
      },
      {
        path: "banner/add",
        element: <AddBanner />,
      },
      {
        path: "banner/:id/edit",
        element: <EditBannerPage />,
      },
      {
        path: "setting",
        element: <Setting />,
      },
      {
        path: "ministry",
        element: <MinistryPage />,
      },
      {
        path: "ministry/:id/edit",
        element: <EditMinistyPage />,
      },
      {
        path: "blog",
        element: <BlogPage />,
      },
      {
        path: "blog/add",
        element: <AddBlogPage />,
      },
      {
        path: "blog/:id/edit",
        element: <EditBlogPost />,
      },
      {
        path: "about-us",
        element: <AboutUsPage />,
      },
      {
        path: "about-us/:id/edit",
        element: <EditAboutUs />,
      },
      {
        path: "team",
        element: <TeamPage />,
      },
      {
        path: "team/:id/edit",
        element: <EditTeam />,
      },
      {
        path: "resource",
        element: <ResourcesPage />,
      },
      {
        path: "resource/:id/edit",
        element: <EditResouce />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
    errorElement: <PageNotFound />, // Error handler for admin dashboard
  },
  {
    path: "",
    element: <Login />,
    errorElement: <PageNotFound />, // Error handler for admin login
  },
]);

export default routes;
