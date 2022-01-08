import React from "react";

const CartContext = React.createContext({
  isShown: false,
  showCart: () => {},
  hideCart: () => {},
});

export default CartContext;
