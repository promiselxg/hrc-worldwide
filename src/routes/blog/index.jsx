import BgWrapper from "@/components/bg-wrapper";
import Card from "@/components/card";
import { FiSearch } from "react-icons/fi";

const Blog = () => {
  return (
    <>
      <div className="flex w-full flex-col">
        <BgWrapper>
          <div className="container md:w-[1200px] mx-auto md:pb-[40px] w-[90%]">
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
                  type="text"
                  name=""
                  id=""
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
                <div className="grid md:w-full w-[90%] mx-auto md:grid-cols-4 gap-4 text-[--text-black]">
                  <div className="shadow-md rounded-sm overflow-hidden">
                    <Card
                      title="Event title"
                      date="26th November, 2024"
                      tags="building your inner man"
                      url="/blog/blogid"
                    />
                  </div>
                  <div className="shadow-md rounded-sm overflow-hidden">
                    <Card
                      title="Event title"
                      date="26th November, 2024"
                      tags="spiritual truth,building your inner man"
                      url="/blog/blogid"
                    />
                  </div>
                  <div className="shadow-md rounded-sm overflow-hidden">
                    <Card
                      title="Event title"
                      date="26th November, 2024"
                      tags="building your inner man"
                      url="/blog/blogid"
                    />
                  </div>
                  <div className="shadow-md rounded-sm overflow-hidden">
                    <Card
                      title="Event title"
                      date="26th November, 2024"
                      tags="building your inner man"
                      url="/blog/blogid"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
