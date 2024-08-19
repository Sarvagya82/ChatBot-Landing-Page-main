import * as classes from "./InfoCard.module.css";

export const InfoCard = ({ title, description, icon }) => {
  return (
    <div className={`${classes.card} flex max-w-sm flex-col gap-5`}>
      <div className={`${classes.topPart} flex items-center gap-5`}>
        <img src={icon} alt="" />
        <h3 className="font-semibold text-lg">{title}</h3>
      </div>
      <div>
        <p className={classes.subText1}>{description}</p>
      </div>
    </div>
  );
};

export default InfoCard;
