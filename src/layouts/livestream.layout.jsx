import SelectStreamOption from "@/components/livestream/select-stream-option";
import { Link, Outlet, useLocation } from "react-router-dom";
import BgVid from "../assets/vid.mp4";
import Logo from "../assets/images/logo.png";
import { cn } from "@/lib/utils";

const LiveStreamLayout = () => {
  const location = useLocation();
  return (
    <div className="flex w-full flex-col text-white">
      <main className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden">
        <div className="w-full mx-auto text-white z-10 absolute top-5">
          <div className="container w-[90%] mx-auto">
            <Link to="/" className="flex items-center gap-2">
              <img
                src={Logo}
                alt="website logo"
                className="w-[80px] h-[60px] object-contain"
              />
              <h1
                className={cn(
                  `text-white font-lato text-[20px] hidden md:flex`
                )}
              >
                House of Restoration Church of Christ
              </h1>
            </Link>
          </div>
        </div>

        {location.pathname === "/livestream" && (
          <video
            autoPlay
            muted
            loop
            className="w-full h-full object-cover absolute top-0 left-0 z-0"
          >
            <source src={BgVid} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
        <div className="absolute inset-0 bg-black/90 z-0" />
        <div className="relative z-10 w-full flex flex-col items-center">
          {location.pathname === "/livestream" && <SelectStreamOption />}
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default LiveStreamLayout;
