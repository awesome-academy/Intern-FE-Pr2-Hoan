import React from "react";
import "./Modal.scss";
import "animate.css";

interface ModalProps {
  onClose: Function;
  isShow: Boolean;
  outBoxClose?: Boolean;
}

const Modal: React.FC<ModalProps> = (props) => {
  const onClose = () => {
    if(props.outBoxClose) {
      return;
    }
    props.onClose && props.onClose(false);
  };
  return (
    <aside className="modal">
      {props.children}
      <input
        type="button"
        onClick={onClose}
        style={{ display: "none" }}
        value="Close"
      />
      <div
        className={`modal-space ${props.isShow ? "active" : ""}`}
        onClick={onClose}></div>
    </aside>
  );
};
export default Modal