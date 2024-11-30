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
import { Link } from "react-router-dom";
import SEO from "@/lib/seo";

const MinistryDetails = () => {
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
              <h1 className="text-[--primary-bg] font-gothic font-[400] text-[30px] md:text-[50px] leading-[1.1] mt-1">
                Name of selected ministry goes here.
              </h1>
            </div>
          </div>
        </BgWrapper>
        <div className="flex w-full py-[20px] md:py-[40px]">
          <div className="container md:w-[1200px] mx-auto w-[90%]">
            <div className="w-full h-[400px] md:min-h-[500px] md:h-[500px] overflow-hidden relative">
              <img
                src={Banner}
                alt="banner"
                className="w-full object-cover md:h-[500px] h-[400px]"
              />
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
          </div>
        </div>
      </div>
    </>
  );
};

export default MinistryDetails;
