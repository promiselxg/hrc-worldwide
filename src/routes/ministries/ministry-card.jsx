/* eslint-disable react/prop-types */
import { Button } from "@/components/ui/button";
import Children from "../../assets/images/banner/children.webp";
import Banner5 from "../../assets/images/banner/banner-5.png";
import Music from "../../assets/images/banner/music.jpeg";
import { Link } from "react-router-dom";

const MinistryCard = ({ title }) => {
  return (
    <>
      <div className="flex w-full">
        <div className="w-[90%] md:w-[1200px] mx-auto text-[--primary-bg]">
          <div className="flex w-full gap-5 mb-10 flex-col">
            {title && (
              <h1 className="text-[30px] font-gothic font-[400]">{title}</h1>
            )}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
              <div
                className="p-10 bg-cover bg-center  shadow-sm text-[whitesmoke] flex  flex-col justify-center relative hover:scale-90 transition-all delay-100 duration-300 cursor-pointer"
                style={{ backgroundImage: `url(${Banner5})` }}
              >
                <h1 className="text-[30px] font-gothic font-[400] leading-tight ">
                  Youth Ministry
                </h1>
                <p className="text-[18px] md:text-sm mb-3">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Debitis id sint cum facere pariatur quibusdam. Dolore odio sit
                  accusantium adipisci.
                </p>
                <Link to="/ministry/:id">
                  <Button className="rounded-full text-sm font-lato font-[400] w-fit">
                    learn more
                  </Button>
                </Link>
              </div>
              <div
                className="bg-cover bg-center shadow-sm overflow-hidden text-[whitesmoke] flex  flex-col justify-center relative hover:scale-90 transition-all delay-100 duration-300 cursor-pointer"
                style={{ backgroundImage: `url(${Children})` }}
              >
                <div className="absolute top-0 bottom-0 w-full bg-[rgba(0,0,0,0.5)]"></div>
                <div className="p-10 z-10">
                  <h1 className="text-[30px] font-gothic font-[400] leading-tight">
                    Children Ministry
                  </h1>
                  <p className="text-[18px] md:text-sm mb-3">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Debitis id sint cum facere pariatur quibusdam. Dolore odio
                    sit accusantium adipisci
                  </p>
                  <Link to="/ministry/:id">
                    <Button className="rounded-full text-sm font-lato font-[400] w-fit">
                      learn more
                    </Button>
                  </Link>
                </div>
              </div>
              <div
                className="p-10 bg-cover bg-center shadow-sm text-[whitesmoke] flex  flex-col justify-center hover:scale-90 transition-all delay-100 duration-300 cursor-pointer"
                style={{ backgroundImage: `url(${Music})` }}
              >
                <h1 className="text-[30px] font-gothic font-[400] leading-tight">
                  Music Ministry
                </h1>
                <p className="text-[18px] md:text-sm mb-3">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Debitis id sint cum facere pariatur quibusdam. Dolore odio sit
                  accusantium adipisci
                </p>
                <Link to="/ministry/:id">
                  <Button className="rounded-full text-sm font-lato font-[400] w-fit">
                    learn more
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MinistryCard;
