import React from "react";
import "./SimpleProduct.scss";
import { Link } from "react-router-dom";

interface simpleProductProps {
  img?: string;
  category?: string;
  name?: string;
}

const SimpleProduct: React.FC<simpleProductProps> = (props) => {
  return (
    <Link to="" className="simple-product">
      <div className="image-wrapper">
        <img
          src={props.img}
          alt="product"
        />
        <div className="bg-hover"></div>
      </div>
      <div className="content">
        <p className="category">{props.category}</p>
        <h3 className="name">{props.name}</h3>
      </div>
    </Link>
  );
};

export default SimpleProduct;
