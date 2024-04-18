import { ReactNode } from "react";

interface AlertProp {
  children: ReactNode;
  onClose: () => void;
}

const Alert = ({ children, onClose }: AlertProp) => {
  // return <div className="alert alert-success">{children}</div>;
  return (
    <div>
      <div className={"alert alert-success alert-dismissible"} role="alert">
        {children}
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
          onClick={onClose}
        ></button>
      </div>
      ;
    </div>
  );
};

export default Alert;
