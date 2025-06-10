import { FC } from "react";
import { CButtonProps } from "@/app/@types/components";

const CButton: FC<CButtonProps> = ({
  variant = "line",
  size = "md",
  children,
  className = "",
  ...props
}) => {
  const variantStyle = variant === "line" ? "cButtonLine" : "cButtonFill";
  const sizeStyle = size === "lg" ? "cButtonLg" : "cButtonMd";

  return (
    <button
      {...props}
      className={`cButton ${variantStyle} ${sizeStyle} ${className}`}
    >
      {children}
    </button>
  );
};

export default CButton;
