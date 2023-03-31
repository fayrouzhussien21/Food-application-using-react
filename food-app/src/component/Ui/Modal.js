import React from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";
const Modal = (props) => {
  const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onClick}></div>;
  };

  const ModalOverlay = (props) => {
    return (
      <div className={classes.modal}>
        <div>{props.children}</div>
      </div>
    );
  };
  const portalElement = document.getElementById("overlays");
  console.log(ReactDOM);
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onClick} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
