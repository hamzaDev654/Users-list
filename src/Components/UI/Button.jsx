import React from "react";
import Classes from "./Button.module.css";
export const Button = (props) => {
  return (
    <button
      className={`${Classes.button} ${ props.className}`}
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};
