import { cn } from "@/lib/utils";
import {
  BookAIcon,
  File,
  LayoutDashboard,
  Power,
  SettingsIcon,
  Users,
  Video,
} from "lucide-react";
import { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaQuestion } from "react-icons/fa";
import { HiOutlineFilm } from "react-icons/hi";
import { FiBookOpen, FiMic } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import { AuthContext } from "@/context/auth.context";

const SideNav = () => {
  const currentRoute = useLocation();
  const [openNavBar, setOpenNavBar] = useState(true);
  const { handleLogOut } = useContext(AuthContext);
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
            HRC
          </h1>
          <div className="relative h-[calc(100vh-110px)]">
            <ul className="flex flex-col ">
              <li
                className={cn(
                  `${
                    currentRoute.pathname === "/admin/dashboard" ||
                    currentRoute.pathname === "/admin/" ||
                    currentRoute.pathname === "/admin"
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
                    currentRoute.pathname === "/admin/about-us" ||
                    currentRoute.pathname.startsWith("/admin/about-us")
                      ? "active"
                      : ""
                  } my-[2px] h-10 nav`
                )}
              >
                <Link
                  to="/admin/about-us"
                  className="flex gap-2 items-center py-2  h-8 leading-tight relative"
                >
                  <span className="w-[1px] h-8 rounded-r-[5px] border-r-4 border-transparent"></span>
                  <FaQuestion size={18} />
                  About us
                </Link>
              </li>
              <li
                className={cn(
                  `${
                    currentRoute.pathname === "/admin/resource" ||
                    currentRoute.pathname.startsWith("/admin/resource")
                      ? "active"
                      : ""
                  } my-[2px] h-10 nav`
                )}
              >
                <Link
                  to="/admin/resource"
                  className="flex gap-2 items-center py-2  h-8 leading-tight relative"
                >
                  <span className="w-[1px] h-8 rounded-r-[5px] border-r-4 border-transparent"></span>
                  <File size={18} />
                  Resource
                </Link>
              </li>
              <li
                className={cn(
                  `${
                    currentRoute.pathname === "/admin/team" ||
                    currentRoute.pathname.startsWith("/admin/team")
                      ? "active"
                      : ""
                  } my-[2px] h-10 nav`
                )}
              >
                <Link
                  to="/admin/team"
                  className="flex gap-2 items-center py-2  h-8 leading-tight relative"
                >
                  <span className="w-[1px] h-8 rounded-r-[5px] border-r-4 border-transparent"></span>
                  <Users size={18} />
                  Organogram (Team)
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
                  <FiMic size={18} />
                  Events
                </Link>
              </li>
              <li
                className={cn(
                  `${
                    currentRoute.pathname === "/admin/livestream" ||
                    currentRoute.pathname.startsWith("/admin/livestream")
                      ? "active"
                      : ""
                  } my-[2px] h-10 nav`
                )}
              >
                <Link
                  to="/admin/livestream"
                  className="flex gap-2 items-center py-2  h-8 leading-tight relative"
                >
                  <span className="w-[1px] h-8 rounded-r-[5px] border-r-4 border-transparent"></span>
                  <Video size={18} />
                  Livestream
                </Link>
              </li>
              <li
                className={cn(
                  `${
                    currentRoute.pathname === "/admin/banner" ||
                    currentRoute.pathname.startsWith("/admin/banner")
                      ? "active"
                      : ""
                  } my-[2px] h-10 nav`
                )}
              >
                <Link
                  to="/admin/banner"
                  className="flex gap-2 items-center py-2  h-8 leading-tight relative"
                >
                  <span className="w-[1px] h-8 rounded-r-[5px] border-r-4 border-transparent"></span>
                  <HiOutlineFilm size={18} />
                  Banner
                </Link>
              </li>
              <li
                className={cn(
                  `${
                    currentRoute.pathname === "/admin/ministry" ||
                    currentRoute.pathname.startsWith("/admin/ministry")
                      ? "active"
                      : ""
                  } my-[2px] h-10 nav`
                )}
              >
                <Link
                  to="/admin/ministry"
                  className="flex gap-2 items-center py-2  h-8 leading-tight relative"
                >
                  <span className="w-[1px] h-8 rounded-r-[5px] border-r-4 border-transparent"></span>
                  <FiBookOpen size={18} />
                  Ministry
                </Link>
              </li>
              <li
                className={cn(
                  `${
                    currentRoute.pathname === "/admin/blog" ||
                    currentRoute.pathname.startsWith("/admin/blog")
                      ? "active"
                      : ""
                  } my-[2px] h-10 nav`
                )}
              >
                <Link
                  to="/admin/blog"
                  className="flex gap-2 items-center py-2  h-8 leading-tight relative"
                >
                  <span className="w-[1px] h-8 rounded-r-[5px] border-r-4 border-transparent"></span>
                  <BookAIcon size={18} />
                  Blog
                </Link>
              </li>
              <li
                className={cn(
                  `${
                    currentRoute.pathname === "/admin/setting" && "active"
                  } my-[2px] h-10 nav`
                )}
              >
                <Link
                  to="/admin/setting"
                  className="flex gap-2 items-center py-2  h-8 leading-tight relative"
                >
                  <span className="w-[1px] h-8 rounded-r-[5px] border-r-4 border-transparent"></span>
                  <SettingsIcon size={18} />
                  Setting
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full">
            <Button
              className="bg-[#474747] w-full  justify-start flex items-center gap-2 rounded-[8px] text-white font-[600] p-2 hover:bg-[rgb(71,71,71,.8)]"
              onClick={() => handleLogOut()}
            >
              <Power size={18} />
              Logout
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideNav;
