import { useContext, useRef, useState } from "react";
import CartContext from "../contexts/cart-context";
import MealContext from "../contexts/meal-context";
import Modal from "../UI/Modal";
import css from "./Cart.module.css";
import CartItems from "./CartItems";
import Checkout from "./Checkout";

const Cart = (props) => {
  const mealCtx = useContext(MealContext);
  const ctx = useContext(CartContext);
  const [isFormShown, setFromShown] = useState(false);

  const orderRef = useRef();
  const showCheckout = (event) => {
    orderRef.current.style.display = "none";
    setFromShown(true);
  };
  const closeForm = () => {
    orderRef.current.style.display = "inline-block";
    setFromShown(false);
  };
  return (
    <Modal onBackdropClick={ctx.hideCart}>
      <CartItems />
      <div className={css.total}>
        <span>Total Amount</span>
        <span>$ {mealCtx.total.toFixed(2)}</span>
      </div>
      <div className={css.actions}>
        <button
          className={css["button--alt"]}
          onClick={isFormShown ? closeForm : ctx.hideCart}
        >
          Close
        </button>
        <button className={css.button} onClick={showCheckout} ref={orderRef}>
          Order
        </button>
      </div>
      {isFormShown && <Checkout />}
    </Modal>
  );
};

export default Cart;
