import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Cross } from "lucide-react";
import { Link } from "react-router-dom";
import DashboardCard from "../../components/dashboard-card";
import { useState } from "react";
import { EventTable } from "@/components/table/event/data-table";
import { columns } from "@/components/table/event/columns";
import { events } from "@/components/table/event/data";

const EventPage = () => {
  const [loading, setLoading] = useState(false);
  return (
    <>
      <section className="w-full flex h-screen flex-col gap-y-5 p-5 overflow-y-scroll bg-[whitesmoke]">
        <div className="w-full">
          <div className="w-full grid md:grid-cols-4  grid-cols-1 gap-3">
            <DashboardCard
              title="Total Events"
              value={2}
              bg="whitesmoke"
              desc="Total number of events"
              loading={loading}
            />
            <DashboardCard
              title="Published Events"
              value={2}
              bg="whitesmoke"
              loading={loading}
              desc="Total number of published events"
            />
            <DashboardCard
              title="Drafts"
              value={2}
              bg="whitesmoke"
              loading={loading}
              desc="Total number of un-published events"
            />
          </div>
        </div>
        <div className="flex md:items-center md:justify-between w-full my-5 md:my-10 flex-col md:flex-row justify-start items-start">
          <h1 className={cn(`text-[16px] uppercase font-[600] my-4 md:my-0`)}>
            Event Management
          </h1>
          <Link to="/admin/drivers/add">
            <Button className="flex gap-2 items-center border-none outline-none bg-[--primary-bg] hover:bg-[--secondary-bg] text-white transition-all delay-75 rounded-[5px]">
              <Cross size={13} /> create new event
            </Button>
          </Link>
        </div>
        <EventTable columns={columns} data={events} loading={loading} />
      </section>
    </>
  );
};

export default EventPage;
