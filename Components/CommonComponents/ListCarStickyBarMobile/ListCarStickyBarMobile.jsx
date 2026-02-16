"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";

let settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  centerMode: false,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: true,
};

const ListCarStickyBarMobile = () => {
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const secondSection = document.getElementById("showStickyBar");
      const footer = document.getElementById("footer");

      if (
        secondSection &&
        footer &&
        secondSection.getBoundingClientRect().top <= 0 &&
        footer.getBoundingClientRect().top > window.innerHeight
      ) {
        setShowForm(true);
      } else {
        setShowForm(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <div
        className={`bg-white px-[2rem] py-[1.5rem] rounded-tl-[3rem] rounded-tr-[3rem] fixed  left-0 w-full z-[20] block md:hidden shadow-gray-500 shadow-2xl transition-all duration-500 ease-in-out ${showForm ? "bottom-0" : "-bottom-[20rem]"}`}
      >
        <div className="flex items-center justify-between gap-x-[3rem]">
          <div className="flex-[1] flex items-center gap-x-[2rem]">
            <div className="w-[12rem]">
              <Slider {...settings}>
                <div className="flex justify-center">
                  <img
                    src="/images/list-car-bar-img.png"
                    alt=""
                    className="object-contain w-auto inline-block mx-auto max-h-[8rem] max-w-full"
                  />
                </div>
                <div className="flex justify-center">
                  <img
                    src="/images/list-car-bar-img.png"
                    alt=""
                    className="object-contain w-auto inline-block mx-auto max-h-[8rem] max-w-full"
                  />
                </div>
              </Slider>
            </div>
            <div className="flex-[1]">
              <h3 className="text-[2.2rem] xl:text-[3.6rem]">
                {" "}
                <b>List Your Car</b> Effortlessly.
              </h3>
            </div>
          </div>
          <Link
            href="/list-cars"
            className="flex items-center justify-center w-[4.1rem] h-[2.7rem] border border-black rounded-[0.6rem] p-[0.6rem] transition-all duration-500 group hover:bg-black focus:bg-black active:bg-black"
          >
            <img
              src="/images/list-car-cta-arrow.png"
              alt="Arrow"
              className="object-contain transition-all duration-500 group-hover:invert group-focus:invert group-active:invert"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ListCarStickyBarMobile;
