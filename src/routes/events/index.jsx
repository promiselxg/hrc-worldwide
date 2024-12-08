import BgWrapper from "@/components/bg-wrapper";
import { FiClock, FiX } from "react-icons/fi";
import Card from "@/components/card";
import ServiceBanner from "@/components/service-banner";
import Modal from "@/components/modal";
import { useModal } from "@/context/modal-context";
import { Button } from "@/components/ui/button";
import SEO from "@/lib/seo";
import useFetch from "@/hooks/useFetch";
import { formatDateWithoutTime } from "@/utils/getDateDifference";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";

const Events = () => {
  const { closeModal, toggleModal } = useModal();
  const [modelData, setModelData] = useState("");

  const { loading, data } = useFetch("/event");

  const groupEventsByMonth = (events) => {
    return events?.reduce((acc, event) => {
      const eventDate = new Date(event.event_date);
      const month = eventDate?.toLocaleString("default", { month: "long" });
      const year = eventDate?.getFullYear();
      const monthKey = `${month} ${year}`;

      if (!acc[monthKey]) {
        acc[monthKey] = [];
      }
      acc[monthKey]?.push(event);
      return acc;
    }, {});
  };

  const groupedEvents = groupEventsByMonth(data);

  return (
    <>
      <SEO
        title="House of Restoration Church of Christ Int'l | Events"
        description="About House of Restoration Church of Christ Int'l"
        name="House of Restoration Church of Christ Int'l"
        type="events"
      />
      <div className="w-full flex flex-col">
        <BgWrapper>
          <div className="container md:w-[1200px] mx-auto  w-[90%]">
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
            {loading ? (
              <div className="p-5 w-full space-y-2">
                <Skeleton className="h-2 w-full bg-[#171726] rounded-full" />
                <Skeleton className="h-2 w-2/3 bg-[#212136] rounded-full" />
                <Skeleton className="h-2 w-1/3 bg-[#0d0d16] rounded-full" />
              </div>
            ) : (
              <>
                <div className="w-full h-[400px] md:min-h-[500px] md:h-[500px] overflow-hidden relative">
                  <img
                    src={data[0]?.event_image_url}
                    alt={data[0]?.event_title}
                    className="w-full object-cover md:h-[500px] h-[400px]"
                  />
                  <div className="absolute bottom-5 md:bottom-10 left-5 bg-[rgba(0,0,0,0.8)] w-[90%] md:w-fit md:max-w-[400px] p-5 rounded-[5px]">
                    <h1 className="text-[20px] md:text-[30px] font-gothic font-[400] leading-tight">
                      {data[0]?.event_title}
                    </h1>
                    <p className="text-sm md:text-[16px] font-lato font-[400] leading-tight">
                      {data[0]?.event_minister}
                    </p>
                    <span className="flex items-center gap-2 text-sm md:text-[16px] font-lato italic font-[600]">
                      <FiClock size={16} />
                      <p className="text-sm md:text-[16px]">
                        {formatDateWithoutTime(data[0]?.event_date)}
                      </p>
                    </span>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
        <div className="flex w-full bg-[white]">
          <div className="container md:w-[1200px] mx-auto">
            {Object?.entries(groupedEvents)?.map(([month, events]) => (
              <div key={month} className="w-full py-5 md:py-10">
                {/* Month Header */}
                <div className="flex items-center text-[--text-black] gap-3 md:w-full w-[90%] mx-auto">
                  <div className="flex w-fit">
                    <h1 className="text-[20px] font-lato font-[400] leading-tight text-[--primary-bg]">
                      Events in {month}
                    </h1>
                  </div>
                  <div className="border border-[rgba(0,0,0,0.1)] w-[79%] hidden md:flex"></div>
                </div>

                {/* Events Grid */}
                <div className="w-full flex mt-8">
                  <div className="grid md:w-full w-[90%] mx-auto md:grid-cols-4 gap-4 text-[--text-black]">
                    {events?.map((event) => (
                      <div
                        key={event.id}
                        className="shadow-md rounded-sm overflow-hidden"
                        onClick={() => {
                          toggleModal(event);
                          setModelData(event);
                        }}
                      >
                        <Card
                          title={event?.event_title}
                          imgUrl={event?.event_image_url}
                          date={new Date(event?.event_date)?.toLocaleDateString(
                            "en-US",
                            {
                              day: "numeric",
                              month: "long",
                              year: "numeric",
                            }
                          )}
                          tags={event.event_minister}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <ServiceBanner />
      </div>
      <Modal width="400px" height="100%">
        <div className="w-full flex bg-[whitesmoke] text-[--primary-bg] shadow-md rounded-[10px] overflow-hidden relative">
          <div className="w-full flex flex-col">
            <div className="h-[250px] w-full overflow-hidden">
              <img
                src={modelData?.event_image_url}
                alt="image"
                className="w-full h-[250px] object-cover"
              />
            </div>
            <div className="p-2">
              <h1 className="text-[20px] font-lato font-[400] my-2 leading-tight">
                {modelData?.event_title}
              </h1>
              {modelData?.event_tag ? (
                <div className="flex gap-1 my-1 flex-wrap">
                  {modelData?.event_tag.split(",").map((tag, index) => (
                    <Badge
                      variant="outline"
                      className="rounded-full text-[12px] font-[400]"
                      key={index}
                    >
                      {tag.trim()}
                    </Badge>
                  ))}
                </div>
              ) : null}
              {modelData?.event_minister && (
                <div className="flex gap-2 items-center">
                  <h1 className="text-[16px]  md:text-sm italic">
                    Ministering:{" "}
                  </h1>
                  {modelData?.event_minister
                    .split(",")
                    .map((minister, index) => (
                      <p key={index} className="text-[16px]  md:text-sm italic">
                        {minister},
                      </p>
                    ))}
                </div>
              )}
              {formatDateWithoutTime(modelData?.event_date)}
            </div>
          </div>
          <Button
            className="absolute top-3 right-3 bg-[--primary-bg] text-white transition-all delay-100 duration-300 border-0"
            size="icon"
            variant="outline"
            onClick={() => closeModal()}
          >
            <FiX size={20} />
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default Events;
