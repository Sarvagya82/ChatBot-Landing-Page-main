import * as classes from "./VittaFlow5.module.css";
import footerImg from "../../assets/footerImg.png";
import { Button } from "../../components/Button";
import { Typography } from "../../components";

const VittaFlow5 = () => {
  return (
    <div className={`md:px-28 px-8 md:pt-28 pt-16`}>
      <div className="flex flex-col md:gap-24 gap-16">
        <div
          className={`flex flex-col md:flex-row gap-5 md:gap-0 items-center justify-between`}
        >
          <div
            className={`flex flex-col gap-5 md:gap-2 justify-center md:w-5/12`}
          >
            <h1 className="text-white text-4xl text-center md:text-left">
              Elevate Your Customer Interactions with Chatbot Builder
            </h1>
            <p
              className={`text-sm text-center md:text-left`}
              style={{ color: "#918989" }}
            >
              Unlock the full potential of conversational AI and enhance
              customer engagement with our cutting-edge chatbot builder
              solution.
            </p>
          </div>
          <div className={`flex justify-center`}>
            <Button>Try It Now</Button>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default VittaFlow5;