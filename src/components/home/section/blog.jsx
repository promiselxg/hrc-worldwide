import Card from "@/components/card";
import { Button } from "@/components/ui/button";
import useFetch from "@/hooks/useFetch";
import { formatDateWithoutTime } from "@/utils/getDateDifference";
import { Link } from "react-router-dom";

const BlogSection = () => {
  const { data } = useFetch("/blog");

  return (
    <>
      <div className="flex w-full bg-[rgba(255,0,0,0.1)]">
        <div className="container md:w-[1200px] mx-auto text-[--text-black] flex flex-col py-10">
          <div className="flex w-full justify-center flex-col text-center">
            <h1 className="text-[40px] font-gothic font-[400] text-[--text-black]">
              Our Blog
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 p-5 gap-5">
            {data?.map((post) => (
              <div
                className="bg-[whitesmoke] shadow-sm rounded-[5px] overflow-hidden"
                key={post.id}
              >
                <Card
                  title={post?.blog_title}
                  date={formatDateWithoutTime(post?.createdAt)}
                  tags={post?.blog_tag}
                  imgUrl={post?.image_url}
                  url={`/blog/${post?.id}`}
                />
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center">
            <Link to="/blog">
              <Button className="bg-[rgba(0,0,0,0.8)] text-[#ccc] rounded-full w-fit text-[12px] font-[400] font-lato">
                View all blog posts
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogSection;
