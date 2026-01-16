"use client";
import Link from "next/link";
import React from "react";
import Slider from "react-slick";

const carStyles = [
  {
    icon: "/images/single-car/car-style-1.png",
    title: "Convertible",
    link: "#",
  },
  { icon: "/images/single-car/car-style-2.png", title: "Coupe", link: "#" },
  { icon: "/images/single-car/car-style-3.png", title: "Sports", link: "#" },
  { icon: "/images/single-car/car-style-4.png", title: "Hatchback", link: "#" },
  {
    icon: "/images/single-car/car-style-1.png",
    title: "Convertible",
    link: "#",
  },
  { icon: "/images/single-car/car-style-2.png", title: "Coupe", link: "#" },
  { icon: "/images/single-car/car-style-3.png", title: "Sports", link: "#" },
  { icon: "/images/single-car/car-style-4.png", title: "Hatchback", link: "#" },
];

function NextArrow(props) {
  const { onClick, className } = props;
  return (
    <div
      className={`bg-[#303030] w-[7.5rem] h-[7.5rem] rounded-[50%] inline-flex justify-center items-center dark-slider-arrow ${className}`}
      onClick={onClick}
    >
      <img src="/images/slider-arrow-next-white.webp" alt="Next Slide" />
    </div>
  );
}

function PrevArrow(props) {
  const { onClick, className } = props;
  return (
    <div
      className={`bg-[#303030] w-[7.5rem] h-[7.5rem] rounded-[50%] inline-flex justify-center items-center dark-slider-arrow ${className}`}
      onClick={onClick}
    >
      <img src="/images/slider-arrow-prev-white.webp" alt="Previous Slide" />
    </div>
  );
}

let sliderSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  autoplay: true,
  autoplaySpeed: 3000,
  variableWidth: true,
  pauseOnHover: false,
  pauseOnFocus: false,
  centerMode: true,

};

const ShopByStyle = () => {
  return (
    <div className="mt-[6rem] pt-[5rem] border-t border-t-[#6C6C6C] lg:border-t-0 lg:mt-[7rem] lg:pt-0 max-w-[1920px] mx-auto overflow-hidden xl:mt-[13rem]">
      <div className="container">
        <h3 className="leading-[1.3] text-[2.6rem] text-center [&>br]:hidden md:[&>br]:block xl:text-[4.5rem] xl:leading-[1.2] lg:text-left lg:pt-[6rem] lg:border-t lg:border-t-[#6C6C6C] xl:pt-[10rem]">
          <b>Shop By</b> Car Style
        </h3>
      </div>

      <div className="mx-auto mt-[4rem] xl:mt-[7rem] detail-style-slider">
        <Slider {...sliderSettings}>
          {carStyles.map((item, index) => (
            <div key={index} className="h-full px-[0.7rem] lg:px-[1.2rem] xl:px-[2rem]">
              <Link
                href={item.link}
                className="flex flex-col justify-center items-center px-[2rem] py-[2.5rem] border border-[#AAAAAA] rounded-[1rem] xl:pt-[5rem] transition-all duration-300 hover:bg-black hover:border-black w-[20rem] h-[20rem] group sm:w-[17rem] sm:h-[17rem] md:w-[20rem] md:h-[20rem] xl:w-[30rem] xl:h-[30rem] "
              >
                <img
                  src={item.icon}
                  alt="Gallery Image"
                  className="w-[10rem] h-[4.5rem] block object-contain"
                />
                <h6 className="mt-[1.5rem] font-medium text-[1.8rem] xl:text-[2.8rem] xl:mt-[2.5rem] group-hover:text-white">
                  {item.title}
                </h6>
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ShopByStyle;
