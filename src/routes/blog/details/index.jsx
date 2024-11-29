import BgWrapper from "@/components/bg-wrapper";
import { BreadCrumb } from "@/components/breadcrumb";
import Banner from "../../../assets/images/banner/banner-1.png";
import { FiCalendar, FiMail, FiUser } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";

import { FaWhatsapp, FaFacebook, FaLinkedin } from "react-icons/fa";
import { Badge } from "@/components/ui/badge";
import SEO from "@/lib/seo";

const BlogDetails = () => {
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
          <div className="container md:w-[1200px] mx-auto md:pb-[40px] w-[90%]">
            <div>
              <BreadCrumb label="blog title" />
              <h1 className="text-[--primary-bg] font-gothic font-[400] text-[50px] leading-tight mt-1">
                HRC Blog
              </h1>
            </div>
          </div>
        </BgWrapper>
        <div className="flex w-full py-[20px] md:py-[40px]">
          <div className="container md:w-[1200px] mx-auto w-[90%]">
            <h1 className="text-[--primary-bg] font-gothic font-[400] text-[50px] leading-tight my-2">
              Blog title goes here.
            </h1>
            <div className="w-full h-[400px] md:min-h-[500px] md:h-[500px] overflow-hidden relative">
              <img
                src={Banner}
                alt="banner"
                className="w-full object-cover md:h-[500px] h-[400px]"
              />
            </div>
            <div className="w-full flex md:items-center text-[--text-black] gap-3 mt-5 md:justify-between flex-col md:flex-row ">
              <div className="flex md:items-center gap-4 flex-col md:flex-row ">
                <div className="flex items-center gap-2">
                  <FiUser size={20} />
                  <span className="text-[16px] font-lato ">Taiwo Adebayo</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiCalendar size={20} />
                  <span className="text-[16px] font-lato ">
                    October 14th, 2024
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
              <p className="font-lato text-[20px] md:text-sm">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Molestiae rem illum vitae! Consequuntur quod quo rerum dolore
                aperiam eaque repudiandae illum beatae, libero, perspiciatis,
                facilis at culpa mollitia aut enim?
              </p>
              <p className="font-lato text-[20px] md:text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                recusandae quod culpa? Facilis nobis culpa autem cupiditate
                atque, quam, repellat ipsum esse omnis eligendi libero vero illo
                dolores consequuntur dolorum?
              </p>
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
        </div>
      </div>
    </>
  );
};

export default BlogDetails;
