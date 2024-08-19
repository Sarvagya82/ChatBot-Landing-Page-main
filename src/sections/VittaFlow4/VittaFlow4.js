import * as classes from "./VittaFlow4.module.css";
import { Typography } from "../../components";

const VittaFlow4 = () => {
  return (
    <div
      className={`${classes.mainContainer} md:px-28 px-8 md:pt-48 pt-36 md:pb-72 pb-32`}
    >
      <div className={`${classes.textContainer} w-full md:w-7/12`}>
        <Typography className={"text-white"} typeScale={"captionText"}>
          CHATBOT BUILDER
        </Typography>
        <div className="flex flex-col gap-8">
          <h1 className={"text-white mt-3"}>
            Streamline Conversational Experiences with{" "}
            <span className={classes.specialText}>Chatbot Builder</span>
          </h1>
          <Typography
            typeScale={"subText"}
            className={`${classes.subText2} w-full md:w-7/12`}
          >
            Our state-of-the-art chatbot builder empowers you to create
            intelligent conversational agents tailored to your business needs.
            Leverage AI-driven features and seamless integration to enhance
            customer support and engagement.
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default VittaFlow4;