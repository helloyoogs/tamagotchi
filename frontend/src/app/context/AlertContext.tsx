"use client";
import { createContext, useContext, useState, ReactNode } from "react";
import CPopup from "@/app/component/_atoms/cPopup";
import CButton from "@/app/component/_atoms/cButton";

type AlertState = {
  open: boolean;
  title?: string;
  description?: string;
  confirmText?: string;
  onConfirm?: () => void;
};

type AlertContextType = {
  showAlert: (options: Omit<AlertState, "open">) => void;
  hideAlert: () => void;
};

const AlertContext = createContext<AlertContextType | null>(null);

export const AlertProvider = ({ children }: { children: ReactNode }) => {
  const [alert, setAlert] = useState<AlertState>({ open: false });

  const showAlert = (options: Omit<AlertState, "open">) => {
    setAlert({ ...options, open: true });
  };

  const hideAlert = () => {
    setAlert((prev) => ({ ...prev, open: false }));
  };

  return (
    <AlertContext.Provider value={{ showAlert, hideAlert }}>
      {children}

      <CPopup
        open={alert.open}
        onOpenChange={(open) => {
          if (!open) hideAlert();
        }}
      >
        <CPopup.Header>
          <CPopup.Title>{alert.title || "알림"}</CPopup.Title>
        </CPopup.Header>

        {alert.description && (
          <CPopup.Body>
            <CPopup.Description>{alert.description}</CPopup.Description>
          </CPopup.Body>
        )}

        <CPopup.Footer>
          <CPopup.Close>
            <CButton size="lg" variant="line" onClick={alert.onConfirm}>
              {alert.confirmText || "확인"}
            </CButton>
          </CPopup.Close>
        </CPopup.Footer>
      </CPopup>
    </AlertContext.Provider>
  );
};

export const useAlert = () => {
  const context = useContext(AlertContext);
  if (!context) throw new Error("useAlert must be used within AlertProvider");
  return context;
};
