import React from "react";
import { Login } from "../../components";
import "./LoginPage.scss";

const LoginPage = () => {
  return (
    <div className="animate__animated animate__fadeIn">
      <div className="header-spacer"></div>
      <div className="container">
        <div className="login-page">
          <div className="col-lg-4">
            <Login />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
