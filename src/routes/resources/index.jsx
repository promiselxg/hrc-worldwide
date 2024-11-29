import BgWrapper from "@/components/bg-wrapper";
import { FiSearch } from "react-icons/fi";
import ResourceCard from "./resource-card";
import ServiceBanner from "@/components/service-banner";
import SEO from "@/lib/seo";

const Resources = () => {
  return (
    <>
      <SEO
        title="House of Restoration Church of Christ Int'l | Resources"
        description="House of Restoration Church of Christ Int'l"
        name="House of Restoration Church of Christ Int'l"
        type="resources"
      />
      <div className="flex w-full flex-col">
        <BgWrapper>
          <div className="container md:w-[1200px] mx-auto md:pb-[40px] w-[90%]">
            <div>
              <h1 className="text-[--primary-bg] font-gothic font-[400] text-[50px] leading-tight">
                Resources.
              </h1>
              <p className="text-[--primary-bg] font-[400] font-lato text-sm">
                Browse messages and audio.
              </p>
            </div>
          </div>
        </BgWrapper>
        <div className="w-full flex text-[--primary-bg] ">
          <div className="container mx-auto w-[90%] md:w-[1000px] py-10">
            <div className="flex flex-col justify-center items-center gap-5">
              <h1 className="text-[18px] md:text-[20px] font-lato font-[400] md:uppercase leading-tight">
                Search and download all our messages
              </h1>
              <div className="w-full shadow-md flex  items-center p-5 rounded-[30px] border border-[rgba(0,0,0,0.1)]">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Enter message title to search."
                  className="w-full outline-none border-0 bg-transparent text-[14px] text-[--text-black] font-lato font[400]"
                />
                <FiSearch size={20} className="text-[#ccc]" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full">
          <div className="container mx-auto w-[90%] md:w-[1200px] mb-10">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
              <div className="bg-[whitesmoke] shadow-md rounded-[5px] overflow-hidden">
                <ResourceCard
                  mediaUrl="https://youtu.be/2LRLsMracAY?si=MVZutLmCRr-WpU_s"
                  title="Video media resource"
                  mediaType="video"
                  preacher="Preacher name goes here."
                  date="22/11/2024"
                />
              </div>
              <div className="bg-[whitesmoke] shadow-md rounded-[5px] overflow-hidden">
                <ResourceCard
                  mediaUrl="https://storage.googleapis.com/media-session/elephants-dream/the-wires.mp3"
                  title="Video media resource"
                  mediaType="audio"
                  preacher="Preacher name goes here."
                  date="22/11/2024"
                />
              </div>
              <div className="bg-[whitesmoke] shadow-md rounded-[5px] overflow-hidden">
                <ResourceCard
                  mediaUrl="https://youtu.be/2LRLsMracAY?si=MVZutLmCRr-WpU_s"
                  title="Video media resource"
                  mediaType="video"
                  preacher="Preacher name goes here."
                  date="22/11/2024"
                />
              </div>
              <div className="bg-[whitesmoke] shadow-md rounded-[5px] overflow-hidden">
                <ResourceCard
                  mediaUrl="https://storage.googleapis.com/media-session/elephants-dream/the-wires.mp3"
                  title="Video media resource"
                  mediaType="audio"
                  preacher="Preacher name goes here."
                  date="22/11/2024"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <ServiceBanner />
    </>
  );
};

export default Resources;
