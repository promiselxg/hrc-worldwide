import BgWrapper from "@/components/bg-wrapper";
import { BreadCrumb } from "@/components/breadcrumb";
import { FiCalendar, FiMail, FiUser } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";

import { FaWhatsapp, FaFacebook, FaLinkedin } from "react-icons/fa";
import { Badge } from "@/components/ui/badge";
import SEO from "@/lib/seo";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import host from "@/utils/host";
import { formatDateWithoutTime } from "@/utils/getDateDifference";
import { Skeleton } from "@/components/ui/skeleton";

const BlogDetails = () => {
  const params = useParams();
  const [blogData, setBlogData] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      try {
        const { data } = await axios.get(
          `${host.url}/blog/${params.id}/blogPost`
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
        title="House of Restoration Church of Christ Int'l | Our Blog"
        description="About House of Restoration Church of Christ Int'l"
        name="House of Restoration Church of Christ Int'l"
        type="error page"
      />
      <div className="flex w-full flex-col">
        <BgWrapper>
          <div className="container md:w-[1200px] mx-auto w-[90%]">
            <div>
              <BreadCrumb label="blog title" />
              <h1 className="text-[--primary-bg] font-gothic font-[400] text-[50px] leading-tight mt-1">
                {blogData?.data?.blog_title}
              </h1>
            </div>
          </div>
        </BgWrapper>
        <div className="flex w-full py-[20px] md:py-[40px]">
          {loading ? (
            <div className="container md:w-[1200px] mx-auto w-[90%] p-5 space-y-2">
              <Skeleton className="h-2 w-full bg-[#171726] rounded-full" />
              <Skeleton className="h-2 w-2/3 bg-[#212136] rounded-full" />
              <Skeleton className="h-2 w-1/3 bg-[#0d0d16] rounded-full" />
            </div>
          ) : (
            <div className="container md:w-[1200px] mx-auto w-[90%]">
              <h1 className="text-[--primary-bg] font-gothic font-[400] text-[50px] leading-tight my-2">
                {blogData?.data?.blog_title}
              </h1>
              <div className="w-full h-[400px] md:min-h-[500px] md:h-[500px] overflow-hidden relative">
                <img
                  src={blogData?.data?.image_url}
                  alt={blogData?.data?.blog_title}
                  className="w-full object-cover md:h-[500px] h-[400px]"
                />
              </div>
              <div className="w-full flex md:items-center text-[--text-black] gap-3 mt-5 md:justify-between flex-col md:flex-row ">
                <div className="flex md:items-center gap-4 flex-col md:flex-row ">
                  <div className="flex items-center gap-2">
                    <FiUser size={20} />
                    <span className="text-[16px] font-lato ">
                      {blogData?.data?.blog_author}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FiCalendar size={20} />
                    <span className="text-[16px] font-lato ">
                      {formatDateWithoutTime(blogData?.data?.createdAt)}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge
                      variant="outline"
                      className="rounded-full text-[16px] md:text-[12px] font-[400] font-lato"
                    >
                      Blog category
                    </Badge>
                  </div>
                </div>
                <div className="flex text-[--text-black] gap-2 mt-2 md:mt-0">
                  <a href="#">
                    <FaFacebook className="text-[#3b5998]" size={16} />
                  </a>
                  <a href="#">
                    <FaXTwitter className="text-[#1DA1F2]" size={16} />
                  </a>
                  <a href="#">
                    <FaLinkedin className="text-[#0077B5]" size={16} />
                  </a>
                  <a href="#">
                    <FaWhatsapp className="text-[#25D366]" size={16} />
                  </a>
                  <a href="#">
                    <FiMail className="text-[--primary-bg]" size={16} />
                  </a>
                </div>
              </div>

              <div className="text-[--text-black] my-3 leading-tight blogParagraph">
                <p
                  className="font-lato text-[20px] md:text-sm"
                  dangerouslySetInnerHTML={{
                    __html: blogData?.data?.blog_content,
                  }}
                ></p>
              </div>
              <div className="w-full flex text-[--text-black] gap-2 mt-3">
                <a href="#">
                  <FaFacebook className="text-[#3b5998]" size={16} />
                </a>
                <a href="#">
                  <FaXTwitter className="text-[#1DA1F2]" size={16} />
                </a>
                <a href="#">
                  <FaLinkedin className="text-[#0077B5]" size={16} />
                </a>
                <a href="#">
                  <FaWhatsapp className="text-[#25D366]" size={16} />
                </a>
                <a href="#">
                  <FiMail className="text-[--primary-bg]" size={16} />
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default BlogDetails;
