import React, { useState } from "react";
import "./Register.scss";
import { Link } from "react-router-dom";
import isUndefinded from "../../helpers/isUndefinded";

interface registerProps {
  login?: Function;
  curUrl?: String;
  directLoginPage?: Boolean;
	onCloseModalLogin?: Function;
  setDirectLoginPage?: Function;
}

const Register: React.FC<registerProps> = (props) => {
  const path = isUndefinded(props.directLoginPage)
    ? "/login"
    : props.directLoginPage
    ? "/login"
    : props.curUrl;
  const [email, setEmail] = useState("");
  const [hasEmail, setHasEmail] = useState(false);
  const handleChangeEmail = (e: any) => {
    e.target.value.length ? setHasEmail(true) : setHasEmail(false);
    setEmail(e.target.value);
  };
  const login = (e: any) => {
    props.login && props.login(e);
  };
	const onCloseModalLogin = () => {
		props.onCloseModalLogin && props.onCloseModalLogin()
	}
  const register = () => {
    console.log(email);
    
  }
  return (
    <div className="register animate__animated animate__fadeIn">
      <h2 className="title-register">Register</h2>
      <form>
        <p className="input-wrapper">
          <input
            onChange={handleChangeEmail}
            className={`${hasEmail ? "has-text" : ""}`}
            type="text"
            id={`email-${props.curUrl}`}
            autoComplete="off"
          />
          <label htmlFor="email">Email address *</label>
        </p>
        <p>A password will be sent to your email address.</p>
        <div className="privacy-policy">
          <p>
            Your personal data will be used to support your experience
            throughout this website, to manage access to your account, and for
            other purposes described in our{" "}
            <span onClick={onCloseModalLogin}>
              <Link to="/privacy-policy"> privacy policy.</Link>
            </span>
          </p>
        </div>
        <p className="form-actions">
          <button className="btn-submit btn-dark" type="submit" onClick={register}>
            Register
          </button>
        </p>
        <p className="form-actions-extra">
          <span>Already a member?</span>
          <span>
            <Link onMouseDown={props.login ? login : () => {}} to={`${path}`}>
              Log in
            </Link>
          </span>
        </p>
      </form>
    </div>
  );
};

export default Register;
