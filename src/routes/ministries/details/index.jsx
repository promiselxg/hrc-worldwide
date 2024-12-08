import BgWrapper from "@/components/bg-wrapper";
import Banner from "../../../assets/images/banner/banner-1.png";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link, useParams } from "react-router-dom";
import SEO from "@/lib/seo";
import { useEffect, useState } from "react";
import axios from "axios";
import host from "@/utils/host";
import { Skeleton } from "@/components/ui/skeleton";

const MinistryDetails = () => {
  const params = useParams();
  const [blogData, setBlogData] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      try {
        const { data } = await axios.get(
          `${host.url}/ministry/${params.id}/ministry`
        );
        setBlogData(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [params.id]);
  return (
    <>
      <SEO
        title="House of Restoration Church of Christ Int'l | Ministries"
        description="House of Restoration Church of Christ Int'l"
        name="House of Restoration Church of Christ Int'l"
        type="ministry"
      />
      <div className="flex w-full flex-col">
        <BgWrapper>
          <div className="container md:w-[1200px] mx-auto  w-[90%]">
            <div>
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink>
                      <Link to="/">Home</Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink>
                      <Link to="/ministry">Our Ministries</Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Ministry</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
              <h1 className="text-[--primary-bg] font-gothic font-[400] text-[30px] md:text-[50px] leading-[1.1] mt-1 capitalize">
                {blogData?.data?.ministry_category} Ministry
              </h1>
            </div>
          </div>
        </BgWrapper>
        <div className="flex w-full py-[20px] md:py-[40px]">
          <div className="container md:w-[1200px] mx-auto w-[90%]">
            {loading ? (
              <div className="container md:w-[1200px] mx-auto w-[90%] p-5 space-y-2">
                <Skeleton className="h-2 w-full bg-[#171726] rounded-full" />
                <Skeleton className="h-2 w-2/3 bg-[#212136] rounded-full" />
                <Skeleton className="h-2 w-1/3 bg-[#0d0d16] rounded-full" />
              </div>
            ) : (
              <>
                <div className="w-full h-[400px] md:min-h-[500px] md:h-[500px] overflow-hidden relative">
                  <img
                    src={blogData?.data?.ministry_image_url}
                    alt="banner"
                    className="w-full object-cover md:h-[500px] h-[400px]"
                  />
                </div>

                <div className="text-[--text-black] my-3 leading-tight blogParagraph">
                  <p
                    className="font-lato text-[20px] md:text-sm"
                    dangerouslySetInnerHTML={{
                      __html: blogData?.data?.ministry_description,
                    }}
                  ></p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MinistryDetails;
