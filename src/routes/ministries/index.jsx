import BgWrapper from "@/components/bg-wrapper";
import MinistryCard from "./ministry-card";
import SEO from "@/lib/seo";
import useFetch from "@/hooks/useFetch";

const Ministries = () => {
  const { loading, data } = useFetch("/ministry");
  return (
    <>
      <SEO
        title="House of Restoration Church of Christ | Our Ministries"
        description="House of Restoration Church of Christ"
        name="House of Restoration Church of Christ"
        type="ministries"
      />
      <div className="flex w-full flex-col">
        <BgWrapper>
          <div className="container md:w-[1200px] mx-auto w-[90%]">
            <div>
              <p className="text-[--primary-bg] font-[400] font-lato text-sm">
                Ministeries
              </p>
              <h1 className="text-[--primary-bg] font-gothic font-[400] text-[50px] leading-tight">
                About our ministries
              </h1>
            </div>
          </div>
        </BgWrapper>
        <div className="w-full flex">
          <div className="container md:w-[1200px] mx-auto md:pb-[40px] w-[90%]">
            <div className="w-full text-[--primary-bg] blogParagraph">
              <p>
                At House of Restoration Church Worldwide, we&apos;re passionate
                about empowering individuals to grow in their faith and fulfill
                their purpose. To achieve this, we&apos;ve established various
                ministries designed to cater to different age groups, interests,
                and needs.
              </p>
              <p>
                Our ministries include the Directorate of Young Church, which
                comprises
                <ol className="list-decimal list-inside my-2">
                  <li>The Children&apos;s Ministry and Teenagers Ministry</li>
                  <li>The Youth Ministry and </li>
                  <li>The Worship and Music Ministry.</li>
                </ol>
                Each ministry is dedicated to providing a supportive and
                nurturing environment where individuals can deepen their
                relationship with God and connect with others. Through our
                ministries, we aim to raise a generation of leaders and
                disciples who will impact the world for Christ.
              </p>
            </div>
          </div>
        </div>
        <MinistryCard data={data} loading={loading} />
      </div>
    </>
  );
};

export default Ministries;
