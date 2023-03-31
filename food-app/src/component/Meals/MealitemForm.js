import classes from "./MealItemForm.module.css";
import { useState, useRef } from "react";
const MealitemForm = (props) => {
  const mealref = useRef();
  const [isvalid, setvalidation] = useState(true);
  const inputdetailsHandler = (event) => {
    event.preventDefault();
    let totalamount = mealref.current.value;
    totalamount = +totalamount;

    if (totalamount <= 0 || totalamount > 10) {
      setvalidation(false);
      return;
    }
    setvalidation(true);
    props.onAddToCart(totalamount);
  };
  return (
    <form className={classes.form} onSubmit={inputdetailsHandler}>
      <div className="  input-group mb-3 ">
        <input
          id="floatingInput"
          type="number"
          className="form-control"
          min="1"
          max="10"
          step="1"
          ref={mealref}
          defaultValue="1"
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
        />
        <button
          className="btn btn-outline-secondary"
          type="submit"
          id="button-addon2"
        >
          +ADD
        </button>
      </div>
      {!isvalid && <p>Please enter a valid amount (1-10).</p>}
    </form>
  );
};

export default MealitemForm;
