import React, { Fragment, useContext, useEffect, useRef } from "react";

import mealsImage from "../../assets/meals.jpg";
import CartContext from "../contexts/cart-context";
import MealContext from "../contexts/meal-context";
import classes from "./Header.module.css";

const CartIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
    </svg>
  );
};

const HeaderCartButton = (props) => {
  const ctx = useContext(CartContext);
  const mealCtx = useContext(MealContext);

  const itemsCount = mealCtx.items.reduce((acc, item) => {
    return acc + item.amount;
  }, 0);

  const buttonRef = useRef();

  useEffect(() => {
    buttonRef.current.className = `${classes.button} ${classes.bump}`;

    setTimeout(() => {
      buttonRef.current.className = `${classes.button}`;
    }, 300);
  }, [mealCtx.items]);

  console.log(itemsCount);
  return (
    <button ref={buttonRef} className={classes.button} onClick={ctx.showCart}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Cart</span>
      <span className={classes.badge}>{itemsCount}</span>
    </button>
  );
};

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Food Order Service</h1>
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="background-main" />
      </div>
    </Fragment>
  );
};

export default Header;
