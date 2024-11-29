import Footer from "@/components/footer";
import RBTI_Header from "@/routes/rbti/components/header";
import Overlay from "../assets/images/pastor.png";

import { Outlet, useLocation } from "react-router-dom";

const RBTI_Layout = () => {
  const location = useLocation();

  return (
    <>
      <div className="flex w-full flex-col">
        <div
          className="h-full bg-cover relative bg-center"
          style={{
            backgroundImage: `url(${Overlay})`,
          }}
        >
          <div className="absolute top-0 left-0 bg-[rgba(0,0,0,0.6)] w-full h-full"></div>
          <div className="relative z-20">
            <RBTI_Header />
            <main>
              <Outlet />
            </main>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default RBTI_Layout;
