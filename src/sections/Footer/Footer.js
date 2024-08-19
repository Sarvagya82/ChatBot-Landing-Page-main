import { Typography } from "../../components";
import * as classes from "./Footer.module.css";

const footerData = {
  menus: {
    "Quick Links": [
      { link: "#", label: "Home" },
      { link: "#", label: "Features" },
      { link: "#", label: "Pricing" },
      { link: "#", label: "Contact" },
    ],
    "Chatbot Builder": [
      { link: "#", label: "Overview" },
      { link: "#", label: "Templates" },
      { link: "#", label: "Integrations" },
      { link: "#", label: "Customization" },
    ],
    "Resources": [
      { link: "#", label: "Docs" },
      { link: "#", label: "Blog" },
      { link: "#", label: "Webinars" },
      { link: "#", label: "Case Studies" },
    ],
  },
};

export const Footer = () => {
  return (
    <div className={`${classes["footer-container"]} py-5 md:px-28 px-8`}>
      <div className="flex flex-col md:flex-row gap-16 justify-between py-16">
        <div className={`flex flex-col gap-5 text-white md:w-4/12`}>
          BotBuilder
          <Typography typeScale={"tinyText"} className={classes["footer-text"]}>
            Chatbot Builder is a comprehensive platform that empowers businesses
            to create intelligent conversational agents tailored to their unique
            needs.
          </Typography>
        </div>
        <div className="flex md:gap-11 gap-8">
          {Object.keys(footerData.menus).map((category) => (
            <div className="flex flex-col gap-5" key={category}>
              <span className="text-white font-semibold">{category}</span>
              <ul className="flex flex-col gap-4">
                {footerData.menus[category].map((menuItem, index) => (
                  <li key={index}>
                    <a
                      href={menuItem.link}
                      className={`${classes["footer-text"]} text-xs font-semibold`}
                    >
                      {menuItem.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className={`${classes["footer-text"]} text-xs text-center font-semibold`}>
        Chatbot Builder © {new Date().getFullYear()}, All Rights Reserved
      </div>
    </div>
  );
};