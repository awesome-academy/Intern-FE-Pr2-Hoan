import React from "react";
import "animate.css";
import "./HomePage.scss";
import { CarouselBanner, PromotesSection } from "../../components";

const HomePage: React.FC = () => {
  return (
    <div className="home-page animate__animated animate__fadeIn">
      <div className="header-spacer"></div>
      <div className="carousel-wrapper" style={{marginBottom: "3rem"}}>
        <CarouselBanner />
      </div>
      <div className="propmote-wrapper">
        <PromotesSection />
      </div>
    </div>
  );
};

export default HomePage;
