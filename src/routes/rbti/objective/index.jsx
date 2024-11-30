import BgWrapper from "@/components/bg-wrapper";
import { BreadCrumb } from "../components/bread-crumb";

const Objective = () => {
  return (
    <>
      <div className="flex w-full flex-col z-0">
        <BgWrapper>
          <div className="container md:w-[1200px] mx-auto  w-[90%] z-10">
            <div>
              <BreadCrumb label="Objectives of RBTI" />
              <h1 className="text-[--primary-bg] font-gothic font-[400] text-[35px] md:text-[50px] leading-[1] mt-2 md:mt-0 md:leading-tight">
                Objectives of RBTI.
              </h1>
            </div>
          </div>
        </BgWrapper>
        <div className="w-full flex">
          <div className="container w-[90%] md:w-[1200px] mx-auto py-8">
            <div className="w-full flex flex-col gap-6 rbti">
              <h1 className="text-[40px] font-gothic font-[400] leading-tight">
                Our Objectives.
              </h1>

              <ol className="-mt-5 list-decimal ml-5 leading-loose  text-sm md:text-[16px] font-lato text-[--primary-bg]">
                <li>
                  To provide sound biblical based Healing and Deliverance
                  training for Christians and to spiritually equip them for the
                  Kingdom works. (2Tim. 2:15)
                </li>
                <li>
                  To train and empower Christians who have divine call upon
                  their lives and to help them prepare for the fulfillment of
                  their callings/ministries. (Col. 4:17)
                </li>
                <li>
                  To adequately inform and prepare believers who wish to acquire
                  sound spiritual understanding about Christ for effectiveness
                  in Kingdom Assignments (Eph.4:11-14)
                </li>
                <li>
                  To give sound Deliverance and evangelistic training that is
                  relevant to the needs and aspirations of the end-time churches
                  and the society at large. (Obad. 1:17)
                </li>
                <li>
                  To train and equip men and women in the full Gospel of Jesus
                  Christ who will be able to train others for the Kingdom
                  business. (2 Tim.2:2).
                </li>
                <li>
                  To provide adequate spiritual education towards the discovery,
                  pursuit and fulfillment of one’s dream, vision or ministry
                  (Jeremiah 1:4-5, 17).
                </li>
                <li>
                  To impart Spiritual fruit/gifts to Christians in order to be
                  established in the faith and also, to effectively engage in
                  the Great Commission (Rom. 1:11, Col. 2:6-8, Matt. 28:18-20)
                </li>
                <li>
                  To train and reinstruct those who have divine gifts, special
                  potentials, talents or are called into any of the fivefold
                  Ministry gifts (Pastors, Prophets, Evangelists, Teachers and
                  Apostles) and protect them from the errors in this end time
                  (Eph. 4:11-16, 1Corin. 12:1-3, 27-31)
                </li>
                <li>
                  To help upcoming Ministers of the gospel to fully understand
                  the covenant demands and responsibilities upon their calling
                  and divine gifts (2Tim.4:5)
                </li>
                <li>
                  To help position young ministers and those who are going into
                  ministry through Impartation, Transference of Spirit,
                  Implantation, Ordination or Leadership placement in the Church
                  or outreach mission. Rom. 1:11, Num. 27:23, Deut. 34:9, Titus
                  1:5, Acts 8:18, 1Tim.4:14.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Objective;
