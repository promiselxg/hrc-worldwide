import { cn } from "@/lib/utils";

/* eslint-disable react/prop-types */
const Team_Member_Card = ({ name, position, imgUrl, display }) => {
  return (
    <>
      {display === "circle" ? (
        <div className="flex flex-col items-center">
          <div
            className={cn(
              `bg-[whitesmoke] h-[100px] overflow-hidden shadow-md rounded-full w-[100px]`
            )}
          >
            <img
              src={imgUrl}
              alt={name}
              className="w-full object-cover h-[100px] overflow-hidden"
            />
          </div>
          <div className="w-full flex text-center flex-col p-2 leading-tight">
            <h1 className="text-[16px] font-lato font-[600]">{name}</h1>
            {position && (
              <p className="text-sm font-lato font-[400] italic">{position}</p>
            )}
          </div>
        </div>
      ) : (
        <div className="bg-[whitesmoke] h-[280px] overflow-hidden shadow-md rounded-md">
          <img
            src={imgUrl}
            alt={name}
            className="w-full object-cover h-[200px] overflow-hidden"
          />
          <div className="w-full flex justify-start flex-col p-2 leading-tight">
            <h1 className="text-[16px] font-lato font-[600]">{name}</h1>
            {position && (
              <p className="text-sm font-lato font-[400] italic">{position}</p>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Team_Member_Card;
