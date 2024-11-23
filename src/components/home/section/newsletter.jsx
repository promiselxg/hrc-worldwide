import { cn } from "@/lib/utils";
import NewsletterBg from "../../../assets/images/church-bg.png";
import { Button } from "@/components/ui/button";

const NewsletterSection = () => {
  return (
    <>
      <div
        className={cn(
          "flex w-full h-[400px] bg-cover bg-left relative items-center"
        )}
        style={{ backgroundImage: `url(${NewsletterBg})` }}
      >
        <div className="container md:w-[1200px] mx-auto text-[--text-black]">
          <div className="md:px-[50px] flex flex-col md:flex-row gap-8 items-center">
            <div className="w-[80%] md:w-[60%]">
              <h2 className="text-[40px] md:text-[60px] font-[400] font-gothic leading-[1.1] text-[--text-black]">
                <span className="md:block">
                  Ready to begin this New Experience
                </span>
                <span className="md:block">
                  with Christ or you are joining us
                </span>
                <span className="md:block">for the first time?</span>
              </h2>
            </div>
            <div className="md:w-[40%]">
              <Button className="bg-[rgba(0,0,0,0.8)] text-[#ccc] rounded-full w-fit text-[12px] font-[400] font-lato">
                JOIN US TO EXPERIENCE A NEW LIFE IN CHRIST
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsletterSection;
