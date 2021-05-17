import React from "react";
import { Slider as SlickSlider } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Slider = () => {
  return <SlickSlider {...settings}>
    
  </SlickSlider>;
};

export default Slider;
