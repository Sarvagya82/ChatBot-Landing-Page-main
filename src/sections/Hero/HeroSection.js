import { Navbar, Typography } from "../../components";
import { Button } from "../../components/Button";
import scrollDown from "../../assets/ScrollDown.svg";

import * as classes from "./HeroSection.module.css";

const HeroSection = () => {
  return (
    <div
      className={`px-0 md:px-14 gap-20 pb-20 pt-8 md:pt-20 ${classes["hero-container"]}`}
    >
      <Navbar />
      <div className="flex flex-col items-center">
        <div
          className={`py-16 md:w-2/4 text-center flex flex-col gap-4 items-center`}
        >
          <h1 className="text-white md:w-4/5">
            Power Your Business with <span className={classes["focused-text"]}>Chatbots</span>
          </h1>
          <Typography
            typeScale={"subHeading"}
            className={`${classes["hero-sub-heading"]} w-11/12 md:w-9/12`}
          >
            Revolutionize your customer service and engagement with our advanced chatbot solutions.
          </Typography>
        </div>

        <Button onClick={() => {
          
          window.location = 'http://localhost:3000/admin/default';
        }}>Get Start</Button>
      </div>

      <div className={`flex items-center flex-col mt-24 gap-4`}>
        <img src={scrollDown} alt="scroll down" width={30} />
        <Typography className={`text-white text-xs font-light`}>
          Explore our chatbot features
        </Typography>
      </div>
    </div>
  );
};

export default HeroSection;
