import BgWrapper from "@/components/bg-wrapper";
import Banner from "../../assets/images/banner/banner-1.png";
import Banner2 from "../../assets/images/banner/banner-2.png";
import Banner3 from "../../assets/images/banner/banner-3.png";
import Banner4 from "../../assets/images/banner/banner-4.png";
import Banner5 from "../../assets/images/banner/banner-5.png";
import Music from "../../assets/images/banner/music.jpeg";

import ServiceBanner from "@/components/service-banner";
import MinistryCard from "../ministries/ministry-card";
import SEO from "@/lib/seo";
const AboutUs = () => {
  return (
    <>
      <SEO
        title="About House of Restoration Church of Christ Int'l "
        description="About House of Restoration Church of Christ Int'l"
        name="House of Restoration Church of Christ Int'l"
        type="error page"
      />
      <div className="flex w-full flex-col">
        <BgWrapper>
          <div className="container md:w-[1200px] mx-auto md:pb-[40px] w-[90%]">
            <div>
              <h1 className="text-[--primary-bg] font-gothic font-[400] text-[50px] leading-tight">
                About HRC Worldwide.
              </h1>
            </div>
          </div>
        </BgWrapper>
      </div>
      <div className="w-full flex">
        <div className="container w-[90%] md:w-[1200px] mx-auto my-10">
          <div className="flex bg-[rgba(0,0,0,0.08)] p-5 rounded-sm leading-tight flex-col gap-3">
            <p className="text-[16px] md:text-sm font-lato font-[400] text-[--text-black] leading-[1.7] md:leading-[1.25]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque
              non facere asperiores quasi vitae, doloremque, placeat eligendi
              deleniti reprehenderit alias ullam dignissimos temporibus
              praesentium libero quas culpa autem saepe perferendis sequi
              adipisci architecto perspiciatis. Veritatis iste accusamus eos
              molestiae dolor praesentium quos sequi autem. Consequatur porro
              modi dicta cupiditate blanditiis!
            </p>
          </div>
        </div>
      </div>
      <div className="flex w-full">
        <div className="w-[90%] md:w-[1200px] mx-auto">
          <div className="flex w-full gap-5 mb-10 flex-col md:flex-row">
            <div className="w-full md:w-1/2 h-fit">
              <div className="w-full h-[400px] overflow-hidden rounded-[8px]">
                <img
                  src={Banner}
                  alt="about us"
                  className="w-full object-cover h-[400px]"
                />
              </div>
            </div>
            <div className="md:w-1/2 hidden md:flex">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="h-[194px] overflow-hidden rounded-[8px]">
                  <img
                    src={Banner2}
                    alt="about us"
                    className="w-full object-cover h-[194px]"
                  />
                </div>
                <div className="h-[194px] overflow-hidden rounded-[8px]">
                  <img
                    src={Banner3}
                    alt="about us"
                    className="w-full object-cover h-[194px]"
                  />
                </div>
                <div className="h-[194px]  overflow-hidden rounded-[8px]">
                  <img
                    src={Banner4}
                    alt="about us"
                    className="w-full object-cover h-[194px]"
                  />
                </div>
                <div className="h-[194px] overflow-hidden rounded-[8px]">
                  <img
                    src={Banner5}
                    alt="about us"
                    className="w-full object-cover h-[194px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MinistryCard title="Our Ministries" />
      <div className="flex w-full text-[--primary-bg]">
        <div className="container mx-auto w-[90%] md:w-[1200px] my-5 md:my-10">
          <div className="flex gap-5 md:gap-2 flex-col md:flex-row">
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <h1 className="text-[30px] font-gothic font-[400] leading-tight">
                Pastor Yinka Olatunji
              </h1>
              <p className="text-[14px] font-lato font-[400] uppercase">
                Senior pastor
              </p>
              <p className="text-[16px] font-lato">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. At ut,
                hic eum beatae recusandae vitae sit omnis dolore quod
                necessitatibus officia quos. Ut consectetur natus, minima illo
                fugit porro veniam.
              </p>
            </div>
            <div className="w-full md:w-1/2 flex justify-center overflow-hidden">
              <img
                src={Banner2}
                alt="pastor"
                className="w-[400px] h-[200px] object-cover rounded-[5px]"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full my-10">
        <div className="container mx-auto w-[90%] md:w-[1200px]">
          <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-5">
            <div className="relative h-[250px] rounded-sm  overflow-hidden">
              <img
                src={Banner3}
                alt="pastor"
                className="w-full h-[250px] object-cover"
              />
              <div className="absolute bottom-5 left-5 bg-[rgba(0,0,0,0.5)] w-fit rounded-[5px] px-5 py-2">
                <h1 className="text-[25px] md:text-[20px] font-gothic font-[400] leading-tight">
                  Pastor Yinka
                </h1>
                <p className="text-[16px] md:text-sm font-lato font-[400] leading-tight">
                  Associate pastor
                </p>
              </div>
            </div>
            <div className="relative h-[250px] rounded-sm  overflow-hidden">
              <img
                src={Banner2}
                alt="pastor"
                className="w-full h-[250px] object-cover"
              />
              <div className="absolute bottom-5 left-5 bg-[rgba(0,0,0,0.5)] w-fit rounded-[5px] px-5 py-2">
                <h1 className="text-[25px] md:text-[20px] font-gothic font-[400] leading-tight">
                  Pastor Yinka
                </h1>
                <p className="text-[16px] md:text-sm font-lato font-[400] leading-tight">
                  Associate pastor
                </p>
              </div>
            </div>
            <div className="relative h-[250px] rounded-sm  overflow-hidden">
              <img
                src={Banner5}
                alt="pastor"
                className="w-full h-[250px] object-cover"
              />
              <div className="absolute bottom-5 left-5 bg-[rgba(0,0,0,0.5)] w-fit rounded-[5px] px-5 py-2">
                <h1 className="text-[25px] md:text-[20px] font-gothic font-[400] leading-tight">
                  Pastor Yinka
                </h1>
                <p className="text-[16px] md:text-sm font-lato font-[400] leading-tight">
                  Associate pastor
                </p>
              </div>
            </div>
            <div className="relative h-[250px] rounded-sm  overflow-hidden">
              <img
                src={Music}
                alt="pastor"
                className="w-full h-[250px] object-cover"
              />
              <div className="absolute bottom-5 left-5 bg-[rgba(0,0,0,0.5)] w-fit rounded-[5px] px-5 py-2">
                <h1 className="text-[25px] md:text-[20px] font-gothic font-[400] leading-tight">
                  Pastor Yinka
                </h1>
                <p className="text-[16px] md:text-sm font-lato font-[400] leading-tight">
                  Associate pastor
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ServiceBanner />
    </>
  );
};

export default AboutUs;
