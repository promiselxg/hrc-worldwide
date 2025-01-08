import BgWrapper from "@/components/bg-wrapper";
import Card from "@/components/card";
import { Skeleton } from "@/components/ui/skeleton";
import useFetch from "@/hooks/useFetch";
import SEO from "@/lib/seo";
import { formatDateWithoutTime } from "@/utils/getDateDifference";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";

const Blog = () => {
  const { loading, data } = useFetch("/blog");
  const [searchKeyword, setSearchKeyword] = useState("");

  const filteredBlog = data?.filter((blog) =>
    blog?.blog_title?.toLowerCase()?.includes(searchKeyword?.toLowerCase())
  );

  return (
    <>
      <SEO
        title="House of Restoration Church of Christ Int'l | Our Blog"
        description="About House of Restoration Church of Christ Int'l"
        name="House of Restoration Church of Christ Int'l"
        type="error page"
      />
      <div className="flex w-full flex-col">
        <BgWrapper>
          <div className="container md:w-[1200px] mx-auto w-[90%]">
            <div>
              <h1 className="text-[--primary-bg] font-gothic font-[400] text-[50px] leading-tight">
                Our Blog.
              </h1>
              <p className="text-[--primary-bg] font-[400] font-lato text-sm">
                Browse messages,articles and events.
              </p>
            </div>
          </div>
        </BgWrapper>
        <div className="w-full flex text-[--primary-bg] ">
          <div className="container mx-auto w-[90%] md:w-[1000px] py-10">
            <div className="flex flex-col justify-center items-center gap-5">
              <div className="w-full shadow-md flex  items-center p-5 rounded-[30px] border border-[rgba(0,0,0,0.1)]">
                <input
                  type="search"
                  value={searchKeyword}
                  onChange={(e) => setSearchKeyword(e.target.value)}
                  placeholder="Enter keyword to search."
                  className="w-full outline-none border-0 bg-transparent text-[14px] text-[--text-black] font-lato font[400]"
                />
                <FiSearch size={20} className="text-[#ccc]" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full bg-[white]">
          <div className="container md:w-[1200px] mx-auto">
            <div className="w-full md:pb-20 ">
              <div className="w-full flex mt-8">
                {loading ? (
                  <div className="p-5 w-full space-y-2">
                    <Skeleton className="h-2 w-full bg-[#171726] rounded-full" />
                    <Skeleton className="h-2 w-2/3 bg-[#212136] rounded-full" />
                    <Skeleton className="h-2 w-1/3 bg-[#0d0d16] rounded-full" />
                  </div>
                ) : (
                  <div className="grid md:w-full w-[90%] mx-auto md:grid-cols-4 gap-4 text-[--text-black]">
                    {filteredBlog.map((post) => (
                      <div
                        className="shadow-md rounded-sm overflow-hidden"
                        key={post.id}
                      >
                        <Card
                          title={post?.blog_title}
                          date={formatDateWithoutTime(post?.createdAt)}
                          tags={post?.blog_tag}
                          url={`/blog/${post.id}`}
                          imgUrl={post?.image_url}
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
