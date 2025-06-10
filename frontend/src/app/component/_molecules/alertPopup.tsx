import { FC, ReactNode } from "react";
import CPopup from "@/app/component/_atoms/cPopup";
import CButton from "@/app/component/_atoms/cButton";

interface AlertPopupProps {
  trigger: ReactNode;
  title: string;
  description?: string;
  confirmText?: string;
  onConfirm: () => void;
}

export const AlertPopup: FC<AlertPopupProps> = ({
  trigger,
  title,
  description,
  confirmText = "확인",
  onConfirm,
}) => {
  return (
    <CPopup trigger={trigger}>
      <CPopup.Header>
        <CPopup.Title>{title}</CPopup.Title>
      </CPopup.Header>
      {description && (
        <CPopup.Body>
          <CPopup.Description>{description}</CPopup.Description>
        </CPopup.Body>
      )}
      <CPopup.Footer>
        <CPopup.Close>
          <CButton variant={"line"} size={"lg"} onClick={onConfirm}>
            {confirmText}
          </CButton>
        </CPopup.Close>
      </CPopup.Footer>
    </CPopup>
  );
};
