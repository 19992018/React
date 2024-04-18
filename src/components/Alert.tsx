import { ReactNode } from "react";

interface AlertProp {
  children: ReactNode;
  classdefiner: string;
}

const Alert = ({ children, classdefiner }: AlertProp) => {
  // return <div className="alert alert-success">{children}</div>;
  return (
    <div>
      <div
        className={"alert alert-success alert-dismissible " + classdefiner}
        role="alert"
      >
        {children}
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
      ;
    </div>
  );
};

export default Alert;
