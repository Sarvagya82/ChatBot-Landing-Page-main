import { Typography } from "../Typography";
import * as classes from "./GrowCard.module.css";

export const GrowCard = ({ icon, content, width }) => {
  return (
    <div className={`${classes["grow-card"]}`} style={{ width }}>
      <div className={`flex flex-col gap-10`}>
        <div className={`${classes["card-icon"]} rounded-full p-4`}>
          <img src={icon} className="inline-flex" />
        </div>

        <div>
          <Typography className={`text-white`} typeScale={"captionText2"}>
            {content}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default GrowCard;
