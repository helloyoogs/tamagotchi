import { ButtonHTMLAttributes, ReactNode } from "react";
import { DialogContentProps, DialogProps } from "@radix-ui/react-dialog";

export interface CButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  variant?: fill | line;
  size?: md | lg;
}

interface CPopupProps extends DialogProps, DialogContentProps {
  open?: DialogProps["open"];
  onOpenChange?: DialogProps["onOpenChange"];
  modal?: DialogProps["modal"];
  trigger?: ReactNode;
  children?: ReactNode;
  className?: string;
}

interface AlertPopupProps extends Omit<CPopupProps, "children"> {
  title?: string;
  description?: string;
  confirmText?: string;
  onConfirm: () => void;
}
