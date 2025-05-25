import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
// import AboutImage from "../../../assets/images/banner/banner-2.png";
// import AboutImage2 from "../../../assets/images/banner/banner-4.png";
// import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

// import { Mousewheel, Pagination } from "swiper/modules";
const SectionAbout = () => {
  return (
    <>
      <div className="flex w-full h-fit md:h-[500px] bg-[whitesmoke] text-white  items-center justify-center">
        <div className="container md:w-[1200px] mx-auto bg-[rgba(0,0,0,0.06)] py-[40px]">
          <div className="px-[25px] md:px-[50px] flex gap-2 flex-col-reverse md:flex-row">
            <div className="w-full md:w-full  md:h-fit leading-[1.8] text-sm text-[--text-black]  flex flex-col justify-center">
              <h1 className="text-[30px] md:text-[50px] leading-[1.1] uppercase font-gothic font-[400] text-[--text-black]">
                A SHORT EXCERPT ABOUT hrcc int'l.
              </h1>
              <div className="leading-[1.8] flex flex-col gap-2 my-4">
                <p>Restoring destiny and building lives to divine pattern.</p>
                <p>
                  HRCC International (House of Restoration Church of Christ) is a dynamic ministry committed to soul winning,
                  church health, discipleship, and pastoral care. The church focuses on discovering new members,
                  detoxifying the church environment,
                  and deepening people’s relationship with Christ. Through compassionate pastoral care, 
                  HRCC ensures the consistent distribution of God’s love to individuals and families.
                </p>
                <p>
                  With a strong emphasis on stewardship, the ministry is dedicated to developing effective leaders, ministers, and workers. 
                  HRCC also encourages financial inflow by drawing resources for and from the people, creating a self-sustaining structure. Committed to growth,
                  the church continues to expand by duplicating its impact in new locations while remaining grounded in sound doctrine and community transformation.
                </p>
                <p>
                  At HRCC, we believe in the transformative power of God&apos;s
                  love and restoration. Our church is a place where you can find
                  comfort, guidance, and support as you navigate life&apos;s
                  challenges. We invite you to join us on this journey of faith,
                  growth, and community.
                </p>
              </div>
              <Link to="/about-us">
                <Button className="bg-[rgba(0,0,0,0.8)] text-[#ccc] rounded-full w-fit text-[12px] font-[400] font-lato">
                  Learn More
                </Button>
              </Link>
            </div>
            {/* <div className="w-full md:w-1/2 h-[250px] md:h-[400px]">
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
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionAbout;
