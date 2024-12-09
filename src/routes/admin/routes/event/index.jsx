import { cn } from "@/lib/utils";
import { EventTable } from "@/components/table/event/data-table";
import { columns } from "@/components/table/event/columns";
import useFetch from "@/hooks/useFetch";

const EventPage = () => {
  const { loading, data } = useFetch("/event");
  return (
    <>
      <section className="w-full flex h-screen flex-col gap-y-5 p-5 overflow-y-scroll bg-[whitesmoke]">
        <div className="flex md:items-center md:justify-between w-full  flex-col md:flex-row justify-start items-start">
          <h1 className={cn(`text-[16px] uppercase font-[600] my-4 md:my-0`)}>
            Event Management
          </h1>
        </div>
        <EventTable columns={columns} data={data} loading={loading} />
      </section>
    </>
  );
};

export default EventPage;
