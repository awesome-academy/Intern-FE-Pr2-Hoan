import React, { useState } from "react";
import "./Login.scss";
import { Link } from "react-router-dom";
import isUndefinded from "../../helpers/isUndefinded";

interface loginProps {
  register?: Function;
  curUrl?: String;
  directRegisterPage?: Boolean;
  onCloseModalLogin?: Function;
  setDirectRegisterPage?: Function;
}

const Login: React.FC<loginProps> = (props) => {
	const path = isUndefinded(props.directRegisterPage)
	? "/register"
	: props.directRegisterPage
	? "/register"
	: props.curUrl;
  const [formLogin, setFormLogin] = useState({
    username: "",
    password: ""
  });
  const [hasUsername, setHasUsername] = useState(false);
  const [hasPassword, setHasPassword] = useState(false);
  const handleChangeUsername = (e: any) => {
    e.target.value.length ? setHasUsername(true) : setHasUsername(false);
    const curForm = {
      ...formLogin,
      username: `${e.target.value}`
    } 
    setFormLogin(curForm);
  };
  const handleChangePassword = (e: any) => {
    e.target.value.length ? setHasPassword(true) : setHasPassword(false);
    const curForm = {
      ...formLogin,
      password: `${e.target.value}`
    } 
    setFormLogin(curForm);
  };
  const register = (e: any) => {
    props.register && props.register(e)
  };
  const onCloseModalLogin = () => {
    props.onCloseModalLogin && props.onCloseModalLogin();
  };
  const Login = () => {
    console.log(formLogin);
  }
  return (
    <div className="login animate__animated animate__fadeIn">
      <h2 className="title-login">Login</h2>
      <form>
        <p className="input-wrapper">
          <input
            onChange={handleChangeUsername}
            className={`${hasUsername ? "has-text" : ""}`}
            type="text"
            id={`username-${props.curUrl}`}
            autoComplete="off"
          />
          <label htmlFor={`username-${props.curUrl}`}>Username or email address *</label>
        </p>
        <p className="input-wrapper">
          <input
            onChange={handleChangePassword}
            className={`${hasPassword ? "has-text" : ""}`}
            type="password"
            id={`password-${props.curUrl}`}
            autoComplete="off"
          />
          <label htmlFor={`password-${props.curUrl}`}>Password *</label>
        </p>
        <p className="form-group">
          <label htmlFor={`remember-${props.curUrl}`}>
            <input type="checkbox" id={`remember-${props.curUrl}`} />
            <span>Remember me</span>
          </label>
          <span className="lost-password float-end" onClick={onCloseModalLogin}>
            <Link to="lost-password">Lost your password?</Link>
          </span>
        </p>
        <p className="form-actions">
          <button className="btn-submit btn-dark" type="submit" onClick={Login}>
            Log in
          </button>
        </p>
        <p className="form-actions-extra">
          <span>Not a member?</span>
          <span>
            <Link
              onMouseDown={props.register ? register : () => {}}
              to={`${path}`}>
              Register
            </Link>
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
