import BgWrapper from "@/components/bg-wrapper";
import { Button } from "@/components/ui/button";
import SEO from "@/lib/seo";
import {
  FiFacebook,
  FiMail,
  FiMapPin,
  FiPhoneCall,
  FiSend,
  FiYoutube,
} from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const ContactUs = () => {
  return (
    <>
      <SEO
        title="House of Restoration Church of Christ | Contact Us"
        description="About House of Restoration Church of Christ"
        name="House of Restoration Church of Christ"
        type="contact us"
      />
      <div className="flex w-full flex-col">
        <BgWrapper>
          <div className="container md:w-[1200px] mx-auto  w-[90%]">
            <div>
              <h1 className="text-[--primary-bg] font-gothic font-[400] text-[50px] leading-tight">
                Get in touch.
              </h1>
              <p className="text-[--primary-bg] font-[400] font-lato text-sm">
                We love to hear from you.
              </p>
            </div>
          </div>
        </BgWrapper>
        <div className="w-full flex">
          <div className="container w-[90%] md:w-[1000px] mx-auto rounded-[8px] my-10 shadow-sm">
            <div className="flex flex-col-reverse md:flex-row justify-center gap-5 my-10">
              <div className="w-full bg-[--primary-bg] px-10 py-20 rounded-[8px] flex">
                <div className="w-full">
                  <div className="flex h-[50px] items-center  gap-4 mb-5">
                    <div>
                      <FiPhoneCall className="text-[30px] text-[#ccc]" />
                    </div>
                    <div className="flex flex-col  leading-tight">
                      <span className="text-[16px] font-lato font-[400]">
                        Whatsapp (msg only)- +234 803 075 8415
                      </span>
                      <span className="text-[16px] font-lato font-[400]">
                       Call- Pastor Adeyemi - +234 810 729 4072
                      </span>
                    </div>
                  </div>
                  <div className="flex h-[50px] items-center  gap-4 mb-5">
                    <div>
                      <FiMail className="text-[30px] text-[#ccc]" />
                    </div>
                    <div className="flex flex-col  leading-tight">
                      <span className="text-[16px] font-lato font-[400]">
                        contact@hrccintl.org
                      </span>
                    </div>
                  </div>
                  <div className="flex h-[50px] items-center  gap-4 mb-5">
                    <div>
                      <FiMapPin className="text-[30px] text-[#ccc]" />
                    </div>
                    <div className="flex flex-col  leading-tight">
                      <span className="text-[16px] font-lato font-[400]">
                        4, Ejiba Street Off stadium Road Ilorin Kwara State, Nigeria.
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-3 items-center">
                    <a
                      href=""
                      className="bg-[rgba(255,255,255,0.1)] p-2 flex items-center w-fit rounded-full"
                    >
                      <FiFacebook size={30} />
                    </a>
                    <a
                      href="https://www.facebook.com/wodrem55"
                      className="bg-[rgba(255,255,255,0.1)] p-2 flex items-center w-fit rounded-full"
                    >
                      <FiSend size={30} className=" rotate-45" />
                    </a>
                    <a
                      href="https://www.instagram.com/yinkaolatunjidayo"
                      className="bg-[rgba(255,255,255,0.1)] p-2 flex items-center w-fit rounded-full"
                    >
                      <FaInstagram size={25} className="  />
                    </a>
                    <a
                      href="https://www.youtube.com/@pastoryinkaa.olatunji7637"
                      className="bg-[rgba(255,255,255,0.1)] p-2 flex items-center w-fit rounded-full"
                    >
                      <FiYoutube size={30} />
                    </a>
                  </div>
                </div>
                <div className="w-1/2 flex justify-center items-center">
                  <a href="mailto:contact@hrccintl.org">
                    <Button className="px-10 py-6 rounded-[8px] bg-[--admin-primary-bg] hover:bg-[--admin-primary-bg] flex items-center gap-4">
                      <FiMail /> Send us an Email
                    </Button>
                  </a>
                </div>
              </div>
              {/* <div className="w-full md:w-1/2">
                <div className="flex gap-3 mb-3 w-full flex-col md:flex-row">
                  <div className="flex  flex-col text-[--primary-bg] w-full">
                    <span className="text-sm">
                      Email Address <i>(optional)</i>
                    </span>
                    <input
                      type="text"
                      placeholder="First Name"
                      className="w-full border border-[--text-black] p-2 rounded-[5px] text-[--primary-bg] outline-none"
                    />
                  </div>
                  <div className="flex flex-col text-[--primary-bg]  w-full">
                    <span className="text-sm">
                      Email Address <i>(optional)</i>
                    </span>
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="w-full border border-[--text-black] p-2 rounded-[5px] text-[--primary-bg] outline-none"
                    />
                  </div>
                </div>
                <div className="flex mb-3 flex-col text-[--primary-bg]">
                  <span className="text-sm">
                    Email Address <i>(optional)</i>
                  </span>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full border border-[--text-black] p-2 rounded-[5px] text-[--primary-bg] outline-none"
                  />
                </div>
                <div className="flex mb-3 flex-col text-[--primary-bg]">
                  <span className="text-sm">Phone number</span>
                  <input
                    type="text"
                    placeholder="Phone number"
                    className="w-full border border-[--text-black] p-2 rounded-[5px] text-[--primary-bg] outline-none"
                  />
                </div>
                <div className="flex mb-3">
                  <textarea
                    name=""
                    id=""
                    placeholder="Your message"
                    rows={6}
                    className="w-full border border-[--text-black] p-2 rounded-[5px] text-[--primary-bg] outline-none resize-none"
                  ></textarea>
                </div>
                <Button className="w-full rounded-[5px] border-none outline-none">
                  Send Message
                </Button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
