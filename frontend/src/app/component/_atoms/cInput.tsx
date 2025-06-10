import {
  createContext,
  FC,
  ReactNode,
  useContext,
  InputHTMLAttributes,
} from "react";

interface CInputContextProps {
  error?: boolean;
}
const CInputContext = createContext<CInputContextProps | undefined>(undefined);

interface FieldProps {
  children: ReactNode;
  error?: boolean;
  className?: string;
}

const Field: FC<FieldProps> = ({ children, error, className }) => {
  return (
    <CInputContext.Provider value={{ error }}>
      <div className={`flex flex-col gap-[6px] flex-1 ${className ?? ""}`}>
        {children}
      </div>
    </CInputContext.Provider>
  );
};

interface LabelProps {
  children: ReactNode;
  className?: string;
}

const Label: FC<LabelProps> = ({ children, className }) => (
  <label className={`cInputLabel ${className}`}>{children}</label>
);

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input: FC<InputProps> = ({ className = "", ...props }) => {
  const context = useContext(CInputContext);
  const error = context?.error ?? false;

  return (
    <input
      {...props}
      className={`cInput ${error ? "border-[#d32f2f]" : ""} ${className}`}
    />
  );
};

interface ValidMessageProps {
  children: ReactNode;
}

const ValidMessage: FC<ValidMessageProps> = ({ children }) => {
  const context = useContext(CInputContext);
  const error = context?.error ?? false;

  return error ? <div className="cInputValidMessage">{children}</div> : null;
};

export const CInput = Object.assign(Input, {
  Field,
  Label,
  ValidMessage,
});
