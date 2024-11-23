import { Button } from "@/components/ui/button";
import AboutImage from "../../../assets/images/banner/banner-2.png";
import AboutImage2 from "../../../assets/images/banner/banner-4.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Mousewheel, Pagination } from "swiper/modules";
const SectionAbout = () => {
  return (
    <>
      <div className="flex w-full h-fit md:h-[calc(100vh-100px)] bg-[whitesmoke] text-white  items-center justify-center">
        <div className="container md:w-[1200px] mx-auto bg-[rgba(0,0,0,0.06)] pb-[40px] md:pb-0">
          <div className="px-[25px] md:px-[50px] flex gap-2 flex-col-reverse md:flex-row">
            <div className="w-full md:w-1/2  md:h-[400px] leading-[1.8] text-sm text-[--text-black]  flex flex-col justify-center">
              <h1 className="text-[30px] md:text-[50px] leading-[1.1] uppercase font-gothic font-[400] text-[--text-black]">
                A SHORT EXCERPT ABOUT hrc worldwide.
              </h1>
              <div className="md:max-w-[70ch] leading-[1.8] flex flex-col gap-2 my-4">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Officia consequatur natus ad eaque nesciunt eum esse facere,
                  voluptatibus pariatur, hic neque dolorem unde fugiat expedita
                  delectus numquam, architecto tempora enim.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Officia consequatur natus ad eaque nesciunt eum esse facere,
                  voluptatibus pariatur, hic neque dolorem unde fugiat expedita
                  delectus numquam, architecto tempora enim.
                </p>
              </div>
              <Button className="bg-[rgba(0,0,0,0.8)] text-[#ccc] rounded-full w-fit text-[12px] font-[400] font-lato">
                Learn More
              </Button>
            </div>
            <div className="w-full md:w-1/2 h-[250px] md:h-[400px]">
              <Swiper
                direction={"vertical"}
                slidesPerView={1}
                spaceBetween={30}
                mousewheel={true}
                pagination={{
                  clickable: true,
                }}
                modules={[Mousewheel, Pagination]}
                className="text-center flex items-center justify-center w-full h-full overflow-hidden"
              >
                <SwiperSlide className="flex justify-center items-center">
                  <img
                    src={AboutImage}
                    alt="slider image"
                    className="h-full w-full object-contain block"
                  />
                </SwiperSlide>
                <SwiperSlide className="flex justify-center items-center">
                  <img
                    src={AboutImage2}
                    alt="slider image"
                    className="h-full w-full object-contain block overflow-hidden"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionAbout;
