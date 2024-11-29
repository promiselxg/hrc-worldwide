import SideNav from "./components/side-nav";

const RBTI_Home = () => {
  return (
    <>
      <div className="w-full flex z-20">
        <div className="container mx-auto w-[90%] md:w-[1200px]">
          <div className="flex w-full text-white  h-screen">
            <div className="w-full flex  items-center  gap-5">
              <div className="w-1/4 md:flex hidden">
                <SideNav />
              </div>
              <div className="w-full md:w-3/5 md:ml-20">
                <h1 className="text-[40px] md:text-[70px] font-gothic font-[400] leading-[1.1]">
                  Welcome to Restorer Bible training Institute.
                </h1>
                <p className="text-[16px] font-lato text-[whitesmoke] mb-2">
                  Ministerial call is vital in every beliver&apos; life.
                </p>
                <div className="flex flex-col my-5">
                  <span className="py-3 px-8 bg-[#FFBF00] w-fit uppercase font-lato text-[--primary-bg] font-[600] text-sm">
                    our vision
                  </span>
                  <p className="text-[16px] font-lato text-[whitesmoke] mb-2 leading-tight">
                    To raise effective ministers for Kingdom Advancement.
                  </p>
                </div>
                <div className="flex flex-col my-5">
                  <span className="py-3 px-8 bg-[#FFBF00] w-fit uppercase font-lato text-[--primary-bg] font-[600] text-sm">
                    our mission
                  </span>
                  <p className="text-[16px] font-lato text-[whitesmoke] mb-2 max-w-[60ch] leading-tight">
                    To provide deep spiritual enlightenment, as well as mental
                    empowerment for a lifestyle of dominion and Christ-like
                    exploits in ministry.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RBTI_Home;