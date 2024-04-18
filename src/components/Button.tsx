interface ButtonProp {
  children: string;
  // color: string;
  //? makes color prop optional
  //here we limit our options on what to type under color prop
  color?: "btn-success" | "btn-primary" | "btn-secondary";
  onClick: () => void;
}

const Button = ({ children, onClick, color }: ButtonProp) => {
  //   return <div className="btn btn-success">Button</div>;
  return (
    <button className={"btn " + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
