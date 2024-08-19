import * as classes from "./VittaFlow6.module.css";
import num1 from "../../assets/Number.svg";
import num2 from "../../assets/Number-1.svg";
import num3 from "../../assets/Number-2.svg";
import Company from "../../assets/Company.svg";
import InfoCard from "../../components/InfoCard";
import { PortfolioLogo } from "../../components/PortfolioLogo";
import { Typography } from "../../components";

const VittaFlow6 = () => {
  const data = [
    {
      heading: "Customizable Chatbot Templates",
      content:
        "Streamline your chatbot creation process with our extensive library of pre-built templates. Easily customize and deploy intelligent conversational agents tailored to your business needs.",
      img: num1,
    },
    {
      heading: "Conversational AI Integration",
      content:
        "Leverage the power of advanced AI algorithms to create chatbots that engage in human-like dialogues. Our platform seamlessly integrates cutting-edge conversational AI capabilities to enhance user experiences.",
      img: num2,
    },
    {
      heading: "Automated Workflows and Analytics",
      content:
        "Automate repetitive tasks, optimize conversational flows, and gain valuable insights with our built-in analytics. Empower your customer support team and make data-driven decisions to improve chatbot performance.",
      img: num3,
    },
  ];

  return (
    <div className={`py-10 md:pb-20 px-8 md:px-28`}>
      <div className={`${classes.wrapper} md:mt-36 mt-24 mb-10 flex flex-col gap-10`}>
        <div className={`flex flex-col gap-8 items-center`}>
          <h1 className="text-center">
            Elevate Your Customer Experience with{" "}
            <span className={classes.specialText}>Chatbot Builder</span>
          </h1>
          <Typography
            typeScale={"subText"}
            className={`${classes.subText2} text-center text-sm w-full md:w-8/12`}
          >
            Transform your customer support with our cutting-edge chatbot builder.
            Leverage AI-powered conversational agents, automated workflows, and
            advanced analytics to deliver seamless and personalized interactions.
          </Typography>
        </div>
        <div
          className={`flex gap-10 flex-wrap px-5 md:px-0 justify-center`}
        >
          {data.map((item, key) => (
            <InfoCard
              key={key}
              title={item.heading}
              description={item.content}
              icon={item.img}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default VittaFlow6;