import css from "./Input.module.css";
import React, { useImperativeHandle, useRef } from "react";
const Input = React.forwardRef((props, ref) => {
  const reference = useRef();

  useImperativeHandle(ref, () => {
    return {
      value,
    };
  });

  const value = () => {
    return reference.current.value;
  };

  return (
    <div className={css.input}>
      <label htmlFor={props.id}>{props.label}</label>
      <input ref={reference} {...props.input}></input>
    </div>
  );
});

export default Input;
