import { FC, ReactNode } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { CPopupProps } from "@/app/@types/components";

interface HeaderProps {
  className?: string;
  children?: ReactNode;
}

interface BodyProps {
  children?: ReactNode;
}

interface FooterProps {
  children?: ReactNode;
}

interface TitleProps extends Dialog.DialogTitleProps {
  children?: ReactNode;
  className?: string;
}

interface DescriptionProps extends Dialog.DialogDescriptionProps {
  children?: ReactNode;
  className?: string;
}

interface CloseProps extends Dialog.DialogCloseProps {
  children?: ReactNode;
}

const CPopup: FC<CPopupProps> & {
  Header: FC<HeaderProps>;
  Body: FC<BodyProps>;
  Footer: FC<FooterProps>;
  Title: FC<TitleProps>;
  Description: FC<DescriptionProps>;
  Close: FC<CloseProps>;
} = ({ trigger, children, className, ...props }) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>
      <Dialog.Overlay className={"cPopupOverlay"} />
      <Dialog.Content className={`cPopupContent ${className}`} {...props}>
        {children}
      </Dialog.Content>
    </Dialog.Root>
  );
};

const Header: FC<HeaderProps> = ({ children, className = "" }) => {
  return <div className={`cPopupHeader ${className}`}>{children}</div>;
};

const Title: FC<TitleProps> = ({ children, className = "", ...props }) => (
  <Dialog.Title className={`cPopupTitle ${className}`} {...props}>
    {children}
  </Dialog.Title>
);

const Description: FC<DescriptionProps> = ({
  children,
  className = "",
  ...props
}) => (
  <Dialog.Description className={`${className}`} {...props}>
    {children}
  </Dialog.Description>
);
const Body: FC<BodyProps> = ({ children }) => {
  return <div className="cPopupBody">{children}</div>;
};

const Footer: FC<FooterProps> = ({ children }) => {
  return <div className={"cPopupFooter"}>{children}</div>;
};

const Close: FC<CloseProps> = ({ children, ...props }) => {
  return (
    <Dialog.Close asChild {...props}>
      {children}
    </Dialog.Close>
  );
};

CPopup.Header = Header;
CPopup.Body = Body;
CPopup.Footer = Footer;
CPopup.Title = Title;
CPopup.Description = Description;
CPopup.Close = Close;
export default CPopup;
