const ServiceBanner = () => {
  return (
    <>
      <div className="flex w-full py-10">
        <div className="container md:w-[1200px] mx-auto w-[90%]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 bg-[whitesmoke] rounded-[45px]  overflow-hidden shadow-md text-[--primary-bg]">
            <div className="py-5 md:p-10 flex flex-col items-center">
              <h1 className="text-[30px] font-gothic font-[400] leading-tight">
                Our service time
              </h1>
              <span className="flex items-center gap-4 leading-tight">
                <h1 className="text-[16px] font-lato">1st Service :</h1>
                <p className="text-[16px] font-lato">7am</p>
              </span>
              <span className="flex items-center gap-4 leading-tight">
                <h1 className="text-[16px] font-lato">2nd Service :</h1>
                <p className="text-[16px] font-lato">9am</p>
              </span>
              <span className="flex items-center gap-4 leading-tight">
                <h1 className="text-[16px] font-lato">Midweek Service :</h1>
                <p className="text-[16px] font-lato">6pm</p>
              </span>
            </div>
            <div className="py-2 md:p-10 flex flex-col items-center">
              <h1 className="text-[30px] font-gothic font-[400] leading-tight">
                Our service Location
              </h1>
              <p> 4, Ejiba Street Off stadium Road Ilorin Kwara State – Nigeria.</p>
            </div>
            <div className="py-5 md:p-10 flex flex-col items-center">
              <h1 className="text-[30px] font-gothic font-[400] leading-tight">
                Contact Us
              </h1>
              <p className="text-[16px] font-lato leading-tight">
               Whatsapp (msg only)- +234 803 075 8415
              </p>
              
              <p className="text-[16px] font-lato leading-tight">
                Call- Pastor Emmanuel - +234 810 729 4072
              </p>
              
              <p className="text-[16px] font-lato leading-tight">
                Call- Pastor Tomilola – +234 803 071 1527
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceBanner;
