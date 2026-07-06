import * as React from "react";

const MyIcon = ({
  size = 24,
  color = "currentColor",
  className = "",
  ...props
}) => {
  return (
    <svg
      viewBox="0 0 1200 1050"
      width={size}
      height={size}
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      {/* Replace this with the traced SVG path */}
      <path d="M..." />
    </svg>
  );
};

export default MyIcon;