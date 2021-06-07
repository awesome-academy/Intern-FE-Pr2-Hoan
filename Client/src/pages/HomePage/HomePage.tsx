import React, { useEffect, useState } from "react";
import "animate.css";
import "./HomePage.scss";
import { Row, Col } from "antd";
import {
  CarouselBanner,
  PromotesSection,
  SimpleProduct,
  Product,
} from "../../components";
import { IoAirplaneOutline, IoRefreshSharp } from "react-icons/io5";
import { BsArrowLeftRight } from "react-icons/bs";
import "./portfolioProducts";
import { portfolioProducts } from "./portfolioProducts";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import "animate.css";
import { useDispatch, useSelector, RootStateOrAny } from "react-redux";
import { HANDLE_SCROLL } from "../../redux/actionTypes";

const HomePage: React.FC = () => {
  const dispatch = useDispatch();
  const curPageYOffset = useSelector(
    (state: RootStateOrAny) => state.scroll.curOffsetTop
  );
  const introElement = React.createRef<HTMLDivElement>();
  const [animatedIntroElement, setAnimatedIntroElement] = useState(false);
  useEffect(() => {
    window.onscroll = () => {
      dispatch({ type: HANDLE_SCROLL, pageYOffset: window.pageYOffset });
    };
  }, []);
  useEffect(() => {
    curPageYOffset >
    (introElement.current ? introElement.current?.offsetTop : 0) -
      window.outerHeight
      ? setAnimatedIntroElement(true)
      : setAnimatedIntroElement(false);
  }, [curPageYOffset]);
  return (
    <div className="home-page animate__animated animate__fadeIn">
      <div className="header-spacer"></div>
      <div className="sec_row carousel-wrapper">
        <CarouselBanner />
      </div>
      <div className="sec_row propmote-wrapper">
        <PromotesSection />
      </div>
      <div ref={introElement} className="sec_row intro-wrapper">
        <div className="container">
          <div className="intro">
            <Row justify="center">
              <Col>
                <div className={`content ${animatedIntroElement ? "animate__animated animate__fadeInUp" : ""}`} style={{ opacity: "0" }}>
                  <h5>Connected Spaces</h5>
                  <h2>Redefine how we use space</h2>
                  <p>
                    Top designers and craftspeople around the world to create
                    contemporary furniture, lighting and accessories that are
                    clean, clever and natural.
                  </p>
                </div>
              </Col>
            </Row>
            <Row gutter={[16, 16]}>
              <Col xs={24} lg={12} xl={8}>
                <div className={`feature ${animatedIntroElement ? "animate__animated animate__fadeInUp" : ""}`} style={{ opacity: "0" }}>
                  <div className="icon">
                    <BsArrowLeftRight />
                  </div>
                  <div className="feature-content">
                    <h4>Free Shipping</h4>
                    <p>Pinterest succulents raclette everyday carry.</p>
                  </div>
                </div>
              </Col>
              <Col xs={24} lg={12} xl={8}>
                <div className={`feature ${animatedIntroElement ? "animate__animated animate__fadeInUp" : ""}`} style={{ opacity: "0" }}>
                  <div className="icon">
                    <IoRefreshSharp />
                  </div>
                  <div className="feature-content">
                    <h4>30 days return</h4>
                    <p>Irony vape green juice pop-up pork belly.</p>
                  </div>
                </div>
              </Col>
              <Col xs={24} lg={12} xl={8}>
                <div className={`feature ${animatedIntroElement ? "animate__animated animate__fadeInUp" : ""}`} style={{ opacity: "0" }}>
                  <div className="icon plan">
                    <IoAirplaneOutline />
                  </div>
                  <div className="feature-content">
                    <h4>International Warranty</h4>
                    <p>Williamsburg letterpress 90’s.</p>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
      <div className="sec_row portfolio-wrapper">
        <div className="container">
          <Row gutter={[24, 16]}>
            <Col xs={24} lg={10}>
              <div className="portfolio">
                <div className="content">
                  <h5>Featured</h5>
                  <h2>Portfolio</h2>
                  <p>
                    Pop-up mixtape pinterest succulents raclette everyday carry.
                    Microdosing glossier drinking vinegar.
                  </p>
                </div>
                <div className="portfolio-button">
                  <Link className="fancy-button" to="">
                    <span>All Looks</span>
                    <BsArrowRight />
                  </Link>
                </div>
              </div>
            </Col>
            <Col xs={24} lg={14}>
              <Row gutter={[24, 24]}>
                {portfolioProducts.map((e, i) => (
                  <Col key={i} xs={24} md={12}>
                    <SimpleProduct
                      img={e.img}
                      category={e.category}
                      name={e.name}
                    />
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </div>
      </div>
      <div className="sec_row hottrend-wrapper">
        <div className="container">
          <Row justify="center">
            <Col xs={24} md={12}>
              <div className="title">
                <h2>Hot Trends</h2>
                <p>
                  Irony vape green juice pop-up pork belly, kitsch shabby chic.
                  Williamsburg letterpress 90’s.
                </p>
              </div>
            </Col>
          </Row>
          <Row gutter={[24, 24]} style={{ padding: "1rem 0 3rem" }}>
            <Col xs={12} md={8} xl={6}>
              <Product />
            </Col>
            <Col xs={12} md={8} xl={6}>
              <Product />
            </Col>
            <Col xs={12} md={8} xl={6}>
              <Product />
            </Col>
            <Col xs={12} md={8} xl={6}>
              <Product />
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
