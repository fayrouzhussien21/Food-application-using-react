import classes from "./AvailableMeals.module.css";
import mealitemclasses from "./MealItem.module.css";
import MealitemForm from "./MealitemForm.js";
import CartContext from "../../store/cart-context";
import { useContext } from "react";
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];
const AddtoCartHandler = (item) => {};
const Availablemeals = () => {
  const ctx = useContext(CartContext);
  const meallists = DUMMY_MEALS.map((meal) => {
    return (
      <li className={mealitemclasses.meal}>
        <h3>{meal.name}</h3>
        <div className={mealitemclasses.description}>{meal.description}</div>
        <div className={mealitemclasses.price}>${meal.price}</div>
        <div>
          {" "}
          <MealitemForm
            onAddToCart={(total) => {
              console.log(total);
              ctx.addItem({
                name: meal.name,
                description: meal.description,
                price: meal.price,
                id: meal.id,
                totalAmount: total,
              });
            }}
          ></MealitemForm>
        </div>
      </li>
    );
  });
  const cls = "card " + classes["meals"];
  return (
    <section className={cls}>
      <ul>{meallists}</ul>
    </section>
  );
};

export default Availablemeals;
