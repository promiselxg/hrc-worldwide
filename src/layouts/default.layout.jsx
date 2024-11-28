import Footer from "@/components/footer";
import Header from "@/components/header";
import HeroWithHeader from "@/components/home/heroWithHeader";
import { Outlet, useLocation } from "react-router-dom";

const Layout = () => {
  const location = useLocation();

  return (
    <>
      <div className="flex w-full flex-col text-white">
        {location.pathname === "/" || location.pathname === "/livestream" ? (
          <HeroWithHeader />
        ) : (
          <Header />
        )}
        <main>
          <Outlet />
        </main>
        {location.pathname !== "/livestream" && <Footer />}
      </div>
    </>
  );
};

export default Layout;
