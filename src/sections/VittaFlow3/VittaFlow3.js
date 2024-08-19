import * as classes from "./VittaFlow3.module.css";
import { Typography } from "../../components/Typography";

const VittaFlow3 = () => {
  return (
    <div className={`${classes.mainContainer} md:px-28 px-8 md:py-28 py-24`}>
      <div className={classes.textContainer}>
        <Typography typeScale={"captionText"}>CHATBOT BUILDER</Typography>
        <div className="flex flex-col gap-5 mt-3">
          <h1 className={`md:w-8/12`}>
            Effortless Chatbot Creation with{" "}
            <span className={classes.specialText}>AI-Powered Automation</span>
          </h1>
          <div className={`md:flex items-start justify-between`}>
            <div className="md:w-4/12">
              <Typography typeScale={"subText"} className={classes.subText2}>
                Our advanced chatbot builder simplifies the process of creating
                intelligent conversational agents. Leverage AI-driven features
                and seamless integration with your existing workflows to offer
                24/7 customer support.
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VittaFlow3;