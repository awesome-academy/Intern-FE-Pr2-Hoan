import React, { useState, useEffect } from "react";
import "./Header.scss";
import "animate.css";
import { Link, useLocation } from "react-router-dom";
import {ModalCart, ModalLogin, ModalMenu, ModalSearch} from "../"
import logoLight from "../../assets/images/logo-light.png";
import logoDark from "../../assets/images/logo-dark.png";
import { FaBars } from 'react-icons/fa';
import { BiUser, BiSearchAlt } from 'react-icons/bi';
import { FiShoppingCart } from 'react-icons/fi';


const Header: React.FC = () => {
  const curTheme = localStorage.getItem("theme")
  const [isShowModalSearch, setIsShowModalSearch] = useState(false);
  const [isShowModalLogin, setIsShowModalLogin] = useState(false);
  const [directLoginPage, setdirectLoginPage] = useState(false);
  const [isShowModalCart, setIsShowModalCart] = useState(false);
  const [isShowModalMenu, setIsShowModalMenu] = useState(false);
  const [directCartPage, setDirectCartPage] = useState(false);
  const location = useLocation();
  const curUrl = location.pathname;
  const showModalSearch = () => {
    setIsShowModalSearch(!isShowModalSearch);
  };
  const showModalLogin = () => {
    setIsShowModalLogin(!isShowModalLogin);
  };
  const showModalCart = () => {
    setIsShowModalCart(!isShowModalCart);
  };
  const showModalMenu = () => {
    setIsShowModalMenu(!isShowModalMenu);
  };
  const openModalLogin = (e: any): void => {
    if (e.ctrlKey) {
      setdirectLoginPage(true);
      return;
    }
    showModalLogin();
  };
  const openModalCart = (e: any): void => {
    if (e.ctrlKey) {
      setDirectCartPage(true);
      return;
    }
    showModalCart();
  };
  useEffect(() => {}, []);
  return (
    <header className="header">
      <div className="header-main">
        <div className="header-contents container">
          <div className="header-left-items header-items">
            <div className="hamburger-menu">
              <button className="menu-toggle" onClick={showModalMenu}>
                <FaBars />
              </button>
            </div>
            <div onClick={showModalSearch}>
              <BiSearchAlt />
            </div>
          </div>
          <div className="header-center-items header-items">
            <nav className="navigation">
              <ul className="header-menu">
                <li className={curUrl === "/" ? "active" : ""}>
                  <Link to="/">Home</Link>
                </li>
                <li className={curUrl === "/products" ? "active" : ""}>
                  <Link to="/products">Products</Link>
                </li>
              </ul>
            </nav>
            <div className="logo-holder">
              <Link to="/">
                <img src={curTheme === "dark" ? logoDark : logoLight} alt="logo" />
              </Link>
            </div>
            <nav className="navigation">
              <ul className="header-menu">
                <li className={curUrl === "/contact-us" ? "active" : ""}>
                  <Link to="/contact-us">Contact</Link>
                </li>
                <li className={curUrl === "/about" ? "active" : ""}>
                  <Link to="/about">About</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="header-right-items header-items">
            <Link
              onMouseDown={openModalLogin}
              to={`${directLoginPage ? "/login" : curUrl}`}>
              <span className="icon-text">Login</span>
              <BiUser />
            </Link>
            <Link
              onMouseDown={openModalCart}
              to={`${directCartPage ? "/cart" : curUrl}`}>
              <FiShoppingCart />
              <span className="item-counter minicart-counter">1</span>
            </Link>
          </div>
        </div>
      </div>
      {/* <div className="header-mobile"></div> */}
      <ModalSearch
        onCloseModalSearch={showModalSearch}
        isShowModalSearch={isShowModalSearch}
      />
      <ModalLogin
        onCloseModalLogin={showModalLogin}
        isShowModalLogin={isShowModalLogin}
        curUrl={curUrl}
      />
      <ModalCart
        onCloseModalCart={showModalCart}
        isShowModalCart={isShowModalCart}
      />
      <ModalMenu
        onCloseModalMenu={showModalMenu}
        isShowModalMenu={isShowModalMenu}
      />
    </header>
  );
};

export default Header;
