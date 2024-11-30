import BgWrapper from "@/components/bg-wrapper";
import { BreadCrumb } from "../components/bread-crumb";
import Team_Member_Card from "./card";

const Organogram = () => {
  return (
    <>
      <div className="flex w-full flex-col z-0">
        <BgWrapper>
          <div className="container md:w-[1200px] mx-auto  w-[90%] z-10">
            <div>
              <BreadCrumb label="Organogram" />
              <h1 className="text-[--primary-bg] font-gothic font-[400] text-[35px] md:text-[50px] leading-[1] mt-2 md:mt-0 md:leading-tight">
                Organogram.
              </h1>
            </div>
          </div>
        </BgWrapper>
        <div className="w-full flex">
          <div className="container w-[90%] md:w-[1200px] mx-auto py-8">
            <div className="w-full flex flex-col gap-6 rbti">
              <h1 className="text-[40px] font-gothic font-[400] leading-tight">
                Staff Position
              </h1>
              <ol className="-mt-5 list-decimal ml-5 leading-loose  text-sm md:text-[16px] font-lato text-[--primary-bg]">
                <li>
                  <b>Dean of Academics Affair:</b> is in charge of academics
                  matters, The Dean and the Academic committee shall screen all
                  certificates of candidates relating to academic records of
                  students. He is responsible to the Provost in his day to day
                  activities.
                </li>
                <li>
                  <b>The Registrar:</b> is in-charge of every admissions files
                  and official correspondences.
                </li>
                <li>
                  <b>The Bursar:</b> is in-charge of all finances including
                  students’ accounts.
                </li>
                <li>
                  <b>The Director of Christian Services:</b> is in-charge of
                  Christian work attachment and internship.
                </li>
                <li>
                  <b>The Provost:</b> is the executive of RBTI and he is
                  responsible to the office of the Senior Pastor/General
                  Overseer, WODREM INT’L (INC.) in his day to day administration
                  of the college.
                </li>
                <li>
                  <b>The Board of Governor:</b> is the policy maker of RBTI.
                </li>
              </ol>
            </div>
            <div className="w-full flex my-10 flex-col gap-7">
              <div className="flex items-center text-[--text-black] gap-3 md:w-full w-[90%] mx-auto">
                <div className="flex w-fit ">
                  <h1 className="text-[20px] font-lato font-[600] leading-tight text-[--primary-bg]">
                    Board of Governors
                  </h1>
                </div>
                <div className="border border-[rgba(0,0,0,0.1)] w-[79%] hidden md:flex"></div>
              </div>
              <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-5">
                <Team_Member_Card
                  imgUrl="https://placehold.co/600x400"
                  name="REV’D. O.Z. ADEYEMI"
                  position="Chairman"
                />
                <Team_Member_Card
                  imgUrl="https://placehold.co/600x400"
                  name="DR.  ADEKUNLE A. ADELEKE"
                  position="Member"
                />
                <Team_Member_Card
                  imgUrl="https://placehold.co/600x400"
                  name="DR. OLUDARE FASINA "
                  position="Member"
                />
                <Team_Member_Card
                  imgUrl="https://placehold.co/600x400"
                  name="PST. O.A. OLATUNJI "
                  position="Member"
                />
              </div>
              <div className="flex items-center text-[--text-black] gap-3 md:w-full w-[90%] mx-auto">
                <div className="flex w-fit ">
                  <h1 className="text-[20px] font-lato font-[600] leading-tight text-[--primary-bg]">
                    Administrative Staff
                  </h1>
                </div>
                <div className="border border-[rgba(0,0,0,0.1)] w-[79%] hidden md:flex"></div>
              </div>
              <div className="w-full grid grid-cols-1 md:grid-cols-5 gap-5">
                <Team_Member_Card
                  imgUrl="https://placehold.co/600x400"
                  name="PST. TOMILOLA YUSUF"
                  position="Dean of Academics Affair"
                />
                <Team_Member_Card
                  imgUrl="https://placehold.co/600x400"
                  name="PST. EMMANUEL ADEYEMI"
                  position="Director of Christian Service"
                />
                <Team_Member_Card
                  imgUrl="https://placehold.co/600x400"
                  name="Dr. OLUDARE FASINA "
                  position="Registrar"
                />
                <Team_Member_Card
                  imgUrl="https://placehold.co/600x400"
                  name="PST. NIKE OLATUNJI "
                  position="Bursar"
                />
                <Team_Member_Card
                  imgUrl="https://placehold.co/600x400"
                  name="PST. O.A. OLATUNJI"
                  position="Provost"
                />
              </div>
              <div className="flex items-center text-[--text-black] gap-3 md:w-full w-[90%] mx-auto">
                <div className="flex w-fit ">
                  <h1 className="text-[20px] font-lato font-[600] leading-tight text-[--primary-bg]">
                    Academic Staff
                  </h1>
                </div>
                <div className="border border-[rgba(0,0,0,0.1)] w-[79%] hidden md:flex"></div>
              </div>
              <div className="w-full grid grid-cols-2 md:grid-cols-5 gap-5">
                <Team_Member_Card
                  imgUrl="https://placehold.co/600x400"
                  name="DR. OLUDARE FASINA"
                  display="circle"
                />
                <Team_Member_Card
                  imgUrl="https://placehold.co/600x400"
                  name="PST. O.A. OLATUNJI"
                  display="circle"
                />
                <Team_Member_Card
                  imgUrl="https://placehold.co/600x400"
                  name="REV’D O.Z. ADEYEMI "
                  display="circle"
                />
                <Team_Member_Card
                  imgUrl="https://placehold.co/600x400"
                  name="PST. TUNJI OLAGOKE "
                  display="circle"
                />
                <Team_Member_Card
                  imgUrl="https://placehold.co/600x400"
                  name="PST. DAVID ADENUGA"
                  display="circle"
                />
                <Team_Member_Card
                  imgUrl="https://placehold.co/600x400"
                  name="PST. TOBI ALABI"
                  display="circle"
                />
                <Team_Member_Card
                  imgUrl="https://placehold.co/600x400"
                  name="PST EMMANUEL ADEYEMI"
                  display="circle"
                />
                <Team_Member_Card
                  imgUrl="https://placehold.co/600x400"
                  name="PST TOMILOLA YUSUF"
                  display="circle"
                />
              </div>
              <div className="flex items-center text-[--text-black] gap-3 md:w-full w-[90%] mx-auto">
                <div className="flex w-fit ">
                  <h1 className="text-[20px] font-lato font-[600] leading-tight text-[--primary-bg]">
                    Non-Academic Staff
                  </h1>
                </div>
                <div className="border border-[rgba(0,0,0,0.1)] w-[79%] hidden md:flex"></div>
              </div>
              <div className="w-full grid grid-cols-2 md:grid-cols-5 gap-5">
                <Team_Member_Card
                  imgUrl="https://placehold.co/600x400"
                  name="MR ADESINA TEMIDAYO"
                  display="circle"
                />
                <Team_Member_Card
                  imgUrl="https://placehold.co/600x400"
                  name="MISS FAWOLE BUKOLA"
                  display="circle"
                />
                <Team_Member_Card
                  imgUrl="https://placehold.co/600x400"
                  name="MISS OLANIYAN ELIZABETH "
                  display="circle"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Organogram;
