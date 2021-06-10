import React, { useEffect, useState } from "react";
import "./FilterProducts.scss";
import { Row, Col, Breadcrumb, Select, Slider } from "antd";
import { Link } from "react-router-dom";
import { BsFilter, BsPlus } from "react-icons/bs";
import { IoGridOutline } from "react-icons/io5";
import { AiOutlineUnorderedList } from "react-icons/ai";
import "animate.css";
import Tag from "./Tag/Tag";
import { breadcrumb, categories, colors } from "./filters";
import { useDispatch } from "react-redux";
import {
  FILTER_BY_CATEGORIES,
  FILTER_BY_COLORS,
  FILTER_BY_PRICE,
} from "../../redux/actionTypes";

const { Option } = Select;

interface filterProductsProps {}

const FilterProducts: React.FC<filterProductsProps> = (props) => {
  const dispatch = useDispatch();
  const [isOpenCollapse, setIsOpenCollapse] = useState(false);

  const initialStateCategories: Array<string> = [];
  const [curCategories, setCurCategories] = useState(initialStateCategories);
  const [categoriesStatus, setCategoriesStatus] = useState([
    false,
    false,
    false,
    false,
  ]);

  const initialStateColors: Array<string> = [];
  const [curColors, setCurColors] = useState(initialStateColors);
  const [colorsStatus, setColorsStatus] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const [price, setPrice] = useState({
    min: 0,
    max: 100,
  });

  const openCollapse = () => {
    setIsOpenCollapse(!isOpenCollapse);
  };

  const activeCategory = (i: number) => {
    let list = [...categoriesStatus];
    list[i] = true;
    setCategoriesStatus(list);
    let arr = [...curCategories];
    arr = [...arr, categories[i]];
    setCurCategories(arr);
  };

  const removeCategory = (i: number) => {
    let list = [...categoriesStatus];
    list[i] = false;
    setCategoriesStatus(list);
    let arr = [...curCategories];
    arr.splice(arr.indexOf(categories[i]), 1);
    setCurCategories(arr);
    dispatch({ type: FILTER_BY_CATEGORIES, categories: curCategories })
  };

  const activeColor = (i: number) => {
    const list = [...colorsStatus];
    list[i] = !list[i];
    setColorsStatus(list);
    let arr = [...curColors];
    arr = [...arr, `${colors[i].color}`];
    setCurColors(arr);
  };

  const removeColor = (i: number) => {
    let list = [...colorsStatus];
    list[i] = false;
    setColorsStatus(list);
    let arr = [...curColors];
    arr.splice(arr.indexOf(colors[i].color), 1);
    setCurColors(arr);
    dispatch({ type: FILTER_BY_COLORS, colors: curColors });
  };

  const onChangePrice = (value: any) => {
    const handlePrice = {
      min: value[0],
      max: value[1],
    };
    setPrice(handlePrice);
  };

  const onAfterChangePrice = (value: any) => {
    dispatch({ type: FILTER_BY_PRICE, price: price });
  };

  return (
    <div className="filter-products">
      <Row gutter={[24, 24]}>
        <Col xs={0} md={12}>
          <div className="breadcrumb-wrapper">
            <Breadcrumb>
              {breadcrumb.map((e, i) => (
                <Breadcrumb.Item key={i}>
                  <Link to={e.link}>{e.text}</Link>
                </Breadcrumb.Item>
              ))}
            </Breadcrumb>
          </div>
        </Col>
        <Col xs={24} md={12}>
          <div className="filters">
            <div className="filter-trigger-box" onClick={openCollapse}>
              <p>
                <span className="icon">
                  <BsFilter
                    className={`filter ${isOpenCollapse ? "active" : ""}`}
                  />
                  <BsPlus
                    className={`plus ${isOpenCollapse ? "active" : ""}`}
                  />
                </span>
                <span className="text">Filters</span>
              </p>
            </div>
            <div className="select-box">
              <Select defaultValue="default" bordered={false}>
                <Option value="default">Default</Option>
                <Option value="name">Name</Option>
                <Option value="price">Price</Option>
              </Select>
            </div>
            <div className="views-styles">
              <p className="active">
                <IoGridOutline />
              </p>
              <p>
                <AiOutlineUnorderedList />
              </p>
            </div>
          </div>
        </Col>
      </Row>
      <div
        className={`collapse-filter-trigger ${
          isOpenCollapse ? "active" : ""
        } `}>
        <Row gutter={[24, 24]}>
          <Col span={24}>
            <div className="active-filters">
              <p className="text">Active Filters</p>
              <Tag text="balck" />
            </div>
          </Col>
        </Row>
        <Row gutter={[24, 24]}>
          <Col span={6}>
            <div className="filter-category">
              <p className="text">Filter By Category</p>
              {categories.map((e, i) => (
                <Row key={i}>
                  <div className="category">
                    <div
                      className="text-wrapper"
                      onClick={() => activeCategory(i)}>
                      <p>{e}</p>
                    </div>
                    <div
                      className={`tag-wrapper ${
                        categoriesStatus[i] ? "active" : ""
                      }`}>
                      <Tag text={e} onClick={() => removeCategory(i)}></Tag>
                    </div>
                  </div>
                </Row>
              ))}
            </div>
          </Col>
          <Col span={6}>
            <div className="filter-color">
              <p className="text">Filter By Color</p>
              <div className="colors">
                {colors.map((e, i) => (
                  <Row key={i}>
                    <div className="color-product">
                      <div
                        className="text-wrapper"
                        onClick={() => activeColor(i)}>
                        <p className={`${colorsStatus[i] ? "active" : ""}`}>
                          <span
                            className="color"
                            style={{ background: `hsla(${e.text})` }}></span>
                          {e.color}
                        </p>
                      </div>
                      <div
                        className={`tag-wrapper ${
                          colorsStatus[i] ? "active" : ""
                        }`}>
                        <Tag color={e} onClick={() => removeColor(i)}></Tag>
                      </div>
                    </div>
                  </Row>
                ))}
              </div>
            </div>
          </Col>
          <Col span={6}>
            <div className="filter-price">
              <p className="text">Filter By price</p>
              <div className="slider-wrapper">
                <div className="slider">
                  <Slider
                    min={0}
                    max={1000}
                    step={10}
                    range
                    defaultValue={[0, 500]}
                    tipFormatter={null}
                    onChange={onChangePrice}
                    onAfterChange={onAfterChangePrice}
                  />
                </div>
                <div className="range-price">
                  <p className="min">
                    Min Price: <span>${price.min}</span>
                  </p>
                  <p className="max">
                    Max Price: <span>${price.max}</span>
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default FilterProducts;
