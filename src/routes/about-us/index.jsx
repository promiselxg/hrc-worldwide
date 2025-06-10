import BgWrapper from "@/components/bg-wrapper";
import Banner from "../../assets/images/about-us/abt-hrc-section1.jpg";
import Banner2 from "../../assets/images/about-us/abt-hrc-section2.jpg";
import Banner3 from "../../assets/images/about-us/abt-hrc-section3.jpg";
import Banner4 from "../../assets/images/about-us/abt-hrc-section4.jpg";
import Banner5 from "../../assets/images/about-us/abt-hrc-section5.jpg";

import PastorYinka from "../../assets/images/pastors/pastor-section-1.jpg";
import Pastor2 from "../../assets/images/pastors/pastor-section-2.jpg";
import Pastor3 from "../../assets/images/pastors/pastor-section-3.jpg";
import Pastor4 from "../../assets/images/pastors/pastor-section-4.jpg";

import ServiceBanner from "@/components/service-banner";
import MinistryCard from "../ministries/ministry-card";
import SEO from "@/lib/seo";
import useFetch from "@/hooks/useFetch";

const AboutUs = () => {
  const { loading, data } = useFetch("/ministry");

  return (
    <>
      <SEO
        title="House of Restoration Church of Christ | About Us"
        description="House of Restoration Church of Christ | About Us"
        name="House of Restoration Church of Christ"
        type="About us page"
      />
      <div className="flex w-full flex-col">
        <BgWrapper>
          <div className="container md:w-[1200px] mx-auto  w-[90%]">
            <div>
              <h1 className="text-[--primary-bg] font-gothic font-[400] text-[50px] leading-tight">
                About HRCC INTERNATIONAL.
              </h1>
            </div>
          </div>
        </BgWrapper>
      </div>
      <div className="w-full flex">
        <div className="container w-[90%] md:w-[1200px] mx-auto my-10">
          <div className="flex bg-[rgba(0,0,0,0.08)] p-5 rounded-sm leading-tight flex-col gap-3">
            <p className="text-[16px] md:text-sm font-lato font-[400] text-[--text-black] leading-[1.7] md:leading-[1.25]">
              Welcome to House of Restoration Church of christ International
              (HRCC), a vibrant Christian community dedicated to spreading the
              love and teachings of Jesus Christ. Our mission is to create a
              warm and inclusive environment where people from all walks of life
              can come together to worship, learn, and grow.
            </p>
            <p className="text-[16px] md:text-sm font-lato font-[400] text-[--text-black] leading-[1.7] md:leading-[1.25]">
              Founded on the principles of faith, hope, and love, HRCC INT'L
              strives to make a positive impact in the lives of our members and
              the wider community. Through inspiring sermons, engaging programs,
              and community outreach initiatives, we aim to inspire spiritual
              growth, foster meaningful connections, and serve those in need.
            </p>
            <p className="text-[16px] md:text-sm font-lato font-[400] text-[--text-black] leading-[1.7] md:leading-[1.25]">
              At HRCC, we believe in the transformative power of God&apos;s love
              and restoration. We&apos;re committed to helping people from all
              backgrounds discover their purpose, cultivate their faith, and
              live a life that honors God. Our church is a place where you can
              find comfort, guidance, and support as you navigate life&apos;s
              challenges.
            </p>
            <p className="text-[16px] md:text-sm font-lato font-[400] text-[--text-black] leading-[1.7] md:leading-[1.25]">
              Whether you&apos;re seeking a deeper connection with God, looking
              for a community to belong to, or simply wanting to learn more
              about the Christian faith, we invite you to join us on this
              journey of faith, growth, and community.
            </p>
          </div>
        </div>
      </div>
      <div className="flex w-full">
        <div className="w-[90%] md:w-[1200px] mx-auto">
          <div className="flex w-full gap-5 mb-10 flex-col md:flex-row">
            <div className="w-full md:w-1/2 h-fit">
              <div className="w-full h-[400px] overflow-hidden rounded-[8px]">
                <img
                  src={Banner}
                  alt="about us"
                  className="w-full object-contain"
                />
              </div>
            </div>
            <div className="md:w-1/2 ">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="h-[194px] overflow-hidden rounded-[8px]">
                  <img
                    src={Banner2}
                    alt="about us"
                    className="w-full object-cover "
                  />
                </div>
                <div className="h-[194px] overflow-hidden rounded-[8px]">
                  <img
                    src={Banner3}
                    alt="about us"
                    className="w-full object-cover h-[194px]"
                  />
                </div>
                <div className="h-[194px]  overflow-hidden rounded-[8px]">
                  <img
                    src={Banner4}
                    alt="about us"
                    className="w-full object-cover h-[194px]"
                  />
                </div>
                <div className="h-[194px] overflow-hidden rounded-[8px]">
                  <img
                    src={Banner5}
                    alt="about us"
                    className="w-full object-cover h-[194px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MinistryCard title="Our Ministries" data={data} loading={loading} />
      <div className="flex w-full text-[--primary-bg]">
        <div className="container mx-auto w-[90%] md:w-[1200px] my-5 md:my-10">
          <div className="flex gap-5 md:gap-2 flex-col md:flex-row">
            <div className="w-full md:w-full flex flex-col justify-center leading-relaxed gap-y-3">
              <h1 className="text-[30px] font-gothic font-[400] leading-tight">
                Pastor Yinka Olatunji
              </h1>
              <p className="text-[14px] font-lato font-[400] uppercase">
                Lead pastor
              </p>
              <p className="text-[16px] font-lato">
                Pastor Olayinka Adedayo Olatunji is the visionary founder and
                Senior pastor of House of Restoration Church of Christ (HRCC).
                He received a divine call into ministry in 2008, with a strong
                burden to help those who were troubled, frustrated, afflicted,
                wounded, and oppressed.
              </p>
              <p className="text-[16px] font-lato">
                Ordained as a pastor in 2011, Pastor Olatunji served under
                Apostle Blessing Salami, the founder of Kingdom Harvest Gospel
                Ministries, for seven years. In 2016, he was commissioned to
                pioneer House of Restoration Church of Christ International,
                with a vision to &quot;Restore destinies, build lives according
                to divine pattern.&quot;
              </p>
              <p>
                As a prolific author, Pastor Olatunji has written over 10 books,
                which circulate globally. He is also the president of The
                Restorer Publications and the founder/director of Restorer Bible
                Training Institute (RBTI).
              </p>
              <p className="text-[16px] font-lato">
                Pastor Olatunji&apos;s ministry spans over two decades, building
                and strengthening believers, and helping them grow in grace and
                knowledge of Christ. He is a teaching-prophet, motivational
                speaker, and worshiper, with a strong passion for discipleship,
                leadership development, and kingdom advancement.
              </p>
              <p className="text-[16px] font-lato">
                He’s an Economist turned a Kingdom Minister, with a passionate
                commitment to discipleship and leadership development in the
                Body of Christ. He has spent the last two decades training,
                raising and mentoring youths and young Ministers. He’s a
                Teaching – Prophet whose Ministry brings total deliverance and
                restoration to those oppressed by the enemy. He’s the President
                of Word of Deliverance and Revival Evangelical Mission,
                a.k.a.WODREM INT’L (INC.) an Outreach Arm of his Ministry.
              </p>
              <p className="text-[16px] font-lato">
                With a heart for restoring lives and empowering individuals,
                Pastor Olatunji continues to spread the message of hope, love,
                and restoration to nations around the world.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full my-10">
        <div className="container mx-auto w-[90%] md:w-[1200px]">
          <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-5">
            <div className="relative h-[250px] rounded-sm  overflow-hidden">
              <img
                src={PastorYinka}
                alt="pastor"
                className="w-full h-[250px] object-cover"
              />
              <div className="absolute bottom-5 left-5 bg-[rgba(0,0,0,0.5)] w-fit rounded-[5px] px-5 py-2">
                <h1 className="text-[25px] md:text-[20px] font-gothic font-[400] leading-tight">
                  Pastor Yinka Olatunji
                </h1>
                <p className="text-[16px] md:text-sm font-lato font-[400] leading-tight">
                  Lead pastor
                </p>
              </div>
            </div>
            <div className="relative h-[250px] rounded-sm  overflow-hidden">
              <img
                src={Pastor2}
                alt="pastor"
                className="w-full h-[250px] object-cover"
              />
              <div className="absolute bottom-5 left-5 bg-[rgba(0,0,0,0.5)] w-fit rounded-[5px] px-5 py-2">
                <h1 className="text-[25px] md:text-[20px] font-gothic font-[400] leading-tight">
                  Pastor Nike Olatunji
                </h1>
                <p className="text-[16px] md:text-sm font-lato font-[400] leading-tight">
                  Associate pastor
                </p>
              </div>
            </div>
            <div className="relative h-[250px] rounded-sm  overflow-hidden">
              <img
                src={Pastor3}
                alt="pastor"
                className="w-full h-[250px] object-cover"
              />
              <div className="absolute bottom-5 left-5 bg-[rgba(0,0,0,0.5)] w-fit rounded-[5px] px-5 py-2">
                <h1 className="text-[25px] md:text-[20px] font-gothic font-[400] leading-tight">
                  Pastor Emmanuel Adeyemi
                </h1>
                <p className="text-[16px] md:text-sm font-lato font-[400] leading-tight">
                  Resident pastor
                </p>
              </div>
            </div>
            <div className="relative h-[250px] rounded-sm  overflow-hidden">
              <img
                src={Pastor4}
                alt="pastor"
                className="w-full h-[250px] object-cover"
              />
              <div className="absolute bottom-5 left-5 bg-[rgba(0,0,0,0.5)] w-fit rounded-[5px] px-5 py-2">
                <h1 className="text-[25px] md:text-[20px] font-gothic font-[400] leading-tight">
                  Pastor Tomilola
                </h1>
                <p className="text-[16px] md:text-sm font-lato font-[400] leading-tight">
                  Associate pastor
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ServiceBanner />
    </>
  );
};

export default AboutUs;
