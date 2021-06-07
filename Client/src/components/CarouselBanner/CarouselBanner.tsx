import React from "react";
import "./CarouselBanner.scss";
import { Carousel } from "antd";
import { dataBanner } from "./banners";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { CarouselRef } from "antd/lib/carousel";
import "animate.css"

interface carouselProps {
  isAnimate?: boolean
}

const CarouselBanner: React.FC<carouselProps> = (props) => {
  const carousel = React.createRef<CarouselRef>();
  const prev = (e: any) => {
    carousel.current?.prev();
  };
  const next = (e: any) => {
    carousel.current?.next();
  };
  return (
    <div className={`carousel ${props.isAnimate ? "animate__animated animate__fadeIn" : ""}`}>
      <Carousel ref={carousel} autoplay>
        {dataBanner.map((e, i) => (
          <div key={i} className="carousel-content">
            <div className="image-wrapper">
              <img src={e.img} alt="banner" />
            </div>
          </div>
        ))}
      </Carousel>
      <div className="carousel-button button-left" onClick={prev}>
        <BiChevronLeft style={{ fontSize: "1.5rem" }} />
      </div>
      <div className="carousel-button button-right" onClick={next}>
        <BiChevronRight style={{ fontSize: "1.5rem" }} />
      </div>
    </div>
  );
};

export default CarouselBanner;
