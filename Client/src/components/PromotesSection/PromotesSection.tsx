import React from "react";
import "./PromotesSection.scss";
import { Row, Col } from "antd";
import { Promote, Product } from "../";
import { promote1, promote2, promote3 } from "./promotes";
import { Carousel } from "antd";
import { CarouselRef } from "antd/lib/carousel";
import "animate.css"

interface promotesProps {
}

const PromotesSection: React.FC<promotesProps> = (props) => {
  const carousel = React.createRef<CarouselRef>();
  // const prev = (e: any) => {
  //   carousel.current?.prev();
  // };
  // const next = (e: any) => {
  //   carousel.current?.next();
  // };
  return (
    <div className="promote-section container">
      <Row gutter={[16, 16]}>
        <Col xs={24} xl={12}>
          <Promote
            img={promote1.img}
            fancyTitle={promote1.fancyTitle}
            title={promote1.title}
            text={promote1.text}
          />
        </Col>
        <Col xs={24} xl={12}>
          <Promote
            img={promote2.img}
            fancyTitle={promote2.fancyTitle}
            title={promote2.title}
            text={promote2.text}
          />
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col xs={24} xl={12}>
          <Promote
            fancyTitle={promote3.fancyTitle}
            title={promote3.title}
            text={promote3.text}
          />
        </Col>
        <Col xs={24} xl={12}>
          <div className="carousel-promote">
            <Carousel ref={carousel} dots={false} autoplay>
              <div className="products-sale">
                <Row gutter={[40, 24]}>
                  <Col xs={24} md={12}>
                    <Product />
                  </Col>
                  <Col xs={24} md={12}>
                    <Product />
                  </Col>
                </Row>
              </div>
              <div className="products-sale">
                <Row gutter={[16, 16]}>
                  <Col xs={24} md={12}>
                    <Product />
                  </Col>
                  <Col xs={24} md={12}>
                    <Product />
                  </Col>
                </Row>
              </div>
            </Carousel>
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default PromotesSection;
