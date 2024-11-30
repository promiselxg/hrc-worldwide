import BgWrapper from "@/components/bg-wrapper";
import { BreadCrumb } from "../components/bread-crumb";
import CertificateBg from "../../../assets/images/course/online.webp";
import Diploma from "../../../assets/images/course/diploma.jpg";
import { Link } from "react-router-dom";

const About_RBTI = () => {
  return (
    <>
      <div className="flex w-full flex-col z-0">
        <BgWrapper>
          <div className="container md:w-[1200px] mx-auto  w-[90%] z-10">
            <div>
              <BreadCrumb label="About RBTI" />
              <h1 className="text-[--primary-bg] font-gothic font-[400] text-[35px] md:text-[50px] leading-[1] mt-2 md:mt-0 md:leading-tight">
                About Restorer bible training institute.
              </h1>
            </div>
          </div>
        </BgWrapper>
        <div className="w-full flex">
          <div className="container w-[90%] md:w-[1200px] mx-auto py-8">
            <div className="w-full flex flex-col gap-6 rbti">
              <p className="text-sm  font-lato font-[400] text-[--primary-bg]">
                The Restorer Bible Training Institute is established and owned
                by Word of Deliverance and Revival Evangelical Mission Int’l
                (Inc.) WODREM INT’L (INC.) a.k.a House of Restoration Church
                located at 4, Ejiba Street off Stadium Road, Ilorin, Nigeria.
                RBTI is a Spiritual training and educational arm of the Ministry
                which offers an intensive Ministry Bible training programs in
              </p>
              <div className="w-full flex flex-col md:flex-row gap-5 md:gap-10">
                <Link to="/rbti/course/certificate-course" className="relative">
                  <img
                    src={CertificateBg}
                    alt="Certificate course"
                    className="w-full md:w-[200px] h-[120px] object-cover hover:scale-110 transition-all duration-200"
                  />
                  <div className="absolute bottom-2 left-2 bg-[rgba(0,0,0,0.6)] p-3">
                    <h1 className="text-white font-lato text-sm font-[600]">
                      Certificate course
                    </h1>
                  </div>
                </Link>
                <Link to="/rbti/course/diploma-course" className="relative">
                  <img
                    src={Diploma}
                    alt="Diploma course"
                    className="w-full md:w-[200px] h-[120px] object-cover hover:scale-110 transition-all duration-200"
                  />
                  <div className="absolute bottom-2 left-2 bg-[rgba(0,0,0,0.6)] p-3">
                    <h1 className="text-white font-lato text-sm font-[600]">
                      Certificate course
                    </h1>
                  </div>
                </Link>
              </div>
              <p className="text-sm  font-lato font-[400] text-[--primary-bg]">
                For any of the above programme of study, (CERTIFICATE
                COURSE, DIPLOMA COURSE ), Entrance Application form (EAF 01) is
                available now at the ministry office situated at 4, Ejiba street
                off Stadium road, Ilorin Kwara State – Nigeria. The form (EAF
                01) is 1,000 Naira only.   The form should be completed (front
                and back) and successful applicants will receive admission
                letter and the Course Registration Form (CRF 02) to begin the
                simple registration process.  After the official introduction
                and orientation for the students, Lectures begin. It promises to
                be a time of revelation of Kingdom Mysteries and Principles, and
                impartation of knowledge, understanding, wisdom of the Spirit
                and Anointing of the Holy Ghost. 
              </p>
              <h1 className="text-[40px] font-gothic font-[400] leading-tight">
                Online Training.
              </h1>
              <p className="text-sm  font-lato font-[400] text-[--primary-bg]">
                For Our Online Training Class, interested candidates are to
                follow the information below: A Simple procedure that will make
                you a student of RBTI where ever you are in any part of the
                world.
              </p>
              <ol className="-mt-5 list-decimal ml-5 leading-loose  text-sm md:text-[16px] font-lato text-[--primary-bg]">
                <li>Have a valid personal E-mail address</li>
                <li>Have a personal telegram account and a whatsapp account</li>
                <li>
                  Obtain the Entrance Application Form (EAF 01) by paying N1,000
                  for Basic certificate programme and N2,000 for Diploma course
                  to this Account. Name: Word of Deliverance & Revival
                  Evangelical Mission Acct. Number: 1021326058 Bank: UBA Plc.
                  Then send the proof of payment to RBTI Info. Portal via this
                  whatsapp number : 08030711527, 08107294072
                </li>
                <li>
                  The Application form link shall be sent to your e-mail or
                  personal whatsApp account.
                </li>
                <li>Properly fill the Application form and click Submit.</li>
                <li>
                  On receiving your completed form, your application shall be
                  processed and when successful, we shall send congratulatory
                  message with your admission letter to you.
                </li>
                <li>
                  Then you shall be added to our Restorer Bible Training
                  Institute Online Training Platforms where you will have
                  lectures time-table and other information about your programme
                  of study.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About_RBTI;
