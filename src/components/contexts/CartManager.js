import { useReducer } from "react";
import MealContext from "./meal-context";

let defaultCart = {
  items: [],
  total: 0,
};

const cartUpdater = (prevState, updateDetails) => {
  if (updateDetails.action === "ADD_NEW_ITEM") {
    const match = prevState.items.findIndex((item) => {
      return item.name === updateDetails.item.name;
    });
    if (match < 0) {
      defaultCart = {
        items: prevState.items.concat(updateDetails.item),
        total:
          prevState.total +
          updateDetails.item.amount * updateDetails.item.price,
      };
    } else {
      defaultCart = {
        items: prevState.items.map((item, index) => {
          if (index === match) {
            return {
              ...item,
              amount: item.amount + updateDetails.item.amount,
            };
          }
          return item;
        }),
        total:
          prevState.total +
          updateDetails.item.amount * updateDetails.item.price,
      };
    }
  }
  if (updateDetails.action === "REMOVE_ITEM") {
    const match = prevState.items.find((item) => {
      return item.name === updateDetails.item.name;
    });

    if (typeof match !== "undefined") {
      if (match.amount > 1) {
        match.amount--;
        defaultCart = {
          items: [...prevState.items],
          total: prevState.total - match.price,
        };
      } else {
        defaultCart = {
          items: prevState.items.filter((item) => {
            return item !== match;
          }),
          total: prevState.total - match.price,
        };
      }
    }
  }

  return defaultCart;
};

const CartManager = (props) => {
  const [cartContent, updateCartContents] = useReducer(
    cartUpdater,
    defaultCart
  );

  function addItemHandler(item) {
    updateCartContents({
      action: "ADD_NEW_ITEM",
      item: item,
    });
  }
  function removeItemHandler(item) {
    updateCartContents({
      action: "REMOVE_ITEM",
      item: item,
    });
  }
  const cartContents = {
    items: cartContent.items,
    total: cartContent.total,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <MealContext.Provider value={cartContents}>
      {props.children}
    </MealContext.Provider>
  );
};

export default CartManager;
