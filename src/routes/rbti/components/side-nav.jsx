import { Link } from "react-router-dom";

const navigation = [
  {
    name: "about rbti",
    link: "/rbti/about",
  },
  {
    name: "objectives of rbti",
    link: "/rbti/objectives",
  },
  // {
  //   name: "financial requirement",
  //   link: "/rbti/financial-requirement",
  // },
  {
    name: "spiritual formation",
    link: "/rbti/spiritual-formation",
  },
  {
    name: "candidate responsiblity",
    link: "/rbti/candidate-responsiblity",
  },
  {
    name: "organogram",
    link: "/rbti/organogram",
  },
];
const SideNav = () => {
  return (
    <>
      <nav className="w-full flex">
        <div className="w-full flex">
          <ul className="flex w-full flex-col gap-2">
            {navigation.map((nav, index) => (
              <li
                className="w-full bg-[white] p-5 text-[--primary-bg] uppercase font-lato font-[600] hover:bg-[rgba(255,255,255,0.8)] transition-all delay-100 duration-200"
                key={index}
              >
                <Link to={nav?.link}>{nav.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default SideNav;
