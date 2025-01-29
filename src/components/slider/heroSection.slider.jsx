import { Autoplay, Navigation, Parallax } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import useFetch from "@/hooks/useFetch";
import { truncateText } from "@/utils/trucateText";

const HeroSectionSlider = () => {
  const { data } = useFetch("/banner");

  return (
    <Swiper
      speed={600}
      parallax={true}
      autoplay={{
        delay: 8500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, Parallax, Navigation]}
      spaceBetween={0}
      slidesPerView={1}
      loop={true}
      className="h-screen"
    >
      {data?.map((banner) => (
        <SwiperSlide key={banner.id}>
          <div
            className="h-full bg-cover relative bg-center"
            style={{
              backgroundImage: `url(${banner.imageUrl})`,
            }}
          >
            <div className="absolute flex w-full bg-[rgba(0,0,0,0.5)] top-0 bottom-0"></div>
            <div className="h-full flex items-center justify-start text-white z-30 md:w-1/2  relative">
              <div className="px-[25px] md:px-[50px] absolute bottom-20 md:bottom-10">
                <h2 className="text-[50px] max-w-[20ch] md:max-w-full md:text-[90px] font-[400] font-gothic leading-[1.1] text-white">
                  {truncateText(banner.description, 60)}
                  {/* <span className="block">Welcome toz</span>
                  <span className="block">House of Restoration</span>
                  <span className="block">Church Worldwide.</span> */}
                </h2>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroSectionSlider;
