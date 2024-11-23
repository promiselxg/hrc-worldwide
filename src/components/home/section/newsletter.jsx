import { Button } from "@/components/ui/button";
import BgWrapper from "@/components/bg-wrapper";

const NewsletterSection = () => {
  return (
    <>
      <BgWrapper height="400px">
        <div className="container md:w-[1200px] mx-auto">
          <div className="md:px-[50px] flex flex-col md:flex-row gap-8 items-center">
            <div className="w-[80%] md:w-[60%]">
              <h2 className="text-[40px] md:text-[60px] font-[400] font-gothic leading-[1.1]">
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
      </BgWrapper>
    </>
  );
};

export default NewsletterSection;
