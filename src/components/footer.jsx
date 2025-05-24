import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import { SendIcon } from "lucide-react";
import { FiFacebook, FiYoutube, FiTiktok } from "react-icons/fi";

const Footer = () => {
  return (
    <>
      <footer className="flex w-full bg-[--footer-bg]  h-fit items-center py-10 ">
        <div className="container md:w-[1200px] mx-auto text-white">
          <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
            <div className="md:border-r-[1px] md:border-[rgba(255,255,255,.3)] flex justify-center items-center flex-col">
              <img src={Logo} alt="logo" className="w-[120px] h-[80px]" />
              <h1 className="text-[50px] font-gothic">hrcc international</h1>
            </div>

            <div className="md:border-r-[1px] md:border-[rgba(255,255,255,.3)] flex  flex-col justify-center text-center items-center">
              <h1 className="font-lato text-[18px] md:text-[20px] font-[600] mb-1 uppercase">
                Quick links
              </h1>
              <ul className="text-[#d9d9d9] flex flex-col gap-2 mt-2">
                <li className="hover:text-[#FFE5E5] hover:underline transition-all duration-100 delay-300">
                  <Link to="/">Download MP3</Link>
                </li>
                <li className="hover:text-[#FFE5E5] hover:underline transition-all duration-100 delay-300">
                  <Link to="/">Blog</Link>
                </li>
                <li className="hover:text-[#FFE5E5] hover:underline transition-all duration-100 delay-300">
                  <Link to="/">First timers</Link>
                </li>
                <li className="hover:text-[#FFE5E5] hover:underline transition-all duration-100 delay-300">
                  <Link to="/">RBTI</Link>
                </li>
              </ul>
            </div>

            <div className="flex flex-col items-center ">
              <div className="w-full max-w-[70%] flex flex-col md:items-start items-center">
                <h1 className="font-lato text-[18px] md:text-[20px] font-[600] text-left uppercase">
                  Join our mailing list
                </h1>
                <div className="w-full flex px-3 py-1 border border-[rgba(255,255,255,.3)] rounded-[5px] items-center my-3">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full bg-transparent outline-none border-none"
                  />
                  <SendIcon className="rotate-45" size={20} />
                </div>
              </div>
            </div>
          </div>
          <div className="md:border-t-[1px] md:border-[rgba(255,255,255,.3)] flex justify-between md:w-[1000px] mx-auto mt-5 py-5 flex-col md:flex-row  items-center md:items-start gap-4 md:gap-0">
            <div>
              <p className="text-sm font font-[400]">
                &copy; Copyright HRCC international. All Right Reserved 2024
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span>
                <a
                  href="https://www.facebook.com/share/1C4NNtTSdw/"
                  className="hover:text-[#FFE5E5] transition-all delay-300 duration-300"
                >
                  <FiFacebook size={25} />
                </a>
              </span>
              <span>
                <a
                  href=""
                  className="hover:text-[#FFE5E5] transition-all delay-300 duration-300"
                >
                  <SendIcon size={25} />
                </a>
              </span>
              <span>
                <a
                  href="/"
                  className="hover:text-[#FFE5E5] transition-all delay-300 duration-300"
                >
                  <FiYoutube size={25} />
                </a>
              </span>
              <span>
                <a
                  href="https://www.facebook.com/share/1C4NNtTSdw/"
                  className="hover:text-[#FFE5E5] transition-all delay-300 duration-300"
                >
                  <FiTiktok size={25} />
                </a>
              </span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
