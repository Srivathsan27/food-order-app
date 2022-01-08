import React, { useContext, useRef, useState } from "react";
import MealContext from "../../contexts/meal-context";
import Input from "../../UI/Input";
import css from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const inputRef = useRef();

  const mealCtx = useContext(MealContext);

  const submitHandler = (event) => {
    event.preventDefault();

    const item = {
      name: props.name,
      price: props.price,
      amount: +inputRef.current.value(),
    };

    mealCtx.addItem(item);
  };
  return (
    <form className={css.form} onSubmit={submitHandler}>
      <Input
        ref={inputRef}
        label="Amount"
        input={{
          id: Math.trunc(Math.random()),
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button type="submit">+ Add</button>
    </form>
  );
};

export default MealItemForm;
