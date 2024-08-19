import { useState } from "react";
import { Logo } from "../Logo";
import Menu from "../../assets/Menu.svg";
import logo from "../../assets/xlogo.png";

import * as classes from "./Navbar.module.css";

const menuData = [
  {
    label: "About",
    link: "#",
  },
  {
    label: "Careers",
    link: "#",
  },
  {
    label: "What's Next",
    link: "#",
  },
  {
    label: "Contact",
    link: "#",
  },
];

export const Navbar = () => {
  const [show, setShow] = useState();

  return (
    <nav
      className={`text-white flex  flex-wrap w-full px-6 py-3 md:navbar-lg navbar-sm justify-between items-center relative`}
    >
      <img src={logo} width={43} alt="Logo" style={{filter : "invert(1)"}} />

      <img
        src={Menu}
        alt="Menu Icon"
        onClick={() => setShow((prev) => !prev)}
        className=" cursor-pointer md:hidden block"
      />

      <div
        className={`${
          !show ? `hidden` : "block"
        } md:flex  w-11/12 md:w-auto left-2/4 flex -translate-x-1/2 md:translate-x-0 md:left-0 flex-col md:flex-row md:items-center absolute md:relative bg-dark md:bg-none top-full`}
      >
        <ul className="md:flex list-none gap-5">
          {menuData.map((menuItem) => (
            <li className={`${classes["menu-item"]}`}>
              <a href={""} className={`p-4 md:p-0 block`}>
                {menuItem.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
