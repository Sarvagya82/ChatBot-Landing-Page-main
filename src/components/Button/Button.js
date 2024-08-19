import * as classes from "./Button.module.css";

export const Button = ({ children , ...rest}) => {
  return (
    <button className={`${classes["button"]} text-white text-sm font-semibold`}{
      ...rest
    }>
      {children}
    </button>
  );
};

export default Button;
