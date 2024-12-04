import { cn } from "@/lib/utils";
import { useState } from "react";
import { AboutUsTable } from "@/components/table/about-us/data-table";
import { columns } from "@/components/table/about-us/columns";
import { about } from "@/components/table/about-us/data";

const AboutUsPage = () => {
  const [loading, setLoading] = useState(false);
  return (
    <>
      <section className="w-full flex h-screen flex-col gap-y-5 p-5 overflow-y-scroll bg-[whitesmoke]">
        <div className="flex md:items-center md:justify-between w-full  flex-col md:flex-row justify-start items-start">
          <h1 className={cn(`text-[16px] uppercase font-[600] my-4 md:my-0`)}>
            About Us
          </h1>
        </div>
        <AboutUsTable columns={columns} data={about} loading={loading} />
      </section>
    </>
  );
};

export default AboutUsPage;
