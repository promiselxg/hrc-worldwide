import SelectStreamOption from "@/components/livestream/select-stream-option";
import { Link, Outlet, useLocation } from "react-router-dom";
import BgVid from "../assets/vid.mp4";
import Logo from "../assets/images/logo.png";

const LiveStreamLayout = () => {
  const location = useLocation();
  return (
    <div className="relative w-full min-h-screen overflow-hidden text-white flex flex-col">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md py-3">
        <div className="container mx-auto w-[90%] flex items-center gap-4">
          <Link to="/livestream" className="flex items-center gap-2">
            <img
              src={Logo}
              alt="website logo"
              className="w-[60px] h-[50px] object-contain"
            />
            <h1 className="text-white font-lato text-lg md:text-2xl hidden md:flex">
              House of Restoration Church of Christ
            </h1>
          </Link>
        </div>
      </header>

      {/* Background Video */}
      {location.pathname === "/livestream" && (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="fixed top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src={BgVid} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}

      {/* Overlay */}
      <div className="fixed top-0 left-0 w-full h-full bg-black/80 z-10" />

      {/* Page Content */}
      <main className="relative z-20 w-full flex-grow flex items-center justify-center px-4 pt-28 pb-12">
        <div className="w-full max-w-6xl mx-auto flex flex-col items-center space-y-6 text-center">
          {location.pathname === "/livestream" && <SelectStreamOption />}
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default LiveStreamLayout;
