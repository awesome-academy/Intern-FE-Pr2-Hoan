import React from "react";
import "./Tag.scss";
import { BsPlus } from "react-icons/bs";

interface TagProps {
  color?: {
    color: string;
    bg: string;
		text: string;
  };
  text?: string;
  onClick?: () => void
}

const Tag: React.FC<TagProps> = (props) => {
  return (
    <div
      className="tag"
      style={{
        background: `${props.color && `hsla(${props.color.bg})`}`, 
      }}>
      <p>
        {props.color && (
          <span
            className="color"
            style={{ background: `hsla(${props.color.text})` }}></span>
        )}
        <span
          style={{ color: `${props.color && `hsla(${props.color.text})`}` }}>
          {props.color ? props.color?.color : props.text}
        </span>
        <BsPlus style={{ color: `${props.color && `hsla(${props.color.text})`}` }} onClick={props.onClick} />
      </p>
    </div>
  );
};

export default Tag;
