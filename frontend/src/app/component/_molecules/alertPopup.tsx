import { FC } from "react";
import CPopup from "@/app/component/_atoms/cPopup";
import CButton from "@/app/component/_atoms/cButton";
import { AlertPopupProps } from "@/app/@types/components";

export const AlertPopup: FC<AlertPopupProps> = ({
  title = "알림창",
  description,
  confirmText = "확인",
  onConfirm,
  ...rest
}) => {
  return (
    <CPopup {...rest}>
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
