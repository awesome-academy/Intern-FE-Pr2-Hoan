import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { SelectCustom } from "../";
import { widgets } from "./widgets";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-widgets">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="menu-widgets">
                <div className="row">
                  {widgets.map((widget, i1) => (
                    <div key={i1} className="col-12 col-lg-4 col-md-6 menu-widget">
                      <div className={`menu-${widget.name}`}>
                        <h6>{widget.name}</h6>
                        <ul className="menu">
                          {widget.links.map((link, i2) => (
                            <li key={i2} className="item">
                              <Link to={link.to}>{link.text}</Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="widget-text">
                <h6>GOYA THEME</h6>
                <p>
                  Lorem ipsum dolor amet affogato wolf post-ironic authentic
                  palo santo organic retro.
                </p>
              </div>
              <div className="widget-form">
                <form action="register" className="row">
                  <input className="col-md-7" type="email" placeholder="Your email address" />
                  <input className="col-md-4" type="submit" value="Sign up" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bars">
        <div className="container">
          <div className="row">
            <div className="col-md-4 footer-items footer-left">
              <ul className="menu-footer">
                <li className="privacy-policy">
                  <Link to="/privacy-policy">Privacy Policy</Link>
                </li>
                <li className="terms-conditions">
                  <Link to="/terms-conditions">Terms &amp; Conditions</Link>
                </li>
              </ul>
            </div>
            <div className="col-md-4 footer-items footer-center">
              <ul className="social-icons">
                <li>
                  <Link to="" target="_blank">
                    <FaFacebookF />
                  </Link>
                </li>
                <li>
                  <Link to="" target="_blank">
                    <FaTwitter />
                  </Link>
                </li>
                <li>
                  <Link to="" target="_blank">
                    <FaInstagram />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-4 footer-items footer-right">
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
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
