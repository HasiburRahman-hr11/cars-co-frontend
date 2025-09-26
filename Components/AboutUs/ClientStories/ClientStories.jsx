"use client";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";

const galleryImages = [
  { image: "/images/about-us/client-story-img-1.webp" },
  { image: "/images/about-us/client-story-img-2.webp" },
  { image: "/images/about-us/client-story-img-3.webp" },
  { image: "/images/about-us/client-story-img-1.webp" },
  { image: "/images/about-us/client-story-img-2.webp" },
  { image: "/images/about-us/client-story-img-3.webp" },
];

function NextArrow(props) {
  const { onClick, className } = props;
  return (
    <div
      className={`bg-[#303030] w-[7.5rem] h-[7.5rem] rounded-[50%] inline-flex justify-center items-center dark-slider-arrow ${className}`}
      onClick={onClick}
    >
      <Image
        src="/images/slider-arrow-next-white.webp"
        alt="Next Slide"
        width="12"
        height="22"
      />
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
      <Image
        src="/images/slider-arrow-prev-white.webp"
        alt="Previous Slide"
        width="12"
        height="22"
      />
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

const ClientStories = () => {
  return (
    <section className="bg-black py-[6rem] overflow-hidden xl:py-[13rem]">
      <div className="container">
        <div className="text-center section-header">
          <h6 className="w-max mx-auto bg-[#202020] px-[3rem] py-[1.4rem] text-[#AEAEAE] text-[1.3rem] uppercase rounded-[4rem] leading-1 mb-[2rem] xl:text-[2rem] xl:leading-[1] xl:mb-[3rem] font-medium">
            Client Stories
          </h6>
          <h2 className="text-white leading-[1.3] text-[2.6rem] [&>br]:hidden md:[&>br]:block xl:text-[4.5rem] xl:leading-[1.2]">
            Known for making <b>luxury affordable</b>
          </h2>
        </div>
      </div>
      <div className="full-width-gallery-slider mx-auto mt-[4rem] xl:mt-[6rem]">
        <Slider {...sliderSettings}>
          {galleryImages.map((item, index) => (
            <div key={index} className="h-full px-[0.7rem] xl:px-[1rem]">
              <img
                src={item.image}
                alt="Gallery Image"
                className="w-[85vw] h-full block object-cover lg:w-[75vw] xl:w-[60vw]"
              />
            </div>
          ))}
        </Slider>
      </div>
      <div className="container">
        <div className="text-center text-[1.6rem] xl:text-[2.6rem] text-white font-medium mt-[4rem] max-w-[540px] mx-auto xl:max-w-[937px] xl:mt-[6rem]">
            "Buying my dream car at PreOwn Luxury Cars was effortless. The team was professional, honest, and made sure every detail was perfect. I drove off feeling confident and thrilled with my luxury ride!"
        </div>
        <div className="flex flex-col items-center mt-[3rem] xl:mt-[5rem]">
            <span className="w-[8rem] h-[1px] bg-[#D9D9D9] inline-block mb-[1rem]"></span>
            <p className="text-center font-medium [&>span]:font-[300] text-white text-[1.3rem] xl:text-[2.4rem]">Rohit Sharma, <span>BMW i8</span></p>
        </div>
      </div>
    </section>
  );
};

export default ClientStories;
