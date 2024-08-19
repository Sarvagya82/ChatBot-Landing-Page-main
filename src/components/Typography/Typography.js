import * as classes from "./Typography.module.css";

export const Typography = ({ typeScale, className, children }) => {
  const scaleClasses = {
    subHeading : "text-sm md:text-lg",
    subText : "text-sm md:text-base"
  }
  
  return (
    <span className={`${classes[typeScale]} ${scaleClasses[typeScale]} ${className}`}>
      {children}
    </span>
  );
};

export default Typography;
