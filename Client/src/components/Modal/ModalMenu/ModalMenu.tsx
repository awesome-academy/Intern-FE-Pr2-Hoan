import React, { useState } from "react";
import "./ModalMenu.scss";
import { Modal, SearchBox } from "../../";
import { Link } from "react-router-dom";
import { BiUser, BiHeart } from "react-icons/bi";
import { FiSun } from "react-icons/fi";
import { FaMoon } from "react-icons/fa";

interface modalMenuProps {
  onCloseModalMenu: Function;
  isShowModalMenu: Boolean;
}

const ModalMenu: React.FC<modalMenuProps> = (props) => {
  const initialTheme = localStorage.getItem("theme");
  const [curTheme, setCurTheme] = useState(initialTheme);
  console.log(curTheme);
  const onCloseModalMenu = () => {
    props.isShowModalMenu && props.onCloseModalMenu();
  };
  const changeTheme = (e: any) => {
    if (e.target.checked) {
      setCurTheme("dark")
      localStorage.setItem("theme", "dark");
      document.documentElement.setAttribute('data-theme', 'dark');
      return;
    }
    setCurTheme("light")
    localStorage.setItem("theme", "light");
    document.documentElement.setAttribute('data-theme', 'light');
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
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
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
                  <select name="currency" id="currency">
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                  </select>
                </li>
                <li className="switcher-language">
                  <span>Language</span>
                  <select name="language" id="language">
                    <option value="en">English</option>
                    <option value="vi">VietNamese</option>
                  </select>
                </li>
                <div className="switcher-theme">
                  <span>Theme</span>
                  <div>
                    <input type="checkbox" id="theme" checked={curTheme === 'dark' ? true : false } onChange={changeTheme} />
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
