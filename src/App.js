import { useState } from "react";
import Cart from "./components/Cart/Cart";
import CartContext from "./components/contexts/cart-context";
import CartManager from "./components/contexts/CartManager";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
function App() {
  const [cartShown, setCartShown] = useState(false);

  const showCartHandler = () => {
    setCartShown(true);
  };

  const hideCartHandler = () => {
    setCartShown(false);
  };

  return (
    <CartContext.Provider
      value={{
        isShown: cartShown,
        showCart: showCartHandler,
        hideCart: hideCartHandler,
      }}
    >
      <CartManager>
        {cartShown && <Cart />}
        <Header />
        <Meals />
      </CartManager>
    </CartContext.Provider>
  );
}
export default App;
