import React from "react";
import "./Product.scss";
import { Link } from "react-router-dom";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { IoResize } from "react-icons/io5";

interface propductProps {}

const Product: React.FC = (props) => {
  return (
    <div className="product">
      <div className="product-image">
        <div className="image-wrapper">
          <Link to="">
            <img
              src="https://goyacdn.everthemes.com/demo-decor/wp-content/uploads/sites/2/2019/07/norm-wall-clock-450x450.jpg"
              alt="product"
            />
            <img
              src="https://goyacdn.everthemes.com/demo-decor/wp-content/uploads/sites/2/2019/07/franklin-chandelier-dark2-450x450.jpg"
              alt="product"
            />
          </Link>
          <span className="bagde-sale">-20%</span>
          <div className="actions-wrapper">
            <div className="actions">
              <div className="action add-wishlist">
                <AiOutlineHeart />
                <AiFillHeart />
              </div>
              <div className="action add-cart">
                <FiShoppingCart />
              </div>
              <div className="action see-detail">
                <IoResize />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="product-caption">
        <div className="name">
          <Link to="">Afteroom Coat Hanger</Link>
        </div>
        <div className="price-wrapper">
          <span className="price">$300.00</span>
          <span className="price-discount">$300.00</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
