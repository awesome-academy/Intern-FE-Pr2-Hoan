import React from "react";
import "./Promote.scss";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

interface promoteProps {
	img?: string;
	fancyTitle?: string;
	title?: string;
	text?: string;
}

const Promote: React.FC<promoteProps> = (props) => {
  return (
    <div className="promote" style={{backgroundImage: `${props.img ? `url(${props.img})` : "none"}`}}>
      <div className="promote-content">
        <div className="promote-text">
          <p className="fancy-title">{props.fancyTitle}</p>
          <h2 className="title">{props.title}</h2>
          <p className="text">{props.text}</p>
        </div>
        <div className="promote-button">
          <Link className="fancy-button" to="/products">
            <span>All discount sales</span>
            <BsArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Promote;
