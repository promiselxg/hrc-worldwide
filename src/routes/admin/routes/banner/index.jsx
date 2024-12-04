import { cn } from "@/lib/utils";
import { useState } from "react";
import { BannerTable } from "@/components/table/banner/data-table";
import { banner } from "@/components/table/banner/data";
import { columns } from "@/components/table/banner/columns";

const BannerPage = () => {
  const [loading, setLoading] = useState(false);
  return (
    <>
      <section className="w-full flex h-screen flex-col gap-y-5 p-5 overflow-y-scroll bg-[whitesmoke]">
        <div className="flex md:items-center md:justify-between w-full flex-col md:flex-row justify-start items-start">
          <h1 className={cn(`text-[16px] uppercase font-[600] my-4 md:my-0`)}>
            Banner Management
          </h1>
        </div>
        <BannerTable columns={columns} data={banner} loading={loading} />
      </section>
    </>
  );
};

export default BannerPage;
