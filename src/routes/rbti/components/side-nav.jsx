import { Link } from "react-router-dom";

const navigation = [
  {
    name: "about rbti",
    link: "/rbti/",
  },
  {
    name: "objectives of rbti",
    link: "/rbti/",
  },
  {
    name: "financial requirement",
    link: "/rbti/",
  },
  {
    name: "spiritual formation",
    link: "/rbti/",
  },
  {
    name: "candidate responsiblity",
    link: "/rbti/",
  },
  {
    name: "organogram",
    link: "/rbti/",
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
                className="w-full bg-[white] p-5 text-[--primary-bg] uppercase font-lato font-[600] cursor-pointer hover:bg-[rgba(255,255,255,0.8)] transition-all delay-100 duration-200"
                key={index}
              >
                <Link to="/">{nav.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default SideNav;
