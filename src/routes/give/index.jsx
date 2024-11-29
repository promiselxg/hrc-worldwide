import BgWrapper from "@/components/bg-wrapper";
import UBA_LOGO from "../../assets/images/UBA_United_Bank_for_Africa_Logo.png";
import { FiCopy } from "react-icons/fi";
import SEO from "@/lib/seo";

const Give = () => {
  return (
    <>
      <SEO
        title="House of Restoration Church of Christ Int'l | Give"
        description="About House of Restoration Church of Christ Int'l"
        name="House of Restoration Church of Christ Int'l"
        type="give"
      />
      <div className="w-full flex flex-col">
        <BgWrapper height="50px" className="hidden md:flex" />
        <div className="container mx-auto w-[90%] md:w-[1000px]">
          <div className="w-full flex my-10 flex-col gap-10">
            <div className="w-full bg-gradient-to-r from-green-200 via-green-100 to-yellow-50 rounded-[20px] text-[--primary-bg] ">
              <div className="w-full flex flex-col justify-center items-center py-8">
                <h1 className="text-[40px] md:text-[60px] font-gothic font-[400] leading-tight uppercase">
                  Tithes &amp; Offerings
                </h1>
                <p className="text-[16px] font-lato md:uppercase leading-tight space-x-10">
                  Giving back to GOD
                </p>
              </div>
            </div>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-[whitesmoke] flex flex-col text-[--primary-bg] items-center py-5 shadow-md rounded-[5px]">
                <h1 className="text-[16px] font-lato mt-1 uppercase font-[600]">
                  Naira Account
                </h1>
                <div className="flex gap-5 items-center px-5 py-2 flex-col md:flex-row">
                  <div className="w-full flex gap-3 justify-center md:justify-start">
                    <img
                      src={UBA_LOGO}
                      alt="uba naira account"
                      className="w-[200px] h-[100px]"
                    />
                  </div>
                  <div className="w-full flex flex-col leading-tight justify-center md:justify-start items-center md:items-start">
                    <h1 className="text-[25px] font-gothic font-[400] leading-tight">
                      Account Name &amp; Number:
                    </h1>
                    <h1 className="text-[16px] font-lato font-[600] leading-[1.1] mt-1 text-center md:text-left">
                      Word of Deliverance and Revival Evangelical Mission.
                    </h1>
                    <div className="flex items-center gap-3">
                      <h1 className="text-[40px] font-gothic mt-1">
                        1021326058
                      </h1>
                      <span className=" cursor-pointer">
                        <FiCopy />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[whitesmoke] flex flex-col text-[--primary-bg] items-center py-5 shadow-md rounded-[5px]">
                <h1 className="text-[16px] font-lato mt-1 uppercase font-[600]">
                  Dollar Account
                </h1>
                <div className="flex gap-5 items-center px-5 py-2 flex-col md:flex-row">
                  <div className="w-full flex gap-3 justify-center md:justify-start">
                    <img
                      src={UBA_LOGO}
                      alt="uba naira account"
                      className="w-[200px] h-[100px]"
                    />
                  </div>
                  <div className="w-full flex flex-col leading-tight justify-center md:justify-start items-center md:items-start">
                    <h1 className="text-[25px] font-gothic font-[400] leading-tight">
                      Account Name &amp; Number:
                    </h1>
                    <h1 className="text-[16px] font-lato font-[600] leading-[1.1] mt-1 text-center md:text-left">
                      Olayinka Olatunji.
                    </h1>
                    <div className="flex items-center gap-3">
                      <h1 className="text-[40px] font-gothic mt-1">
                        2305437512
                      </h1>
                      <span className=" cursor-pointer">
                        <FiCopy />
                      </span>
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

export default Give;
