/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import BlogImg from "../assets/images/event/event1.png";
import { Badge } from "./ui/badge";

const Card = ({ imgUrl, title, tags, date, url }) => {
  return (
    <>
      <div className="w-full flex flex-col">
        <Link to={url}>
          <div className="h-[250px] w-full overflow-hidden">
            <img
              src={imgUrl ?? BlogImg}
              alt="image"
              className="w-full h-[250px] object-cover"
            />
          </div>
          <div className="p-2">
            <h1 className="text-[20px] font-lato font-[400] my-2 leading-tight">
              {title}
            </h1>
            {tags && (
              <div className="flex gap-1 my-1">
                {tags.split(",").map((tag, index) => (
                  <Badge
                    variant="outline"
                    className="rounded-full text-[12px] font-[400]"
                    key={index}
                  >
                    {tag.trim()}
                  </Badge>
                ))}
              </div>
            )}
            {date && <p className="text-[12px] my-2 ml-1 italic">{date}</p>}
          </div>
        </Link>
      </div>
    </>
  );
};

export default Card;
