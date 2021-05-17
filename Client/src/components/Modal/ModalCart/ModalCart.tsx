import React from "react";
import "./ModalCart.scss";
import { Modal } from "../../";

interface modalCartProps {
  onCloseModalCart: Function;
  isShowModalCart: Boolean;
}

const ModalCart: React.FC<modalCartProps> = (props) => {
  const onCloseModalCart = () => {
    props.isShowModalCart && props.onCloseModalCart();
  };
  return (
    <Modal onClose={props.onCloseModalCart} isShow={props.isShowModalCart}>
      <div className={`modal-cart ${props.isShowModalCart ? "active" : ""}`}>
        <header>
          <div className="container">
            <div className="modal-cart-close">
              <p className="quantity">Cart 1</p>
              <div onClick={onCloseModalCart} className="btn-close"></div>
            </div>
          </div>
        </header>
        <div className="modal-content">
          <div className="minicart">
            <ul className="cart-list">
              Cart
            </ul>
            <div className="cart-summary">
              <div className="minicart-total">
                <p>Subtotal:</p>
                <p>$ 10000</p>
              </div>
              <div className="minicart-button">
                <button className="btn-light">View cart</button>
                <div style={{height: ".5rem"}}></div>
                <button className="btn-dark">Checkout</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ModalCart;
