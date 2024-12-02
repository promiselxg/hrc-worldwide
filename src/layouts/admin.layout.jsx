import { cn } from "@/lib/utils";
import SideNav from "@/routes/admin/components/sidenav";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <>
      <section className={cn(`w-full h-fit flex md:h-screen overflow-hidden`)}>
        <SideNav />
        <div className="bg-[whitesmoke] h-screen w-full overflow-hidden relative py-2">
          <Outlet />
        </div>
      </section>
    </>
  );
};

export default AdminLayout;
