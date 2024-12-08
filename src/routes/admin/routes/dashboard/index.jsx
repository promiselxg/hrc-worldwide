import { useContext, useEffect } from "react";
import DashboardCard from "../../components/dashboard-card";
import Header from "../../components/header";
import { BookA } from "lucide-react";
import { cn } from "@/lib/utils";
import { columns } from "@/components/table/resources/columns";
import { ResourcesTable } from "@/components/table/resources/data-table";
import { AuthContext } from "@/context/auth.context";
import useFetch from "@/hooks/useFetch";

const Dashboard = () => {
  //const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);
  const { loading, data } = useFetch("/resource");

  useEffect(() => {
    if (!user) {
      window.location = "/admin/login";
    }
  }, [user]);

  return (
    <>
      <section className="w-full flex h-screen flex-col gap-y-5 p-5 overflow-y-scroll bg-[whitesmoke]">
        <Header />
        <div className="w-full">
          <div className="w-full grid md:grid-cols-4  grid-cols-1 gap-3">
            <DashboardCard
              title="Revenue"
              bg="whitesmoke"
              loading={loading}
              value={4}
            />
            <DashboardCard
              title="Transaction count"
              icon={<BookA color="orange" />}
              value={3}
              bg="whitesmoke"
              loading={loading}
              bgColor="darkblue"
            />
            <DashboardCard
              title="Pending Transactions"
              value="0"
              bg="whitesmoke"
              loading={loading}
              bgColor="darkred"
            />
            <DashboardCard
              title="Completed Transactions"
              value={10}
              bg="whitesmoke"
              bgColor="green"
              loading={loading}
            />
          </div>
        </div>
        <div className="w-full">
          <div className="p-5 bg-white rounded-[12px]">
            <div className="flex items-center justify-between w-full my-5">
              <h1 className={cn(`capitalize font-[600]`)}>Resources</h1>
            </div>
            <ResourcesTable columns={columns} data={data} loading={loading} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
