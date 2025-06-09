import { File } from "lucide-react";
import { FaFacebook, FaTelegram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { Link } from "react-router-dom";

const SelectStreamOption = () => {
  return (
    <div className="container mx-auto w-[90%] md:w-[800px] flex flex-col items-center justify-center">
      <div className="w-full  text-white text-center  mb-8">
        <h1 className="text-[40px] md:text-[80px] font-[400] font-gothic leading-relaxed ">
          Select Platform
        </h1>
        <p className="text-md font-lato -mt-3">
          You can join our live service on any of the platforms below.
        </p>
      </div>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="p-4 bg-[white] text-black text-left rounded-md cursor-pointer transition shadow border-[rgba(0,0,0,0.1)] border-[1px]">
          <Link to="/livestream/yt">
            <div className="flex items-center gap-4">
              <span>
                <FaYoutube className="w-8 h-8 text-red-600" />
              </span>
              <span className="leading-4">
                <h1 className="text-2xl font-gothic font-[400]">
                  Youtube stream
                </h1>
                <p className="text-sm font-lato">
                  Stream directly from Youtube
                </p>
              </span>
            </div>
          </Link>
        </div>

        <div className="p-4 bg-[white] text-black text-left rounded-md cursor-pointer transition shadow border-[rgba(0,0,0,0.1)] border-[1px]">
          <Link to="/livestream/fb">
            <div className="flex items-center gap-4">
              <span>
                <FaFacebook className="w-8 h-8 text-blue-400" />
              </span>
              <span className="leading-4">
                <h1 className="text-2xl font-gothic font-[400]">
                  Facebook stream
                </h1>
                <p className="text-sm font-lato">
                  Stream directly from Facebook
                </p>
              </span>
            </div>
          </Link>
        </div>
        {/* <div className="p-4 bg-[white] text-black text-left rounded-md cursor-pointer transition shadow border-[rgba(0,0,0,0.1)] border-[1px]">
          <div className="flex items-center gap-4">
            <span>
              <FaTwitch className="w-8 h-8 text-sky-600" />
            </span>
            <span className="leading-4">
              <h1 className="text-2xl font-gothic font-[400]">Twitch stream</h1>
              <p className="text-sm font-lato">Stream directly from Twitch.</p>
            </span>
          </div>
        </div> */}
        <div className="p-4 bg-[white] text-black text-left rounded-md cursor-pointer transition shadow border-[rgba(0,0,0,0.1)] border-[1px]">
          <div className="flex items-center gap-4">
            <span>
              <FaTelegram className="w-8 h-8 text-sky-600" />
            </span>
            <span className="leading-4">
              <h1 className="text-2xl font-gothic font-[400]">
                Telegram stream
              </h1>
              <p className="text-sm font-lato">
                Stream directly from Telegram.
              </p>
            </span>
          </div>
        </div>
        <div className="p-4 bg-[white] text-black text-left rounded-md cursor-pointer transition shadow border-[rgba(0,0,0,0.1)] border-[1px]">
          <Link to="/resources">
            <div className="flex items-center gap-4">
              <span>
                <File className="w-8 h-8 text-slate-600" />
              </span>
              <span className="leading-4">
                <h1 className="text-2xl font-gothic font-[400]">Resources</h1>
                <p className="text-sm font-lato">
                  Browse through our media files &amp; resources.
                </p>
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SelectStreamOption;
