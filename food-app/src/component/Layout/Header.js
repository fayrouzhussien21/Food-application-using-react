import React from "react";
import mealimg from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1 style={{ color: "orange" }}>Talabat</h1>
        <HeaderCartButton onCartClick={props.onCartClicked}></HeaderCartButton>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealimg} />
      </div>
    </>
  );
};

export default Header;
