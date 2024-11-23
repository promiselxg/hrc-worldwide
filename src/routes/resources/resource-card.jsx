/* eslint-disable react/prop-types */
import { Badge } from "@/components/ui/badge";
import ImageUrl from "../../assets/images/banner/banner-2.png";
import ReactPlayer from "react-player";

const ResourceCard = ({
  mediaUrl,
  title,
  date = "22/11/2024",
  mediaType = "video",
  preacher,
}) => {
  return (
    <>
      <div className="w-full flex flex-col text-[--primary-bg]">
        <div className="h-[250px] w-full overflow-hidden">
          {mediaType === "video" || mediaType === "audio" ? (
            <>
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  maxWidth: "100%",
                  height: "200px",
                  backgroundImage: `url('${ImageUrl}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <ReactPlayer
                  //url="https://storage.googleapis.com/media-session/elephants-dream/the-wires.mp3"
                  //url="https://youtu.be/2LRLsMracAY?si=MVZutLmCRr-WpU_s"
                  url={mediaUrl}
                  width="100%"
                  height={250}
                  volume={1}
                  controls={true}
                />
              </div>
            </>
          ) : (
            <img
              src={mediaUrl ?? ImageUrl}
              alt="image"
              className="w-full h-[250px] object-cover"
            />
          )}
        </div>
        <div className="p-2">
          <h1 className="text-[20px] font-lato font-[400] my-2 leading-tight">
            {title}
          </h1>
          <p className="text-sm text-[--primary-bg] pb-1">{preacher}</p>
          <div className="flex gap-1 my-1">
            <Badge
              variant="outline"
              className="rounded-full text-[12px] font-[400]"
            >
              {mediaType}
            </Badge>
          </div>
          {date && <p className="text-[12px] my-2 ml-1 italic">{date}</p>}
        </div>
      </div>
    </>
  );
};

export default ResourceCard;
