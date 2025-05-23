/* eslint-disable react/prop-types */
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Skeleton } from "@/components/ui/skeleton";
import { truncateText } from "@/utils/trucateText";

const MinistryCard = ({ title, data, loading }) => {
  return (
    <>
      <div className="flex w-full">
        <div className="w-[90%] md:w-[1200px] mx-auto text-[--primary-bg]">
          <div className="flex w-full gap-5 mb-10 flex-col">
            {title && (
              <h1 className="text-[30px] font-gothic font-[400]">{title}</h1>
            )}
            {loading ? (
              <div className="p-5 w-full space-y-2">
                <Skeleton className="h-2 w-full bg-[#171726] rounded-full" />
                <Skeleton className="h-2 w-2/3 bg-[#212136] rounded-full" />
                <Skeleton className="h-2 w-1/3 bg-[#0d0d16] rounded-full" />
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
                {data.map((ministy) => {
                  return (
                    <div
                      className="p-10 bg-cover bg-center shadow-sm text-[whitesmoke] flex flex-col justify-center relative hover:scale-90 transition-all delay-100 duration-300 cursor-pointer"
                      style={{
                        backgroundImage: `url(${ministy?.ministry_image_url})`,
                      }}
                      key={ministy.id}
                    >
                      <div className="bg-[rgba(0,0,0,0.5)] mb-2 p-2 rounded-sm">
                        <h1 className="text-[30px] font-gothic font-[400] leading-tight uppercase">
                          {ministy?.ministry_category}
                        </h1>
                        <p
                          className="text-[18px] md:text-sm mb-3"
                          dangerouslySetInnerHTML={{
                            __html: truncateText(
                              ministy?.ministry_description,
                              50
                            ),
                          }}
                        ></p>
                      </div>
                      <Link to={`/ministry/${ministy?.id}`}>
                        <Button className="rounded-full text-sm font-lato font-[400] w-fit">
                          learn more
                        </Button>
                      </Link>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MinistryCard;
