import { cn } from "@/lib/utils";
import { MinistryTable } from "@/components/table/ministry/data-table";
import { columns } from "@/components/table/ministry/columns";
import useFetch from "@/hooks/useFetch";

const MinistryPage = () => {
  const { loading, data } = useFetch("/ministry");
  return (
    <>
      <section className="w-full flex h-screen flex-col gap-y-5 p-5 overflow-y-scroll bg-[whitesmoke]">
        <div className="flex md:items-center md:justify-between w-full  flex-col md:flex-row justify-start items-start">
          <h1 className={cn(`text-[16px] uppercase font-[600] my-4 md:my-0`)}>
            Ministry
          </h1>
        </div>
        <MinistryTable columns={columns} data={data} loading={loading} />
      </section>
    </>
  );
};

export default MinistryPage;
