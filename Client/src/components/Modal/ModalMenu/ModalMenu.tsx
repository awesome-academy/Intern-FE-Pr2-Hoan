import React, { useState } from "react";
import "./ModalMenu.scss";
import { Modal, SearchBox } from "../../";
import { Link } from "react-router-dom";
import { BiUser, BiHeart } from "react-icons/bi";
import { FiSun } from "react-icons/fi";
import { FaMoon } from "react-icons/fa";
import { SelectCustom } from "../../";

interface modalMenuProps {
  onCloseModalMenu: Function;
  isShowModalMenu: Boolean;
  curUrl: String;
}

const ModalMenu: React.FC<modalMenuProps> = (props) => {
  const initialTheme = localStorage.getItem("theme");
  const [curTheme, setCurTheme] = useState(initialTheme);
  const onCloseModalMenu = () => {
    props.isShowModalMenu && props.onCloseModalMenu();
  };
  const changeTheme = (e: any) => {
    if (e.target.checked) {
      setCurTheme("dark");
      localStorage.setItem("theme", "dark");
      document.documentElement.setAttribute("data-theme", "dark");
      return;
    }
    setCurTheme("light");
    localStorage.setItem("theme", "light");
    document.documentElement.setAttribute("data-theme", "light");
  };
  return (
    <Modal onClose={props.onCloseModalMenu} isShow={props.isShowModalMenu}>
      <div className={`modal-menu ${props.isShowModalMenu ? "active" : ""}`}>
        <div className="mobile-bar">
          <div className="modal-menu-close">
            <div onClick={onCloseModalMenu} className="btn-close"></div>
          </div>
          <div className="action-icon">
            <Link onClick={onCloseModalMenu} to="/login">
              <BiUser />
            </Link>
            <Link onClick={onCloseModalMenu} to="/wishlist">
              <BiHeart />
            </Link>
          </div>
        </div>
        <div className="modal-content">
          <div className="container">
            <div className="mobile-search">
              <SearchBox />
            </div>
            <ul className="mobile-menu">
              <li className={props.curUrl === "/" ? "active" : ""}>
                <Link to="/">Home</Link>
              </li>
              <li className={props.curUrl === "/products" ? "active" : ""}>
                <Link to="/products">Products</Link>
              </li>
              <li className={props.curUrl === "/contact-us" ? "active" : ""}>
                <Link to="/contact-us">Contact</Link>
              </li>
              <li className={props.curUrl === "/about" ? "active" : ""}>
                <Link to="/about">About</Link>
              </li>
            </ul>
            <div className="menu-extras">
              <div className="account-menu">
                <div className="account-login">
                  <p>Login</p>
                  <BiUser />
                </div>
              </div>
              <ul className="switcher-group">
                <li className="switcher-currency">
                  <span>Currency</span>
                  <SelectCustom
                    options={[
                      { value: "USD", option: "USD" },
                      { value: "EUR", option: "EUR" },
                    ]}
                    select="currency"
                  />
                </li>
                <li className="switcher-language">
                  <span>Language</span>
                  <SelectCustom
                    options={[
                      { value: "English", option: "English" },
                      { value: "VietNamese", option: "VietNamese" },
                    ]}
                    select="language"
                  />
                </li>
                <div className="switcher-theme">
                  <span>Theme</span>
                  <div>
                    <input
                      type="checkbox"
                      id="theme"
                      checked={curTheme === "dark" ? true : false}
                      onChange={changeTheme}
                    />
                    <label htmlFor="theme">
                      <FiSun />
                      <FaMoon />
                      <div className="ball"></div>
                    </label>
                  </div>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ModalMenu;
