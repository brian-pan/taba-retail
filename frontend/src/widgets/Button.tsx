import * as React from "react";
import "../assets/styles/widgets/Button.scss";

interface ButtonProps {
  name: string;
  variant?: string;
  className?: string;
}

const Button: React.FunctionComponent<ButtonProps> = (props) => {
  return (
    <button
      className={`${props.className ? props.className : ""} button--${
        props.variant ? props.variant : "primary"
      }`}
    >
      {props.name}
    </button>
  );
};

export default Button;
