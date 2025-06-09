import { FC } from "react";
import { CButtonProps } from "@/app/@types/components";

const CButton: FC<CButtonProps> = ({ children, className, ...props }) => {
  return (
    <button {...props} className={`cButton ${className}`}>
      {children}
    </button>
  );
};

export default CButton;
