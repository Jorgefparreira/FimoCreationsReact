import React from "react";

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
  return  <svg viewBox="0 0 230.4 448" id="slider-arrow-right" fill="none" onClick={props.goToNextSlide}><path d="M16.724 429.118l196.604-205.549L17.235 21.696" stroke="#00a5e2" strokeWidth="28.134" strokeLinecap="round" strokeLinejoin="round" /></svg>;
};

export const LeftArrow = props => {
  return <svg viewBox="0 0 230.4 448" fill="none" id="slider-arrow-left" onClick={props.goToPrevSlide}><path d="M213.328 21.696L16.724 227.245l196.093 201.873" stroke="#00a5e2" strokeWidth="28.134" strokeLinecap="round" strokeLinejoin="round" /></svg>;
};
