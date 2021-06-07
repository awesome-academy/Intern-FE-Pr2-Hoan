import React from "react";
import "./ButtonScrollToTop.scss";
import "animate.css";
import { FiArrowUp } from "react-icons/fi";

interface buttonScrollToTopProps {
  isShow: boolean;
}

const ButtonScrollToTop: React.FC<buttonScrollToTopProps> = (props) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div
      onClick={scrollToTop}
      className={`${
        props.isShow
          ? "animate__animated animate__fadeInUp  animate__faster"
          : "animate__animated animate__fadeOutDown  animate__faster"
      } animate__animated animate__fadeIn button-scroll-to-top`}>
      <FiArrowUp />
    </div>
  );
};

export default ButtonScrollToTop;
