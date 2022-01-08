import React from "react";

const MealContext = React.createContext({
  items: [],
  total: 0,
  addItem: () => {},
  removeItem: () => {},
});

export default MealContext;
