import BgWrapper from "@/components/bg-wrapper";
import Banner from "../../assets/images/banner/banner-5.png";
import { FiClock } from "react-icons/fi";
import Card from "@/components/card";
import ServiceBanner from "@/components/service-banner";
import Modal from "@/components/modal";
import { useModal } from "@/context/modal-context";

const Events = () => {
  const { isModalOpen, closeModal, toggleModal } = useModal();
  const data = {
    title: "this is a title",
    date: "20/12/2024",
    tags: "spiritual,cleansing",
  };
  return (
    <>
      <div className="w-full flex flex-col">
        <BgWrapper>
          <div className="container md:w-[1200px] mx-auto md:pb-[40px] w-[90%]">
            <div>
              <h1 className="text-[--primary-bg] font-gothic font-[400] text-[50px] leading-tight">
                Upcoming Events.
              </h1>
              <p className="text-[--primary-bg] font-[400] font-lato text-sm">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id,
                quas?
              </p>
            </div>
          </div>
        </BgWrapper>
        <div className="flex w-full py-[20px] md:py-[40px]">
          <div className="container md:w-[1200px] mx-auto w-[90%]">
            <div className="w-full h-[400px] md:min-h-[500px] md:h-[500px] overflow-hidden relative">
              <img
                src={Banner}
                alt="banner"
                className="w-full object-cover md:h-[500px] h-[400px]"
              />
              <div className="absolute bottom-5 md:bottom-10 left-5 bg-[rgba(0,0,0,0.8)] w-[90%] md:w-fit md:max-w-[400px] p-5 rounded-[5px]">
                <h1 className="text-[20px] md:text-[30px] font-gothic font-[400] leading-tight">
                  The event Title goes here.
                </h1>
                <p className="text-sm md:text-[16px] font-lato font-[400] leading-tight">
                  Plot 792, Muhammadu buhari way, CBD, Abuja.
                </p>
                <span className="flex items-center gap-2 text-sm md:text-[16px] font-lato italic font-[600]">
                  <FiClock size={16} />
                  <p className="text-sm md:text-[16px]">22 November, 2024</p>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full bg-[white]">
          <div className="container md:w-[1200px] mx-auto">
            <div className="w-full py-5 md:py-10 ">
              <div className="flex items-center text-[--text-black] gap-3 md:w-full w-[90%] mx-auto">
                <div className="flex w-fit ">
                  <h1 className="text-[20px] font-lato font-[400] leading-tight text-[--primary-bg]">
                    Events in November
                  </h1>
                </div>
                <div className="border border-[rgba(0,0,0,0.1)] w-[79%] hidden md:flex"></div>
              </div>
              <div className="w-full flex mt-8">
                <div className="grid md:w-full w-[90%] mx-auto md:grid-cols-4 gap-4 text-[--text-black]">
                  <div
                    className="shadow-md rounded-sm overflow-hidden"
                    onClick={() => toggleModal()}
                  >
                    <Card
                      title="Event title"
                      date="26th November, 2024"
                      tags="crusade"
                    />
                  </div>
                  <div className="shadow-md rounded-sm overflow-hidden">
                    <Card title="Event title" date="26th November, 2024" />
                  </div>
                  <div className="shadow-md rounded-sm overflow-hidden">
                    <Card title="Event title" date="26th November, 2024" />
                  </div>
                  <div className="shadow-md rounded-sm overflow-hidden">
                    <Card title="Event title" date="26th November, 2024" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ServiceBanner />
      </div>
      <Modal width="400px">
        <div className="w-full flex bg-[whitesmoke] text-[--primary-bg] p-6 shadow-md rounded-[10px]">
          <Card data={data} />
        </div>
      </Modal>
    </>
  );
};

export default Events;
