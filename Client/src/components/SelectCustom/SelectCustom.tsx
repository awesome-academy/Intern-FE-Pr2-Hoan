import React, { useState } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { CHANGE_CURRENCY, CHANGE_LANGUAGE } from "../../redux/actionTypes";
import "./SelectCustom.scss";

interface selectCustomProps {
  options: Array<{
    value: any;
    option: string;
  }>;
  select: string;
}

const SelectCustom: React.FC<selectCustomProps> = (props) => {
  const dispatch = useDispatch();
  const initialState: string = useSelector((state: RootStateOrAny) =>
    props.select === "currency"
      ? state.switchers.currency
      : state.switchers.language
  );
  const [value, setValue] = useState(initialState);
  const selected = (e: any) => {
    setValue(e.target.dataset.value)
    if (props.select === "currency") {
      dispatch({
        type: CHANGE_CURRENCY,
        currency: e.target.dataset.value,
      });
      return;
    }
    dispatch({
      type: CHANGE_LANGUAGE,
      language: e.target.dataset.value,
    });
  };
  return (
    <div className={`select ${props.select}`}>
      <span className="selected"> {value} </span>
      <div className="options">
        {props.options.map((e, index) => (
          <div
            onClick={selected}
            className={`option ${value === e.value ? "active" : ""}`}
            key={index}
            data-value={e.value}>
            {e.option}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectCustom;
