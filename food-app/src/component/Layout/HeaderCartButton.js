import React from "react";
import CartContext from "../../store/cart-context";
import { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
const HeaderCartButton = (props) => {
  const [isItemsChanged, setIsItemChanged] = useState(false);
  const ctx = useContext(CartContext);
  const { items } = ctx;
  useEffect(() => {
    console.log("kkk");
    if (items.length == 0) return;
    setIsItemChanged(true);
    setTimeout(() => {
      setIsItemChanged(false);
    }, 300);
  }, [items]);
  const numberOfItems = ctx.items.reduce((prev, current) => {
    return prev + current.totalAmount;
  }, 0);
  const btnclasses = `${classes["button"]} ${
    isItemsChanged && classes["bump"]
  }`;
  return (
    <button className={btnclasses} onClick={props.onCartClick}>
      <span className={classes["icon"]}>
        <CartIcon></CartIcon>
      </span>
      <span>Cart</span>
      <span className={classes["badge"]}>{numberOfItems}</span>
    </button>
  );
};

export default HeaderCartButton;
