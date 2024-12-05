import { cn } from "@/lib/utils";
import SideNav from "@/routes/admin/components/sidenav";
import { Outlet, useLocation } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";

const AdminLayout = () => {
  const location = useLocation();
  return (
    <>
      <section className={cn(`w-full h-fit flex md:h-screen overflow-hidden`)}>
        {location.pathname !== "/admin/login" ? <SideNav /> : ""}
        <div className="bg-[whitesmoke] h-screen w-full overflow-hidden relative">
          <Outlet />
          <Toaster />
        </div>
      </section>
    </>
  );
};

export default AdminLayout;
