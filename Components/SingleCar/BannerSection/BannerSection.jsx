"use client";

import React, { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
function PrevArrow(props) {
  const { onClick, className } = props;
  return (
    <div
      className={`detail-banner-arrow left-[2rem] z-[5] ${className}`}
      onClick={onClick}
    >
      <img src="/images/slider-arrow-prev-white.webp" alt="Previous Slide" />
    </div>
  );
}

function NextArrow(props) {
  const { onClick, className } = props;
  return (
    <div
      className={`detail-banner-arrow right-[2rem] z-[5] ${className}`}
      onClick={onClick}
    >
      <img src="/images/slider-arrow-next-white.webp" alt="Next Slide" />
    </div>
  );
}

let settings = {
  dots: false,
  infinite: true,
  speed: 700,
  slidesToShow: 1.8,
  slidesToScroll: 1,
  arrows: true,
  centerMode: true,
  autoplay: true,
  autoplaySpeed: 3000,
  centerPadding: "25rem",
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  pauseOnHover: false,
  pauseOnFocus: false,
  responsive: [
    {
      breakpoint: 1600,
      settings: {
        slidesToShow: 1.7,
        centerPadding: "5rem",
      },
    },
    {
      breakpoint: 768,
      settings: {
        centerMode: false,
        centerPadding: "0",
        slidesToShow: 1,
      },
    },
  ],
};

let settingsMobile = {
  dots: false,
  infinite: true,
  speed: 700,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  autoplay: true,
  autoplaySpeed: 3000,
  variableWidth: true,
  pauseOnHover: false,
  pauseOnFocus: false,
  centerMode: true,
};

const images = [
  "/images/single-car/car-detail-banner-1.png",
  "/images/single-car/car-detail-banner-2.png",
  "/images/single-car/car-detail-banner-3.png",
  "/images/single-car/car-detail-banner-1.png",
  "/images/single-car/car-detail-banner-2.png",
  "/images/single-car/car-detail-banner-3.png",
];
const BannerSection = () => {
  return (
    <section className="productPageBanner overflow-hidden bg-white">
      <div className="max-1920">
        {/* For Desktop */}
        <div className="hidden">
          <Slider {...settings} className="details-banner-slider">
            {images.map((src, index) => (
              <div className="md:px-[1.3rem] outline-none" key={index}>
                <img
                  src={src}
                  alt={`Product Image ${index + 1}`}
                  className="w-full object-cover block"
                  width="1025"
                  height="730"
                />
              </div>
            ))}
          </Slider>
        </div>

        {/* For Mobile */}
        <div className="block">
          <Slider {...settingsMobile} className="details-banner-slider">
            {images.map((src, index) => (
              <div className="outline-none px-[0.5rem]" key={index}>
                <img
                  src={src}
                  alt={`Product Image ${index + 1}`}
                  className="w-[100vw] object-cover block md:w-[70vw]"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
