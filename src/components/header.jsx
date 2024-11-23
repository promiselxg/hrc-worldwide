import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { NavigationMenuDemo } from "./navigation-menu";
import { FiAlignRight, FiX } from "react-icons/fi";

const Header = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <header
        className={cn(
          `flex w-full h-[80px] text-[rgba(0,0,0,0.7)]  top-0 left-0 transition-colors duration-300 z-50 ${
            scrolled ? "bg-[#f5f5f5] shadow-md" : "bg-transparent"
          } ${
            location.pathname === "/" ? "fixed" : "sticky bg-[--primary-bg] "
          } `
        )}
      >
        <div className="container mx-[30px] flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/">
              <img
                src={Logo}
                alt="website logo"
                className="w-[80px] h-[60px] object-contain"
              />
            </Link>
          </div>
          <nav className="hidden md:flex w-fit justify-center">
            <ul
              className={cn(
                `flex gap-6 text-[16px] uppercase font-lato font-[600] text-white transition-all duration-300 ${
                  scrolled && "text-[#000]"
                } ${location.pathname !== "/" && scrolled && "text-white"}`
              )}
            >
              <li>
                <Link to="/">About us</Link>
              </li>
              <NavigationMenuDemo />
              <li>
                <Link to="/events">events</Link>
              </li>
              <li>
                <Link to="/">RBTI</Link>
              </li>
              <li>
                <Link to="/">blog</Link>
              </li>
              <li>
                <Link to="/">contact us</Link>
              </li>
            </ul>
          </nav>
          <div className="hidden md:flex items-center gap-4 w-fit">
            <Button
              variant="outline"
              className={cn(
                `bg-transparent border border-[rgba(255,255,255,.3)] text-white rounded-full px-5 py-2 text-[12px] font-normal transition-all delay-300 duration-300 ${
                  scrolled && "text-[#000] border-[#ccc]"
                } ${location.pathname !== "/" && scrolled && "text-white"}`
              )}
            >
              Give
            </Button>
            <Button
              variant="outline"
              className={cn(
                `bg-transparent border border-[rgba(255,255,255,.3)] text-white px-5 py-2 text-[12px] font-normal rounded-full transition-all delay-300 duration-300 ${
                  scrolled && "text-[#000] border-[#ccc]"
                } ${location.pathname !== "/" && scrolled && "text-white"}`
              )}
            >
              live stream
            </Button>
          </div>
          <FiAlignRight
            className={cn(
              `flex md:hidden text-[40px]  rounded-[5px] cursor-pointer  text-white hover:text-[--text-hover] transition-all delay-75 duration-300 ${
                scrolled && "bg-[--primary-bg] px-[5px]"
              } `
            )}
            onClick={handleToggle}
          />
        </div>
      </header>
      {toggle && (
        <>
          <div className="flex w-full bg-[--secondary-bg] fixed top-0 z-50 justify-center text-center h-screen items-center transition-all delay-100 duration-300">
            <div className="absolute top-[20px] right-8">
              <FiX
                className="text-[40px] bg-[--primary-bg] rounded-[5px] p-2 cursor-pointer text-white hover:text-[--text-hover] transition-all delay-75"
                onClick={handleToggle}
              />
            </div>
            <ul
              className={`font-lato items-center leading-loose uppercase tracking-wide text-white font-[500]`}
            >
              <li className="hover:text-[--text-hover] transition-all delay-75 duration-300 border-b-[1px] border-b-transparent pb-2  hover:border-b-[--text-hover] my-[2px] text-[20px]">
                <Link to="/" onClick={handleToggle}>
                  Home
                </Link>
              </li>
              <li className="hover:text-[--text-hover] transition-all delay-75 duration-300 border-b-[1px] border-b-transparent pb-2  hover:border-b-[--text-hover] my-[2px] text-[20px]">
                <Link to="/" onClick={handleToggle}>
                  About us
                </Link>
              </li>
              <li className="hover:text-[--text-hover] transition-all delay-75 duration-300 border-b-[1px] border-b-transparent pb-2  hover:border-b-[--text-hover] my-[2px] text-[20px]">
                <Link to="/" onClick={handleToggle}>
                  Resources
                </Link>
              </li>
              <li className="hover:text-[--text-hover] transition-all delay-75 duration-300 border-b-[1px] border-b-transparent pb-2  hover:border-b-[--text-hover] my-[2px] text-[20px]">
                <Link to="/resources" onClick={handleToggle}>
                  Ministries
                </Link>
              </li>
              <li className="hover:text-[--text-hover] transition-all delay-75 duration-300 border-b-[1px]  border-b-transparent pb-2 hover:border-b-[--text-hover] my-[2px] text-[20px]">
                <Link to="/events" onClick={handleToggle}>
                  Events
                </Link>
              </li>
              <li className="hover:text-[--text-hover] transition-all delay-75 duration-300 border-b-[1px] border-b-transparent pb-2 hover:border-b-[--text-hover] my-[2px] text-[20px]">
                <Link to="/" onClick={handleToggle}>
                  RBTI
                </Link>
              </li>
              <li className="hover:text-[--text-hover] transition-all delay-75 duration-300 border-b-[1px]  border-b-transparent pb-2 hover:border-b-[--text-hover] my-[2px] text-[20px]">
                <Link to="/" onClick={handleToggle}>
                  Blog
                </Link>
              </li>
              <li className="hover:text-[--text-hover] transition-all delay-75 duration-300 border-b-[1px] border-b-transparent pb-2 hover:border-b-[--text-hover] my-[2px] text-[20px]">
                <Link to="/" onClick={handleToggle}>
                  Contact us
                </Link>
              </li>
            </ul>
          </div>
        </>
      )}
    </>
  );
};

export default Header;
