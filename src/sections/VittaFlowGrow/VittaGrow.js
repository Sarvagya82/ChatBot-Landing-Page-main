import GrowCard from "../../components/GrowCard/GrowCard";
import { Typography } from "../../components";
import Target from "../../assets/Target.svg";
import Dollar from "../../assets/Dollar.svg";
import Shield from "../../assets/Shield.svg";
import Chat from "../../assets/Chat.svg";
import Bot from "../../assets/Bot.svg";
import Analytics from "../../assets/Analytics.svg";
import * as classes from "./VittaGrow.module.css";

const cardsData = [
  { content: "Chatbot Templates", img: Target },
  { content: "Conversational AI", img: Chat },
  { content: "Analytics & Reporting", img: Analytics },
  { content: "24/7 Customer Support", img: Shield },
  { content: "Seamless Integration", img: Dollar },
  { content: "Automated Workflows", img: Bot },
];

export const VittaFlowGrow = () => {
  return (
    <div
      className={`${classes["main-container"]} px-8 md:px-28 md:pt-32 pt-0 md:pb-44 pb-8`}
    >
      <div className="flex flex-col md:flex-row gap-12 justify-between">
        <div className="flex flex-col gap-3">
          <h1 className="text-white">
            Grow Your Business with{" "}
            <span className={classes["specialText"]}>Chatbot Builder</span>
          </h1>
          <Typography typeScale={"subText"} className={`${classes["subHeading"]}`}>
            Unlock the full potential of conversational AI and streamline your
            customer interactions with our comprehensive chatbot builder
            platform.
          </Typography>
        </div>
        <div className="flex flex-wrap gap-6 justify-center md:justify-end">
          {cardsData.map((card, index) => (
            <GrowCard
              key={index}
              content={card.content}
              icon={card.img}
              width={300}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default VittaFlowGrow;