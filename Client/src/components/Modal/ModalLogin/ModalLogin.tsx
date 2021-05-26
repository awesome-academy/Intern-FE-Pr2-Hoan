import React, { useState } from "react";
import "./ModalLogin.scss";
import { Link } from "react-router-dom";

import { Modal } from "../../";

interface ModalLoginProps {
  onCloseModalLogin: Function;
  isShowModalLogin: Boolean;
  curUrl: String;
}

const ModalLogin: React.FC<ModalLoginProps> = (props) => {
  const [directRegisterPage, setdirectRegisterPage] = useState(false);
  const [directLoginPage, setdirectLoginPage] = useState(false);
  const [toggleModal, setToggleModal] = useState(false);
  const [username, setUsername] = useState("");
  const [hasUsername, setHasUsername] = useState(false);
  const [password, setPassword] = useState("");
  const [hasPassword, setHasPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [hasEmail, setHasEmail] = useState(false);
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
  const handleChangeUsername = (e: any) => {
    e.target.value.length ? setHasUsername(true) : setHasUsername(false);
    setUsername(e.target.value);
  };
  const handleChangePassword = (e: any) => {
    e.target.value.length ? setHasPassword(true) : setHasPassword(false);
    setPassword(e.target.value);
  };
  const handleChangeEmail = (e: any) => {
    e.target.value.length ? setHasEmail(true) : setHasEmail(false);
    setEmail(e.target.value);
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
            {toggleModal ? (
              <div className="container">
                <div className="row d-flex justify-content-center">
                  <div className="col-lg-10">
                    <h2 className="title-login">Register</h2>
                    <form action="login">
                      <p className="input-wrapper">
                        <input
                          onChange={handleChangeEmail}
                          className={`${hasEmail ? "has-text" : ""}`}
                          type="text"
                          id="email"
                          autoComplete="off"
                        />
                        <label htmlFor="email">Email address *</label>
                      </p>
                      <p>A password will be sent to your email address.</p>
                      <div className="privacy-policy">
                        <p>
                          Your personal data will be used to support your
                          experience throughout this website, to manage access
                          to your account, and for other purposes described in
                          our{" "}
                          <span>
                            <Link to="/privacy-policy"> privacy policy.</Link>
                          </span>
                        </p>
                      </div>
                      <p className="form-actions">
                        <button className="btn-submit btn-dark" type="submit">
                          Register
                        </button>
                      </p>
                      <p className="form-actions-extra">
                        <span>Already a member?</span>
                        <span>
                          <Link
                            onMouseDown={login}
                            to={`${directLoginPage ? "/login" : props.curUrl}`}>
                            Log in
                          </Link>
                        </span>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            ) : (
              <div className="container">
                <div className="row d-flex justify-content-center">
                  <div className="col-lg-10">
                    <h2 className="title-login">Login</h2>
                    <form action="login">
                      <p className="input-wrapper">
                        <input
                          onChange={handleChangeUsername}
                          className={`${hasUsername ? "has-text" : ""}`}
                          type="text"
                          id="username"
                          autoComplete="off"
                        />
                        <label htmlFor="username">
                          Username or email address *
                        </label>
                      </p>
                      <p className="input-wrapper">
                        <input
                          onChange={handleChangePassword}
                          className={`${hasPassword ? "has-text" : ""}`}
                          type="password"
                          id="password"
                          autoComplete="off"
                        />
                        <label htmlFor="password">Password *</label>
                      </p>
                      <p className="form-group">
                        <label htmlFor="rememberme">
                          <input type="checkbox" id="rememberme" />
                          <span>Remember me</span>
                        </label>
                        <span
                          className="lost-password float-end"
                          onClick={onCloseModalLogin}>
                          <Link to="lost-password">Lost your password?</Link>
                        </span>
                      </p>
                      <p className="form-actions">
                        <button className="btn-submit btn-dark" type="submit">
                          Log in
                        </button>
                      </p>
                      <p className="form-actions-extra">
                        <span>Not a member?</span>
                        <span>
                          <Link
                            onMouseDown={register}
                            to={`${
                              directRegisterPage ? "/register" : props.curUrl
                            }`}>
                            Register
                          </Link>
                        </span>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Modal>
  );
};
export default ModalLogin;
