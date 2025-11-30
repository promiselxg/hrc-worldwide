import BgVid from "../../assets/vid.mp4";
import Bg from "../../assets/images/banner/banner-1.png";
import Fb from "../../assets/images/icons/fb.png";
import Yt from "../../assets/images/icons/yt.png";
import Tg from "../../assets/images/icons/tg.png";
import SEO from "@/lib/seo";

const Livestream = () => {
  return (
    <>
      <SEO
        title="House of Restoration Church of Christ | Join our Live stream"
        description="Join our live stream"
        name="House of Restoration Church of Christ"
        type="livestream"
      />
      <div className="w-full flex flex-col">
        <div className="relative" style={{ backgroundImage: `${Bg}` }}>
          <div className="w-full flex h-screen">
            <video autoPlay muted loop className="w-full h-full object-cover">
              <source src={BgVid} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="w-full absolute top-0 bottom-0 bg-[rgba(0,0,0,0.7)]"></div>
          <div className="w-full flex absolute top-0 text-white">
            <div className="container w-[90%] md:w-[1000px] mx-auto flex justify-center items-center h-screen">
              <div className="w-full flex">
                <div className="w-full flex items-center justify-center ">
                  <div className="flex flex-col justify-center text-center">
                    <h1 className="text-[70px] font-gothic font-[400] uppercase mb-2">
                      Join us Live
                    </h1>
                    <div className="w-full flex">
                      <div className="flex gap-4 items-center flex-col md:flex-row justify-center w-full md:w-fit">
                        <a href="" className="group showHiddenText">
                          <div className="w-fit bg-white rounded-[40px]  px-8 py-2 h-[76px]">
                            <img
                              src={Fb}
                              alt="facebook"
                              className="w-[100px] h-[61px]"
                            />
                          </div>
                          <div className=" mt-2 relative w-[100px] hidden md:flex">
                            <span className="font-lato font-[400] absolute top-0 left-1/2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                              Facebook
                            </span>
                          </div> 
                          <a href="https://www.t.me/Pastoryinkaolatunji" target="_blank" rel="noopener noreferrer" className="group">
                          <div className="w-fit bg-white rounded-[40px]  px-8 py-2">
                            <img
                              src={Tg}
                              alt="Telegram"
                              className="w-[58px] h-[61px]"
                            />
                          </div>
                          <div className=" mt-2 relative w-[60px] hidden md:flex">
                            <span className="font-lato font-[400] absolute top-0 left-1/2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                             Telegram 
                            </span>
                          </div>
                        </a>
                          <div className="w-fit bg-white rounded-[40px]  px-8 py-2">
                            <img
                              src={Yt}
                              alt="Youtube"
                              className="w-[61px] h-[61px]"
                            />
                          </div>
                          <div className=" mt-2 relative w-[60px] hidden md:flex">
                            <span className="font-lato font-[400] absolute top-0 left-1/2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                              Youtube
                            </span>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Livestream;
