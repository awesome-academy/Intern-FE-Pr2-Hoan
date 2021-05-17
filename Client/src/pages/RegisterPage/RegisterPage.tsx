import React from "react";
import { Register } from "../../components";
import "./RegisterPage.scss"

const RegisterPage = () => {
  return (
    <div className="animate__animated animate__fadeIn">
      <div className="header-spacer"></div>
      <div className="container">
        <div className="register-page">
          <div className="col-lg-4">
            <Register />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
