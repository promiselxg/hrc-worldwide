import { cn } from "@/lib/utils";
import { LayoutDashboard } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import AdminFooter from "./footer";

const SideNav = () => {
  const currentRoute = useLocation();
  const [openNavBar, setOpenNavBar] = useState(true);
  console.log(currentRoute);
  return (
    <>
      <div
        className={cn(
          `bg-[#191919] text-[#757575]  sticky top-0 bottom-0 md:relative h-screen navbar md:flex ${
            !openNavBar ? "w-[70%] md:w-[0%]" : "w-[0%] md:w-[20%]"
          }`
        )}
      >
        <div className="p-5 w-full ">
          <h1
            className="p-2 my-[2px] uppercase"
            onClick={() => setOpenNavBar(!openNavBar)}
          >
            Dare Autos
          </h1>
          <div className="relative h-[calc(100vh-110px)]">
            <ul className="flex flex-col ">
              <li
                className={cn(
                  `${
                    currentRoute.pathname === "/admin/dashboard" ||
                    currentRoute.pathname === "/admin/"
                      ? "active"
                      : ""
                  } my-[2px] h-10 nav`
                )}
              >
                <Link
                  to="/admin/dashboard"
                  className="flex gap-2 items-center py-2  h-8 leading-tight relative"
                >
                  <span className="w-[1px] h-8 rounded-r-[5px] border-r-4 border-transparent"></span>
                  <LayoutDashboard size={18} />
                  Dashboard
                </Link>
              </li>
              <li
                className={cn(
                  `${
                    currentRoute.pathname === "/admin/event" ||
                    currentRoute.pathname.startsWith("/admin/event")
                      ? "active"
                      : ""
                  } my-[2px] h-10 nav`
                )}
              >
                <Link
                  to="/admin/event"
                  className="flex gap-2 items-center py-2  h-8 leading-tight relative"
                >
                  <span className="w-[1px] h-8 rounded-r-[5px] border-r-4 border-transparent"></span>
                  <LayoutDashboard size={18} />
                  Events
                </Link>
              </li>
              <li
                className={cn(
                  `${
                    currentRoute.pathname === "/admin/blog" && "active"
                  } my-[2px] h-10 nav`
                )}
              >
                <Link
                  to="/admin/blog"
                  className="flex gap-2 items-center py-2  h-8 leading-tight relative"
                >
                  <span className="w-[1px] h-8 rounded-r-[5px] border-r-4 border-transparent"></span>
                  <LayoutDashboard size={18} />
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <AdminFooter />
        </div>
      </div>
    </>
  );
};

export default SideNav;
