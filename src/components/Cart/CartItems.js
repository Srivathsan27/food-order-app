import { useContext } from "react";
import MealContext from "../contexts/meal-context";
import CartItem from "./CartItem";
import css from "./CartItems.module.css";

const CartItems = (props) => {
  const mealCtx = useContext(MealContext);

  return (
    <ul className={css["cart-items"]}>
      {mealCtx.items.map((item) => {
        const increaseCart = (event) => {
          event.preventDefault();
          if (item.amount < 5) {
            mealCtx.addItem({
              ...item,
              amount: 1,
            });
          }
        };
        const decreaseCart = (event) => {
          event.preventDefault();
          mealCtx.removeItem(item);
        };

        return (
          <CartItem
            name={item.name}
            price={item.price}
            amount={item.amount}
            onAdd={increaseCart}
            onRemove={decreaseCart}
          />
        );
      })}
    </ul>
  );
};

export default CartItems;
