import React from "react";

interface props {
  color?: "primary" | "secondary" | "danger";
  children: string;
  onClick: () => void;
}
const Button = ({ children, onClick, color = "primary" }: props) => {
  return (
    <button className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
