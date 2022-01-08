import React, { useEffect, useState } from "react";

import css from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const AvailableMeals = (props) => {
  const [mealItems, setMealItems] = useState([]);

  const [error, setError] = useState();
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const getMeals = async () => {
      setLoading(true);

      const resp = await fetch(
        "https://food-app-d9099-default-rtdb.firebaseio.com/meals.json"
      );

      console.log("resp" + resp.ok);
      if (!resp.ok) {
        throw new Error("failed to fetch");
      }
      const jsonData = await resp.json();

      const meals = [];
      for (const id in jsonData) {
        meals.push({
          id,
          name: jsonData[id].name,
          description: jsonData[id].description,
          price: jsonData[id].price,
        });
      }

      setMealItems(meals);
      setLoading(false);
    };

    getMeals().catch((error) => setError("Failed to Fetch Data from Server"));
  }, []);

  console.log(isLoading);
  const mealsList = mealItems.map((el) => (
    <MealItem
      key={el.id}
      name={el.name}
      description={el.description}
      price={el.price}
    />
  ));
  console.log(mealsList);
  return (
    <section className={css.meals}>
      <Card>
        {error && <h2>Oops an Error Has Occurred</h2>}
        {isLoading && !error && <h2>Loading ... </h2>}
        {!isLoading && <ul>{mealsList}</ul>}
      </Card>
    </section>
  );
};

export default AvailableMeals;
