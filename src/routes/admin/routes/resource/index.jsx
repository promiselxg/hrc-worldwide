import { cn } from "@/lib/utils";
import DashboardCard from "../../components/dashboard-card";
import { ResourcesTable } from "@/components/table/resources/data-table";

import { columns } from "@/components/table/resources/columns";
import useFetch from "@/hooks/useFetch";
import { FileAudio, FileVideo } from "lucide-react";

const ResourcesPage = () => {
  const { loading, data } = useFetch("/resource");
  return (
    <>
      <section className="w-full flex h-screen flex-col gap-y-5 p-5 overflow-y-scroll bg-[whitesmoke]">
        <div className="w-full">
          <div className="w-full grid md:grid-cols-4  grid-cols-1 gap-3">
            <DashboardCard
              title="Video"
              value={2}
              bg="green"
              loading={loading}
              bgColor="darkblue"
              icon={<FileVideo />}
            />
            <DashboardCard
              title="Audio"
              value={2}
              bg="red"
              loading={loading}
              bgColor="darkred"
              icon={<FileAudio />}
            />
          </div>
        </div>
        <div className="flex md:items-center md:justify-between w-full  flex-col md:flex-row justify-start items-start">
          <h1 className={cn(`text-[16px] uppercase font-[600] my-4 md:my-0`)}>
            Management Resources
          </h1>
        </div>
        <ResourcesTable columns={columns} data={data} loading={loading} />
      </section>
    </>
  );
};

export default ResourcesPage;
