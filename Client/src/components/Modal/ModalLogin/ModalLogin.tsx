import React, { useState } from "react";
import "./ModalLogin.scss";
import { Modal, Register, Login } from "../../";

interface ModalLoginProps {
  onCloseModalLogin: Function;
  isShowModalLogin: Boolean;
  curUrl: String;
}

const ModalLogin: React.FC<ModalLoginProps> = (props) => {
  const [directRegisterPage, setdirectRegisterPage] = useState(false);
  const [directLoginPage, setdirectLoginPage] = useState(false);
  const [toggleModal, setToggleModal] = useState(false);
  const onCloseModalLogin = () => {
    setToggleModal(false);
    props.isShowModalLogin && props.onCloseModalLogin();
  };
  const register = (e: any) => {
    if (e.ctrlKey) {
      setdirectRegisterPage(true);
      return;
    }
    toggleModalLogin();
  };
  const login = (e: any) => {
    if (e.ctrlKey) {
      setdirectLoginPage(true);
      return;
    }
    toggleModalLogin();
  };
  const toggleModalLogin = () => {
    setToggleModal(!toggleModal);
  };
  return (
    <Modal
      onClose={props.onCloseModalLogin}
      isShow={props.isShowModalLogin}
      outBoxClose={true}>
      <div className={`modal-login ${props.isShowModalLogin ? "active" : ""}`}>
        <div className="modal-login-wrapper">
          <header>
            <div className="modal-login-close">
              <div onClick={onCloseModalLogin} className="btn-close"></div>
            </div>
          </header>
          <div className="modal-content">
            <div className="container">
              <div className="row d-flex justify-content-center">
                <div className="col-lg-10" style={{ overflow: "hidden" }}>
                  {toggleModal ? (
                    <div>
                      <Register login={login} curUrl={props.curUrl} directLoginPage={directLoginPage} onCloseModalLogin={onCloseModalLogin} setDirectLoginPage={setdirectLoginPage}/>
                    </div>
                  ) : (
                    <Login register={register} curUrl={props.curUrl} directRegisterPage={directRegisterPage} onCloseModalLogin={onCloseModalLogin} setDirectRegisterPage={setdirectRegisterPage}/>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};
export default ModalLogin;
