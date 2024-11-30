import BgWrapper from "@/components/bg-wrapper";
import { BreadCrumb } from "../components/bread-crumb";

const Spiritual_Formation = () => {
  return (
    <>
      <div className="flex w-full flex-col z-0">
        <BgWrapper>
          <div className="container md:w-[1200px] mx-auto  w-[90%] z-10">
            <div>
              <BreadCrumb label="Spiritual formation" />
              <h1 className="text-[--primary-bg] font-gothic font-[400] text-[35px] md:text-[50px] leading-[1] mt-2 md:mt-0 md:leading-tight">
                Spiritual formation.
              </h1>
            </div>
          </div>
        </BgWrapper>
        <div className="w-full flex">
          <div className="container w-[90%] md:w-[1200px] mx-auto py-8">
            <div className="w-full flex flex-col gap-6 rbti">
              <div className="rbti">
                <p>
                  As a potential minister of God on training, it’s very
                  important to know God’s Word and His will for your life and to
                  maintain intimate fellowship with Him. Therefore, each student
                  is expected to have a daily devotion which includes the
                  studying and meditating on the Word of God. This should be
                  planned in such a way as to take the student through the Bible
                  in six months.
                </p>
                <p>
                  In addition to the daily personal devotion, each student is
                  also encouraged to be a member of prayer and deliverance
                  service Unit and should be attending prayer and deliverance
                  sessions, Holy Ghost Miracle Hour and Covenant Night of
                  Restoration. However, these are not compulsory for all
                  students especially those who are members of other
                  denominations who do not really believe in the mystery of
                  deliverance. Let every one abide in his or her calling. But
                  for those who have healing and deliverance as part of their
                  callings, we believe these platforms will serve as practical
                  periods among other platforms in the institute.
                </p>
                <p>
                  There will be an organized concerted fasting programme
                  schedules during and at the end of each courses. This is also
                  optional not compulsory for students. But we encourage it.
                </p>
                <p>
                  Then, there will be sessions of Spiritual implantation,
                  impartation of spiritual fruit/gifts, Transference of Spirit,
                  Releasing of Anointing, and healing and deliverance sessions
                  for breakthroughs in life and ministry pursuit. There may be
                  ordination, Leadership placement within the church, new
                  church/ministry planting opportunity and outreach/mission work
                  placement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Spiritual_Formation;
