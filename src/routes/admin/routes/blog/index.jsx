import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Cross } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { BlogTable } from "@/components/table/blog/data-table";
import { columns } from "@/components/table/blog/columns";
import { blog } from "@/components/table/blog/data";

const BlogPage = () => {
  const [loading, setLoading] = useState(false);
  return (
    <>
      <section className="w-full flex h-screen flex-col gap-y-5 p-5 overflow-y-scroll bg-[whitesmoke]">
        <div className="flex md:items-center md:justify-between w-full my-5 md:my-10 flex-col md:flex-row justify-start items-start">
          <h1 className={cn(`text-[16px] uppercase font-[600] my-4 md:my-0`)}>
            Blog Management
          </h1>
          <Link to="/admin/blog/add">
            <Button className="flex gap-2 items-center border-none outline-none bg-[--primary-bg] hover:bg-[--secondary-bg] text-white transition-all delay-75 rounded-[5px]">
              <Cross size={13} /> create new blog post
            </Button>
          </Link>
        </div>
        <BlogTable columns={columns} data={blog} loading={loading} />
      </section>
    </>
  );
};

export default BlogPage;
