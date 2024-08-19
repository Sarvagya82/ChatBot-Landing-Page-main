import * as classes from "./PortfolioLogo.module.css";

export const PortfolioLogo = ({ logo = "", name }) => {
  return (
    <div className="flex md:gap-4 gap-2">
      <img src={logo} alt="Company Logo" />
      <span className={`${classes["logo-text"]} text-sm md:text-lg`}>{name}</span>
    </div>
  );
};
