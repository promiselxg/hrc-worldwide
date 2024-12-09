import { useContext, useEffect } from "react";
import DashboardCard from "../../components/dashboard-card";
import { BookA } from "lucide-react";
import { cn } from "@/lib/utils";
import { columns } from "@/components/table/resources/columns";
import { ResourcesTable } from "@/components/table/resources/data-table";
import { AuthContext } from "@/context/auth.context";
import useFetch from "@/hooks/useFetch";
import { FiBook, FiFileText, FiMapPin } from "react-icons/fi";

const Dashboard = () => {
  //const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);
  const { loading, data } = useFetch("/resource");
  const { loading: eventLoading, data: eventData } = useFetch("/event");
  const { loading: blogLoading, data: blogData } = useFetch("/blog");
  const { loading: ministryLoading, data: ministryData } =
    useFetch("/ministry");

  useEffect(() => {
    if (!user) {
      window.location = "/admin/login";
    }
  }, [user]);

  return (
    <>
      <section className="w-full flex h-screen flex-col gap-y-5 p-5 overflow-y-scroll bg-[whitesmoke]">
        <div className="w-full">
          <div className="w-full grid md:grid-cols-4  grid-cols-1 gap-3">
            <DashboardCard
              title="Resources"
              bg="whitesmoke"
              loading={loading}
              value={data?.length || 0}
              icon={<FiFileText color="orange" />}
            />
            <DashboardCard
              title="Ministries"
              icon={<BookA color="orange" />}
              value={ministryData?.length || 0}
              bg="whitesmoke"
              loading={ministryLoading}
              bgColor="darkblue"
            />
            <DashboardCard
              title="Blog Post"
              value={blogData?.length || 0}
              bg="whitesmoke"
              loading={blogLoading}
              bgColor="darkred"
              icon={<FiBook color="orange" />}
            />
            <DashboardCard
              title="Events"
              value={eventData?.length || 0}
              bg="whitesmoke"
              bgColor="green"
              loading={eventLoading}
              icon={<FiMapPin color="orange" />}
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
