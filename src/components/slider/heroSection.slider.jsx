import { Autoplay, Navigation, Parallax } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import Banner1 from "../../assets/images/banner/banner-1.png";
import Banner2 from "../../assets/images/banner/banner-2.png";
import Banner3 from "../../assets/images/banner/banner-3.png";
import Banner4 from "../../assets/images/banner/banner-4.png";
import Banner5 from "../../assets/images/banner/banner-5.png";

const HeroSectionSlider = () => {
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
      <SwiperSlide>
        <div
          className="h-full bg-cover relative bg-center"
          style={{
            backgroundImage: `url(${Banner1})`,
          }}
        >
          <div className="absolute flex w-full bg-[rgba(0,0,0,0.5)] top-0 bottom-0"></div>
          <div className="h-full flex items-center justify-start text-white z-30 md:w-1/2  relative">
            <div className="px-[25px] md:px-[50px] absolute bottom-20 md:bottom-10">
              <h2 className="text-[50px] md:text-[90px] font-[400] font-gothic leading-[1.1] text-white">
                <span className="block">Welcome to</span>
                <span className="block">House of Restoration</span>
                <span className="block">Church Worldwide.</span>
              </h2>

              <p className="text-[16px] ml-1 md:ml-2 text-[rgba(255,255,255,0.8)] font-lato">
                You are in the right place.
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="h-full bg-cover relative bg-center"
          style={{
            backgroundImage: `url(${Banner2})`,
          }}
        >
          <div className="absolute flex w-full bg-[rgba(0,0,0,0.5)] top-0 bottom-0"></div>
          <div className="h-full flex items-center justify-start text-white z-30 md:w-1/2  relative">
            <div className="px-[25px] md:px-[50px] absolute bottom-20 md:bottom-10">
              <h2 className="text-[50px] md:text-[90px] font-[400] font-gothic leading-[1.1] text-white">
                <span className="block">Welcome to</span>
                <span className="block">House of Restoration</span>
                <span className="block">Church Worldwide.</span>
              </h2>

              <p className="text-[16px] ml-1 md:ml-2 text-[rgba(255,255,255,0.8)] font-lato">
                You are in the right place.
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="h-full bg-cover relative bg-center"
          style={{
            backgroundImage: `url(${Banner3})`,
          }}
        >
          <div className="absolute flex w-full bg-[rgba(0,0,0,0.5)] top-0 bottom-0"></div>
          <div className="h-full flex items-center justify-start text-white z-30 md:w-1/2  relative">
            <div className="px-[25px] md:px-[50px] absolute bottom-20 md:bottom-10">
              <h2 className="text-[50px] md:text-[90px] font-[400] font-gothic leading-[1.1] text-white">
                <span className="block">Welcome to</span>
                <span className="block">House of Restoration</span>
                <span className="block">Church Worldwide.</span>
              </h2>

              <p className="text-[16px] ml-1 md:ml-2 text-[rgba(255,255,255,0.8)] font-lato">
                You are in the right place.
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="h-full bg-cover relative bg-center"
          style={{
            backgroundImage: `url(${Banner4})`,
          }}
        >
          <div className="absolute flex w-full bg-[rgba(0,0,0,0.5)] top-0 bottom-0"></div>
          <div className="h-full flex items-center justify-start text-white z-30 md:w-1/2  relative">
            <div className="px-[25px] md:px-[50px] absolute bottom-20 md:bottom-10">
              <h2 className="text-[50px] md:text-[90px] font-[400] font-gothic leading-[1.1] text-white">
                <span className="block">Welcome to</span>
                <span className="block">House of Restoration</span>
                <span className="block">Church Worldwide.</span>
              </h2>

              <p className="text-[16px] ml-1 md:ml-2 text-[rgba(255,255,255,0.8)] font-lato">
                You are in the right place.
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="h-full bg-cover relative bg-center"
          style={{
            backgroundImage: `url(${Banner5})`,
          }}
        >
          <div className="absolute flex w-full bg-[rgba(0,0,0,0.5)] top-0 bottom-0"></div>
          <div className="h-full flex items-center justify-start text-white z-30 md:w-1/2  relative">
            <div className="px-[25px] md:px-[50px] absolute bottom-20 md:bottom-10">
              <h2 className="text-[50px] md:text-[90px] font-[400] font-gothic leading-[1.1] text-white">
                <span className="block">Welcome to</span>
                <span className="block">House of Restoration</span>
                <span className="block">Church Worldwide.</span>
              </h2>

              <p className="text-[16px] ml-1 md:ml-2 text-[rgba(255,255,255,0.8)] font-lato">
                You are in the right place.
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroSectionSlider;
