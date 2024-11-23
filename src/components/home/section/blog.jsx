import Card from "@/components/card";
import { Button } from "@/components/ui/button";

const BlogSection = () => {
  return (
    <>
      <div className="flex w-full bg-[rgba(255,0,0,0.1)]">
        <div className="container md:w-[1200px] mx-auto text-[--text-black] flex flex-col py-10">
          <div className="flex w-full justify-center flex-col text-center">
            <h1 className="text-[40px] font-gothic font-[400] text-[--text-black]">
              Our Blog
            </h1>
            <p className="text-sm font-lato font-[400] text-[--text-black]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Pariatur, reiciendis!
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 p-5 gap-5">
            <div className="bg-[whitesmoke] shadow-sm rounded-[5px] overflow-hidden">
              <Card
                title="Blog Content Title Will be Here and be clickable"
                date="22nd November, 2024"
                tags="Spiritual,Youth Ministry"
              />
            </div>
            <div className="bg-[whitesmoke] shadow-sm rounded-[5px] overflow-hidden">
              <Card
                title="Blog Content Title Will be Here and be clickable"
                date="22nd November, 2024"
                tags="Spiritual,Youth Ministry"
              />
            </div>
            <div className="bg-[whitesmoke] shadow-sm rounded-[5px] overflow-hidden">
              <Card
                title="Blog Content Title Will be Here and be clickable"
                date="22nd November, 2024"
                tags="Spiritual,Youth Ministry"
              />
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Button className="bg-[rgba(0,0,0,0.8)] text-[#ccc] rounded-full w-fit text-[12px] font-[400] font-lato">
              View all blog posts
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogSection;
