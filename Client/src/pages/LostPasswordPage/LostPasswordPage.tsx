import React, { useState } from "react";
import "./LostPasswordPage.scss"

const LostPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [hasEmail, setHasEmail] = useState(false);
  const handleChangeEmail = (e: any) => {
    e.target.value.length ? setHasEmail(true) : setHasEmail(false);
    setEmail(e.target.value);
  };
  const resetPassword = () => {};
  return (
    <div className="animate__animated animate__fadeIn">
      <div className="header-spacer"></div>
      <div className="container">
        <div className="lost-password-page">
          <div className="col-lg-4">
            <h2 className="title-page" style={{ textAlign: "center" }}>
              Lost Password
            </h2>
            <form action="register">
              <div className="note">
                <p>
                  Lost your password? Please enter your username or email
                  address. You will receive a link to create a new password via
                  email.
                </p>
              </div>
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
              <p className="form-actions">
                <button className="btn-submit btn-dark" type="submit">
                  Register
                </button>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LostPasswordPage;