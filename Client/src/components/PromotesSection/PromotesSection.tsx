import React from "react";
import "./PromotesSection.scss";
import { Row, Col } from "antd";

interface promotesProps {}

const PromotesSection: React.FC<promotesProps> = (props) => {
  return (
    <div className="promote container">
      <Row gutter={[16, 16]}>
        <Col span={12}><div></div></Col>
        <Col span={12}>a</Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col span={12}>a</Col>
        <Col span={12}>a</Col>
      </Row>
    </div>
  );
};
export default PromotesSection;
