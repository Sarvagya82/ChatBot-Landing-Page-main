import * as classes from "./AboutCard.module.css";

export const AboutCard = ({ icon, title, description }) => {
  return (
    <div
      className={`${classes.card} flex gap-5 items-start md:py-12 py-8 md:px-8 px-6`}
    >
      <div className={`flex justify-start`}>
        <div className="bg-gray-500 rounded-xl text-white p-2">
          <img
            src={icon}
            alt=""
            className={`w-8 md:w-10`}
            height={70}
            style={{ maxWidth: "initial" }}
          />
        </div>
      </div>
      <div className={`flex flex-col gap-2`}>
        <h3 className="text-white font-bold uppercase text-sm md:text-initial">{title}</h3>
        <p
          className={`${classes.subText1} text-sm md:leading-6 leading-5 md:w-10/12`}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default AboutCard;
