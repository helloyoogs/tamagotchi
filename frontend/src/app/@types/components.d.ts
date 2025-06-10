import { ButtonHTMLAttributes, ReactNode } from "react";
import { DialogContentProps } from "@radix-ui/react-dialog";

export interface CButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  variant?: fill | line;
  size?: md | lg;
}

interface CPopupProps extends DialogContentProps {
  trigger?: ReactNode;
  children?: ReactNode;
  className?: string;
}
