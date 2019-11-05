import React from "react";

export function FormBtn(props) {
  return (
    <button {...props} className="btn">
      {props.children}
    </button>
  );
}
