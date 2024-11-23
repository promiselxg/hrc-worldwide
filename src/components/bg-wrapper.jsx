/* eslint-disable react/prop-types */
import { cn } from "@/lib/utils";
import NewsletterBg from "../assets/images/church-bg.png";

const BgWrapper = ({ children, height }) => {
  return (
    <>
      <div
        className={cn(
          `flex w-full bg-cover bg-left relative items-center text-[--primary-bg] ${
            height ? `h-[${height}]` : "h-[200px]"
          }`
        )}
        style={{ backgroundImage: `url(${NewsletterBg})` }}
      >
        {children}
      </div>
    </>
  );
};

export default BgWrapper;
