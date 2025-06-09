import { ButtonHTMLAttributes } from "react";

export interface CButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}
