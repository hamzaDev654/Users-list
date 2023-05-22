import React, { Fragment } from "react";
import ReactDom from "react-dom";
import { Card } from "../UI/Card";
import { Button } from "../UI/Button";
import Classes from "./ErrorModal.module.css";

const ModalOverlay = (props) => {
  return (
    <Card className={Classes.modal}>
      <header className={Classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={Classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={Classes.actions}>
        <Button onClick={props.onCloseModal}>Okay</Button>
      </footer>
    </Card>
  );
};

const Backdrop = (props) => {
  return <div className={Classes.backdrop} onClick={props.onCloseModal} />;
};
export const ErrorModal = (props) => {
  return (
    <Fragment>
      {ReactDom.createPortal(
        <Backdrop onCloseModal={props.onCloseModal} />,
        document.getElementById("backdrop-root")
      )}

      {ReactDom.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onCloseModal={props.onCloseModal}
        />,
        document.getElementById("modal-root")
      )}
    </Fragment>
  );
};
