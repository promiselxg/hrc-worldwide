import BgWrapper from "@/components/bg-wrapper";
import MinistryCard from "./ministry-card";
import SEO from "@/lib/seo";
import useFetch from "@/hooks/useFetch";

const Ministries = () => {
  const { loading, data } = useFetch("/ministry");
  return (
    <>
      <SEO
        title="House of Restoration Church of Christ Int'l | Our Ministries"
        description="House of Restoration Church of Christ Int'l"
        name="House of Restoration Church of Christ Int'l"
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
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad
                tempora magni quis illum nisi amet adipisci beatae maxime ipsum
                nesciunt aliquam esse assumenda quos, repellendus recusandae
                dolorem nobis veniam officia?
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
