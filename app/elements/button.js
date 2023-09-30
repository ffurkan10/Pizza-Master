import React from "react";

const Button = ({
  type,
  children,
  text,
  onClick,
  disabled,
  size,
  variant,
  theme,
  props,
}) => {
  return (
    <button
      className={`Button Size:${size || "medium"} Variant:${
        variant || "normal"
      } Theme:${theme || "dark"} `}
      onClick={() => onClick()}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  children: null,
  onClick: () => {},
  disabled: false,
  size: "medium",
  variant: "default",
  theme: "dark",
};

export default Button;
