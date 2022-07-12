import React from "react";
import classNames from "classnames";

import "components/Button.scss";

export default function Button(props) {
  let buttonClass = {
    'button--confirm': props.confirm,
    'button--danger': props.danger
  };
  
  let disabled = props.disabled ? true : false;
 
  return (
  <button onClick={props.onClick} disabled={disabled} className={classNames("button", buttonClass)}>
    {props.children}
  </button>);
}
