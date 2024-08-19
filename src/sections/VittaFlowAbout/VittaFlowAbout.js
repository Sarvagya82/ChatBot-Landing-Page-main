import * as classes from "./VittaFlowAbout.module.css";
import Users from "../../assets/Users.svg";
import Globe from "../../assets/Globe.svg";
import Search from "../../assets/Search.svg";
import Compass from "../../assets/Compass.svg";
import AboutCard from "../../components/AboutCard";
import { Typography } from "../../components";

const VittaFlowAbout = () => {
  const data = [
    {
      heading: "Experienced Chatbot Experts",
      content:
        "Our team of seasoned chatbot specialists brings years of expertise in conversational AI, natural language processing, and user experience design. They work closely with you to create intelligent chatbots that exceed your customer expectations.",
      img: Users,
    },
    {
      heading: "Seamless Chatbot Integration",
      content:
        "Our chatbot builder platform seamlessly integrates with your existing systems, applications, and customer communication channels. Deliver a unified and consistent brand experience across all touchpoints.",
      img: Globe,
    },
    {
      heading: "Robust Security and Compliance",
      content:
        "Safeguard your customer data and ensure compliance with industry regulations. Our platform employs advanced security measures and data protection protocols to give you and your customers peace of mind.",
      img: Search,
    },
    {
      heading: "Ongoing Support and Optimization",
      content:
        "Benefit from our dedicated support team and continuous optimization efforts. We monitor your chatbot's performance, analyze user feedback, and implement updates to enhance the conversational experience over time.",
      img: Compass,
    },
  ];

  return (
    <div className={`md:px-28 px-7 md:py-16 py-10`}>
      <div className={"flex flex-col items-center justify-center gap-14 md:gap-24"}>
        <div className={`flex flex-col items-center justify-center gap-2`}>
          <h1 className="text-white">
            About <span className={classes.specialText}>Chatbot Builder</span>
          </h1>
          <Typography
            typeScale={"subText"}
            className={`${classes.subText2} text-center md:w-5/12`}
          >
            Chatbot Builder is a comprehensive platform that empowers businesses
            to create intelligent conversational agents tailored to their unique
            needs. Leveraging cutting-edge AI and natural language processing
            technologies, we deliver customizable chatbot solutions that
            transform customer interactions and drive business growth.
          </Typography>
        </div>
        <div className="flex flex-col gap-10">
          <div
            className={`md:flex justify-between items-center flex-wrap w-full`}
          >
            <h2 className={`text-center text-white text-3xl`}>
              What Sets Chatbot Builder Apart?
            </h2>
            <Typography
              typeScale={"subText"}
              className={`text-white md:w-4/12 text-center md:visible hidden`}
            >
              Our platform combines advanced technology, industry expertise, and
              a customer-centric approach to deliver best-in-class chatbot
              solutions.
            </Typography>
          </div>
          <div className={`flex flex-wrap gap-8 justify-center`}>
            {data.map((data, key) => (
              <AboutCard
                key={key}
                title={data.heading}
                description={data.content}
                icon={data.img}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VittaFlowAbout;