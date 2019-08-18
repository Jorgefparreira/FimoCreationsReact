import React from "react";
import "swiper/dist/css/swiper.min.css";

export const Slide = ({ image }) => {
  const styles = {
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "50% 60%"
  };
  return <div className="slide" style={styles} />;
};

export const RightArrow = props => {
  return <div className="swiper-button-next" onClick={props.goToNextSlide} />;
};

export const LeftArrow = props => {
  return <div className="swiper-button-prev" onClick={props.goToPrevSlide} />;
};
