import { Link, useLocation } from "react-router-dom";
import Logo from "../../../assets/images/rbti_logo.png";
import { FiAlignRight, FiX } from "react-icons/fi";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const RBTI_Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [toggle, setToggle] = useState(false);
  const location = useLocation();

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

  const navigation = [
    {
      name: "about rbti",
      link: "/rbti/",
    },
    {
      name: "objectives of rbti",
      link: "/rbti/",
    },
    {
      name: "financial requirement",
      link: "/rbti/",
    },
    {
      name: "spiritual formation",
      link: "/rbti/",
    },
    {
      name: "candidate responsiblity",
      link: "/rbti/",
    },
    {
      name: "organogram",
      link: "/rbti/",
    },
  ];

  return (
    <>
      <header
        className={cn(
          `h-[120px] flex items-center  md:bg-transparent sticky md:relative top-0 transition-all delay-75 duration-300 ${
            scrolled && "bg-[whitesmoke]"
          }`
        )}
      >
        <div className="container flex items-center justify-between w-[90%] md:w-[1200px] mx-auto ">
          <div className="flex items-center justify-between w-full">
            <Link to="/">
              <img
                src={Logo}
                alt="website logo"
                className="w-[80px] md:w-[100px] h-[80px] md:h-[100px] object-contain"
              />
            </Link>
            <FiAlignRight
              className={cn(
                `flex md:hidden text-[40px] -mt-3 rounded-[5px] cursor-pointer  text-white hover:text-[--text-hover] transition-all delay-75 duration-300 ${
                  scrolled && "bg-[--primary-bg] px-[5px]"
                } `
              )}
              onClick={handleToggle}
            />
          </div>
        </div>
        {toggle && (
          <>
            <div className="flex-col flex w-full bg-[--secondary-bg] fixed top-0 z-50 justify-center text-center h-screen items-center transition-all delay-100 duration-300">
              <div className="absolute top-[20px] right-8">
                <FiX
                  className="text-[40px] bg-[--primary-bg] rounded-[5px] p-2 cursor-pointer text-white hover:text-[--text-hover] transition-all delay-75"
                  onClick={handleToggle}
                />
              </div>
              <ul
                className={`font-lato items-center leading-loose uppercase tracking-wide text-white font-[500]`}
              >
                <li className="hover:text-[--text-hover] transition-all delay-75 duration-300 border-b-[1px] border-b-transparent pb-2  hover:border-b-[--text-hover] my-[2px] text-[18px]">
                  <Link
                    to="/"
                    onClick={handleToggle}
                    className={cn(
                      `${location.pathname === "/" && "text-[--active]"}`
                    )}
                  >
                    Home
                  </Link>
                </li>

                {navigation.map((nav, index) => (
                  <li
                    className="hover:text-[--text-hover] transition-all delay-75 duration-300 border-b-[1px] border-b-transparent pb-2  hover:border-b-[--text-hover] my-[2px] text-[18px]"
                    key={index}
                  >
                    <Link
                      to="/"
                      onClick={handleToggle}
                      className={cn(
                        `${location.pathname === "/" && "text-[--active]"}`
                      )}
                    >
                      {nav?.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}
      </header>
    </>
  );
};

export default RBTI_Header;