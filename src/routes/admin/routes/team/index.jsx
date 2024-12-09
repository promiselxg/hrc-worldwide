import { cn } from "@/lib/utils";
import { TeamTable } from "@/components/table/team/data-table";
import { columns } from "@/components/table/team/columns";

import useFetch from "@/hooks/useFetch";

const TeamPage = () => {
  const { loading, data } = useFetch("/team");
  return (
    <>
      <section className="w-full flex h-screen flex-col gap-y-5 p-5 overflow-y-scroll bg-[whitesmoke]">
        <div className="flex md:items-center md:justify-between w-full  flex-col md:flex-row justify-start items-start">
          <h1 className={cn(`text-[16px] uppercase font-[600] my-4 md:my-0`)}>
            Manage Team
          </h1>
        </div>
        <TeamTable columns={columns} data={data} loading={loading} />
      </section>
    </>
  );
};

export default TeamPage;
