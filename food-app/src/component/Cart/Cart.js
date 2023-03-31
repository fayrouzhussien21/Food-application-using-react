import React from "react";
import classes from "./Cart.module.css";
import Modal from "../Ui/Modal";
import CartItem from "./CartItem";
import { useContext } from "react";
import CartContext from "../../store/cart-context";
const Cart = (props) => {
  const ctx = useContext(CartContext);
  const addItemHandler = (item) => {
    ctx.addItem({ ...item, totalAmount: 1 });
  };
  const removeItemHandler = (id) => {
    ctx.removeItem(id);
  };
  const CartItems = (
    <ul className={classes["cart-item"]}>
      {ctx.items.map((cartItem) => {
        return (
          <CartItem
            name={cartItem.name}
            amount={cartItem.totalAmount}
            price={cartItem.price}
            onAdd={addItemHandler.bind(null, cartItem)}
            onRemove={removeItemHandler.bind(null, cartItem.id)}
          ></CartItem>
        );
      })}
    </ul>
  );
  return (
    <Modal onClick={props.onCloseClicked}>
      {CartItems}
      <div className={classes["total"]}>
        <span className={classes["amount"]}>Total amount</span>
        <span className={classes.price}>{ctx.totalAmount.toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        <button
          className={classes["button--alt"]}
          onClick={props.onCloseClicked}
        >
          Close
        </button>
        {!!ctx.items.length && (
          <button className={classes.button}>Order</button>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
