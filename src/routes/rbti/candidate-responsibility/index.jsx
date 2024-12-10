import BgWrapper from "@/components/bg-wrapper";
import { BreadCrumb } from "../components/bread-crumb";
import { Link } from "react-router-dom";
import useFetch from "@/hooks/useFetch";
import { CustomEditorPreview } from "@/components/wysiwyg/preview";

const Candidate_Responsibility = () => {
  const { data } = useFetch("/data/rbti/rbti_objective");
  const { data: entryRequirement } = useFetch(
    "/data/rbti/rbti_entry_requirement"
  );
  console.log(data);
  return (
    <>
      <div className="flex w-full flex-col z-0">
        <BgWrapper>
          <div className="container md:w-[1200px] mx-auto  w-[90%] z-10">
            <div>
              <BreadCrumb label="Candidates responsibility & opportunity" />
              <h1 className="text-[--primary-bg] font-gothic font-[400] text-[35px] md:text-[50px] leading-[1] mt-2 md:mt-0 md:leading-tight">
                Candidates responsibility & opportunity.
              </h1>
            </div>
          </div>
        </BgWrapper>
        <div className="w-full flex">
          <div className="container w-[90%] md:w-[1200px] mx-auto py-8">
            <div className="w-full flex flex-col gap-6 rbti">
              <h1 className="text-[40px] font-gothic font-[400] leading-tight">
                Candidates responsibility.
              </h1>
              <CustomEditorPreview
                value={data?.about_us_content}
                theme="bubble"
                className="ql-ol"
              />
              <h1 className="text-[40px] font-gothic font-[400] leading-tight">
                General entry requirements.
              </h1>

              <CustomEditorPreview
                value={entryRequirement?.about_us_content}
                theme="bubble"
                className="ql-ol"
              />
              <h1 className="text-[40px] font-gothic font-[400] leading-tight">
                RBTI Programme of study and Admission information.
              </h1>
              <p className="text-[16px]  font-lato font-[400] text-[--primary-bg]">
                RBTI offers two levels of Biblical training Programmes. The
                Certificate Program is the first level of training. Of
                necessity, Students must first undertake the Certificate Course
                successfully with good acceptable grades before proceeding to
                the Diploma Course as he or she desires. Student can only
                graduate at any level of study only after passing the entire
                courses required by the college.
              </p>
              <ol className="-mt-5 list-decimal ml-5 leading-loose  text-sm md:text-[16px] font-lato text-[--primary-bg]">
                <li>
                  <Link to="/rbti/course/certificate-course">
                    Certificate Programme
                  </Link>
                </li>
                <li>
                  <Link to="/rbti/course/diploma-course">
                    Diploma Programme
                  </Link>
                </li>
              </ol>
              <h1 className="text-[40px] font-gothic font-[400] leading-tight">
                Certificate course online training.
              </h1>
              <p className="text-[16px]  font-lato font-[400] text-[--primary-bg]">
                Procedure for becoming a student.
              </p>
              <ol className="-mt-5 list-decimal ml-5 leading-loose  text-sm md:text-[16px] font-lato text-[--primary-bg]">
                <li>Have a valid personal E-mail address.</li>
                <li>Open a personal Telegram Account.</li>
                <li>
                  Obtain the Entrance Application Form (EAF 01) by paying N1,000
                  only to: Word of Deliverance & Revival Evangelical Mission
                  Acct. No. 1021326058 UBA Plc.
                </li>
                <li>
                  The EAF 01 you paid for shall be sent to your personal E-mail.
                </li>
                <li>
                  Properly fill and complete the EAF 01 and send it the same
                  email wodreminternational@gmail.com.
                </li>
                <li>
                  After we have received your completed form EAF 01, it then
                  means that your application is successful. And Admission
                  letter shall be fowarded to you.
                </li>
                <li>
                  Then you shall be added to the Telegram Class Room which is
                  RBTI Telegram training platform where you shall be given
                  Lecture Time Table, Lecture materials, handouts and others.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Candidate_Responsibility;
