import React from "react";
import "./ProductsPage.scss";
import "animate.css";
import { FilterProducts, TitlePage } from "../../components";
import { Row, Col } from "antd";

const ProductsPage: React.FC = () => {
  return (
    <div className="products-page animate__animated animate__fadeIn">
      <div className="header-spacer"></div>
      <TitlePage title="Shop"/>
      <div className="container">
        <Row gutter={[24, 24]}>
          <Col span={24}>
            <FilterProducts />
          </Col>
          <Col span={24}>products</Col>
        </Row>
      </div>
    </div>
  );
};

export default ProductsPage;
