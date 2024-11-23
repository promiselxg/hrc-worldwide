import SectionAbout from "@/components/home/section/about";
import BlogSection from "@/components/home/section/blog";
import EventSection from "@/components/home/section/event";
import NewsletterSection from "@/components/home/section/newsletter";
import { EventSlider } from "@/components/slider/eventSection.slider";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import NewsletterBg from "../../assets/images/church-bg.png";

const Home = () => {
  return (
    <>
      <SectionAbout />
      {/* <EventSection /> */}
      <EventSlider />
      <NewsletterSection />
      <BlogSection />
      <div
        className={cn(
          "flex w-full h-[200px] bg-cover bg-left relative items-center"
        )}
        style={{ backgroundImage: `url(${NewsletterBg})` }}
      >
        <div className="container md:w-[1200px] mx-auto text-[--text-black]">
          <div className="px-[25px] md:px-[50px] flex gap-4 md:gap-8 items-center flex-col md:flex-row">
            <div className="md:w-[60%]">
              <h2 className="text-[30px] md:text-[60px] font-[400] font-gothic leading-[1.1] text-[--text-black]">
                Let&apos;s Guide you on the right path.
              </h2>
            </div>
            <div className="md:w-[40%] justify-end items-end flex">
              <Button className="bg-[rgba(0,0,0,0.8)] text-[#ccc] rounded-full w-fit text-[12px] font-[400] font-lato">
                BOOK FOR COUNSELLING
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;