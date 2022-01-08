import React from "react";
import css from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
const MealItem = (props) => {
  const price_formatted = `$ ${props.price.toFixed(2)}`;

  return (
    <li className={css.meal}>
      <div>
        <h3> {props.name}</h3>
        <div className={css.description}>{props.description}</div>
        <div className={css.price}>{price_formatted}</div>
      </div>
      <MealItemForm name={props.name} price={props.price} />
    </li>
  );
};

export default MealItem;
