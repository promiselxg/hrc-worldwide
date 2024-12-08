import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AddBanner from "./banner/add";
import AboutUs from "./about-us/add";
import Ministry from "./ministry/add";
import AddEventPage from "./event/add";
import { cn } from "@/lib/utils";
import { Settings2, Users2 } from "lucide-react";
import AddTeamMember from "./team/add";
import AddResource from "./resource/add";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { AuthContext } from "@/context/auth.context";

import RBTIObjective from "./rbti/add/rbti_objective";
import RBTISpiritualFormation from "./rbti/add/rbti_spiritual_formation";
import RBTICandidateResponsibility from "./rbti/add/rbti_candidate_responsibility";
import RBTIEntryRequirement from "./rbti/add/rbti_entry_requirement";
import RBTITraining_requirement from "./rbti/add/rbti_training_requirement";

const Setting = () => {
  const [pageView, setPageView] = useState(<AddBanner />);
  const [active, setActive] = useState("banner");
  const { user } = useContext(AuthContext);

  const setPage = (currentView) => {
    switch (currentView) {
      case "banner":
        setPageView(<AddBanner />);
        setActive("banner");
        break;
      case "about-us":
        setPageView(<AboutUs />);
        setActive("about-us");
        break;
      case "ministry":
        setPageView(<Ministry />);
        setActive("ministry");
        break;
      case "event":
        setPageView(<AddEventPage />);
        setActive("event");
        break;
      case "team":
        setPageView(<AddTeamMember />);
        setActive("team");
        break;
      case "resource":
        setPageView(<AddResource />);
        setActive("resource");
        break;
      case "rbti_objective":
        setPageView(<RBTIObjective />);
        setActive("rbti_objective");
        break;
      case "spiritual_formation":
        setPageView(<RBTISpiritualFormation />);
        setActive("spiritual_formation");
        break;
      case "candidate_responsibility":
        setPageView(<RBTICandidateResponsibility />);
        setActive("candidate_responsibility");
        break;
      case "entry_requirement":
        setPageView(<RBTIEntryRequirement />);
        setActive("entry_requirement");
        break;
      case "training_requirement":
        setPageView(<RBTITraining_requirement />);
        setActive("training_requirement");
        break;
      default:
        setPageView(<AddBanner />);
        setActive("banner");
        break;
    }
  };

  useEffect(() => {
    if (!user) window.location = "/admin/login";
  }, [user]);
  return (
    <>
      <section className="w-full flex h-screen flex-col gap-y-5 p-5 overflow-y-scroll bg-[whitesmoke]">
        <div className="container flex gap-5">
          <div className="w-1/5 bg-[whitemoke] md:h-[400px] sticky top-0 md:top-10 md:left-5">
            <ScrollArea className="md:h-[400px] md:top-10 md:left-5">
              <ul className="flex flex-col gap-2">
                <h2 className="text-[16px] font-[600] font-lato">
                  General Page Setting
                </h2>
                <Separator className="w-[70%]" />
                <li>
                  <Link
                    to=""
                    onClick={() => setPage("banner")}
                    className={cn(
                      `${
                        active === "banner" && "text-[purple]"
                      } flex items-center gap-2`
                    )}
                  >
                    <Settings2 size={20} />
                    Banner
                  </Link>
                </li>
                <li
                  className={cn(`${active === "about-us" && "text-[purple]"}`)}
                >
                  <Link
                    to=""
                    onClick={() => setPage("about-us")}
                    className={cn(
                      `${
                        pageView === "about-us" && "text-[purple]"
                      } flex items-center gap-2`
                    )}
                  >
                    <Settings2 size={20} />
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to=""
                    onClick={() => setPage("ministry")}
                    className={cn(
                      `${
                        active === "ministry" && "text-[purple]"
                      } flex items-center gap-2`
                    )}
                  >
                    <Settings2 size={20} />
                    Ministries
                  </Link>
                </li>
                <li>
                  <Link
                    to=""
                    onClick={() => setPage("event")}
                    className={cn(
                      `${
                        active === "event" && "text-[purple]"
                      } flex items-center gap-2`
                    )}
                  >
                    <Settings2 size={20} />
                    Events
                  </Link>
                </li>
                <li>
                  <Link
                    to=""
                    onClick={() => setPage("team")}
                    className={cn(
                      `${
                        active === "team" && "text-[purple]"
                      } flex items-center gap-2`
                    )}
                  >
                    <Users2 size={20} />
                    Organogram (Team)
                  </Link>
                </li>

                <li>
                  <Link
                    to=""
                    onClick={() => setPage("resource")}
                    className={cn(
                      `${
                        active === "resource" && "text-[purple]"
                      } flex items-center gap-2`
                    )}
                  >
                    <Settings2 size={20} />
                    Resources
                  </Link>
                </li>
                <h2 className="text-[16px] font-[600] font-lato">
                  RBTI Specific
                </h2>
                <Separator className="w-[70%]" />
                <li>
                  <Link
                    to=""
                    onClick={() => setPage("rbti_objective")}
                    className={cn(
                      `${
                        active === "rbti_objective" && "text-[purple]"
                      } flex items-center gap-2`
                    )}
                  >
                    <Settings2 size={20} />
                    RBTI Objectives
                  </Link>
                </li>
                <li>
                  <Link
                    to=""
                    onClick={() => setPage("spiritual_formation")}
                    className={cn(
                      `${
                        active === "spiritual_formation" && "text-[purple]"
                      } flex items-center gap-2`
                    )}
                  >
                    <Settings2 size={20} />
                    Spiritual Formation
                  </Link>
                </li>
                <li>
                  <Link
                    to=""
                    onClick={() => setPage("candidate_responsibility")}
                    className={cn(
                      `${
                        active === "candidate_responsibility" && "text-[purple]"
                      } flex items-center gap-2`
                    )}
                  >
                    <Settings2 size={20} />
                    Candidate responsiblity
                  </Link>
                </li>
                <li>
                  <Link
                    to=""
                    onClick={() => setPage("entry_requirement")}
                    className={cn(
                      `${
                        active === "entry_requirement" && "text-[purple]"
                      } flex items-center gap-2`
                    )}
                  >
                    <Settings2 size={20} />
                    General entry requirement
                  </Link>
                </li>
                <li>
                  <Link
                    to=""
                    onClick={() => setPage("training_requirement")}
                    className={cn(
                      `${
                        active === "training_requirement" && "text-[purple]"
                      } flex items-center gap-2`
                    )}
                  >
                    <Settings2 size={20} />
                    Training requirement
                  </Link>
                </li>
              </ul>
            </ScrollArea>
          </div>
          <div className="w-[75%]  h-fit">{pageView}</div>
        </div>
      </section>
    </>
  );
};

export default Setting;
