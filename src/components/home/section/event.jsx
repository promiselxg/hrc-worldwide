import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination } from "swiper/modules";
import { Button } from "@/components/ui/button";

import Event1 from "../../../assets/images/event/event1.png";
import Event2 from "../../../assets/images/event/event2.png";
import Event3 from "../../../assets/images/event/event3.png";

const EventSection = () => {
  return (
    <>
      <div className="flex w-full text-[--text-black]">
        <div className="container mx-auto">
          <div className="p-[50px] flex justify-center flex-col gap-4">
            <h1 className="mb-5 font-gothic font-[400] md:text-[50px] flex justify-center">
              Experience God with us through OUR UPCOMING Events.
            </h1>
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={1.5}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={true}
              modules={[EffectCoverflow, Pagination]}
              className="w-full"
            >
              <SwiperSlide className="w-[500px] h-[500px] bg-contain bg-center">
                <img
                  src={Event1}
                  className="w-full h-[500px] object-cover bg-center"
                />
              </SwiperSlide>
              <SwiperSlide className="w-[500px] h-[500px] bg-contain bg-center">
                <img src={Event2} className="w-full h-[500px] object-cover" />
              </SwiperSlide>
              <SwiperSlide className="w-[500px] h-[500px] bg-contain bg-center">
                <img src={Event3} className="w-full h-[500px] object-cover" />
              </SwiperSlide>
            </Swiper>
            <div className="flex justify-center mt-3">
              <Button className="bg-[rgba(0,0,0,0.8)] text-[#ccc] rounded-full w-fit text-[12px] font-[400] font-lato">
                View all event
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventSection;