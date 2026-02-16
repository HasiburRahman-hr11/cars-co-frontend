"use client";
import FilterPopup from "@/Components/FilterPopup/FilterPopup";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

const logos = [
  "/images/homepage/hp-banner-logo-1.webp",
  "/images/homepage/hp-banner-logo-2.webp",
  "/images/homepage/hp-banner-logo-3.webp",
  "/images/homepage/hp-banner-logo-4.webp",
  "/images/homepage/hp-banner-logo-5.webp",
  "/images/homepage/hp-banner-logo-6.webp",
  "/images/homepage/hp-banner-logo-7.webp",
  "/images/homepage/hp-banner-logo-8.webp",
  "/images/homepage/hp-banner-logo-9.webp",
  "/images/homepage/hp-banner-logo-2.webp",
  "/images/homepage/hp-banner-logo-1.webp",
  "/images/homepage/hp-banner-logo-2.webp",
  "/images/homepage/hp-banner-logo-3.webp",
  "/images/homepage/hp-banner-logo-4.webp",
  "/images/homepage/hp-banner-logo-5.webp",
  "/images/homepage/hp-banner-logo-6.webp",
  "/images/homepage/hp-banner-logo-7.webp",
  "/images/homepage/hp-banner-logo-8.webp",
  "/images/homepage/hp-banner-logo-9.webp",
  "/images/homepage/hp-banner-logo-2.webp",
];

const BannerSection = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  const togglePopup = () => {
    setFilterOpen(!filterOpen);
  };

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="bg-[#111111] relative overflow-hidden ">
      <div className="relative">
        <div className="h-full w-full">
          <img
            src="/images/homepage/hp-banner-desktop.webp"
            alt="Banner Image"
            width="1920"
            height="1100"
            className="hidden md:block object-cover w-full"
          />
          <img
            src="/images/homepage/hp-banner-mobile.webp"
            alt="Banner Image"
            className="block w-full md:hidden object-cover h-[85vh] min-h-[70rem] max-h-[95vh]"
          />
        </div>
        <div className="absolute top-[0] left-[0] text-center w-full h-full hidden md:flex flex-col justify-between pt-[12rem] xl:pt-[15rem] 3xl:pt-[20rem]">
          <div
            className="container w-full"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="500"
          >
            <h1 className="text-[#ffffff] text-center text-[3rem] font-[500] leading-[1.3] xl:text-[6rem] lx:leading-[1.1]">
              You Deserve the Luxury You Work Hard For
            </h1>
            <div className="mt-[2rem] bg-white rounded-[5rem] pl-[1.5rem] py-[0.5rem] pr-[0.5rem] flex justify-between items-center sm:w-[70%] sm:mx-auto lg:w-[50%] xl:w-full xl:max-w-[79rem] xl:mt-[3rem] xl:pl-[2.5rem]">
              <div className="flex items-center flex-[1]">
                <span>
                  <Image
                    src="/images/search-icon.webp"
                    alt=""
                    width="23"
                    height="23"
                    className="w-[1.4rem] object-contain h-auto xl:w-[2.2rem]"
                  />
                </span>
                <input
                  type="search"
                  placeholder="Search your dream car here.."
                  className="w-full pl-[5px] py-[5px] outline-0 border-0 bg-transparent text-[#000000] text-[1.2rem] font-[300] xl:text-[2.2rem] xl:pl-[1.5rem]"
                />
              </div>
              <div className="w-max flex items-center">
                <span
                  className="inline-flex items-center justify-center group transition-all duration-300 xl:w-[5rem] xl:h-[5rem] xl:hover:bg-[black] xl:rounded-[50%]"
                  onClick={togglePopup}
                >
                  <Image
                    src="/images/filter-icon-black.webp"
                    alt=""
                    width="30"
                    height="30"
                    className="w-[2rem] object-contain h-auto xl:w-[2.8rem] xl:max-h-[2.5rem] cursor-pointer transition-all duration-300 group-hover:invert"
                  />
                </span>
                <Link
                  href="/collections"
                  className="bg-[#010101] text-white font-[500] text-[1.1rem] px-[1.5rem] py-[1.1rem] rounded-[3rem] ml-[1rem] xl:text-[2rem] xl:py-[1.6rem] xl:px-[4.2rem] transition-all duration-500 hover:bg-[#FE0000]"
                >
                  View Collection
                </Link>
              </div>
            </div>
          </div>
          <div className="marquee-box py-[3rem] xl:pb-[6rem]">
            <Marquee speed={150}>
              {logos.map((item, index) => (
                <div
                  key={index}
                  className="marquee-item flex mx-[1rem] items-center justify-center h-full xl:mx-[5rem]"
                >
                  <img
                    src={item}
                    alt="Logo Image"
                    className="object-contain max-h-[3.7rem] w-auto min-w-[7rem] max-w-[12rem] xl:max-w-[20rem] xl:max-h-[7rem]"
                    width=""
                    height=""
                  />
                </div>
              ))}
            </Marquee>
          </div>
        </div>

        <div className="flex md:hidden w-full h-full overflow-hidden flex-col justify-between px-[2rem] pt-[8rem] absolute top-[0] left-[0]">
          <div className="text-white text-center">
            <div
              className="text-[2.6rem] font-medium "
              data-aos="zoom-in-up"
              data-aos-easing="linear"
              data-aos-duration="500"
            >
              You Deserve
            </div>
            <div
              className="text-[4.3rem] font-semibold uppercase leading-[1]"
              data-aos="zoom-in-up"
              data-aos-delay="200"
              data-aos-easing="linear"
              data-aos-duration="500"
            >
              the Luxury.
            </div>
            <div
              className="text-[2.6rem] font-medium flex gap-[10px] items-center justify-center"
              data-aos="zoom-in-up"
              data-aos-delay="300"
              data-aos-easing="linear"
              data-aos-duration="500"
            >
              <img
                src="/images/hp-banner-title-left-arrow.png"
                alt="Arrow"
                className="object-contain inline-block w-[6rem]"
              />
              <span className="inline-block">You Work </span>
              <img
                src="/images/hp-banner-title-right-arrow.png"
                alt="Arrow"
                className="object-contain inline-block w-[6rem]"
              />
            </div>
            <div
              className="text-[4.3rem] font-semibold uppercase leading-[1]"
              data-aos="zoom-in-up"
              data-aos-delay="400"
              data-aos-easing="linear"
              data-aos-duration="500"
            >
              hard for.
            </div>
          </div>

          <div className="flex w-full items-center justify-between mt-[2rem] max-w-[430px] mx-auto gap-[1rem] pb-[3rem] border-b border-b-[#555555]">
            <Link
              href="/collections"
              className="mobile-collection-btn flex-[1] h-[5.5rem] flex items-center justify-center text-center rounded-[4rem] text-white text-[1.8rem] font-medium px-[2rem] py-[1.5rem] transition-all duration-500"
            >
              View Collection
            </Link>

            <span
              className="inline-flex w-[5.3rem] mob-filter-icon h-[5.3rem] items-center justify-center group transition-all duration-300 rounded-[50%]"
              onClick={togglePopup}
            >
              <Image
                src="/images/filter-icon-black.webp"
                alt=""
                width="30"
                height="30"
                className="w-[2rem] object-contain invert h-auto cursor-pointer transition-all duration-300"
              />
            </span>
          </div>
        </div>
      </div>
      <div className="marquee-box block md:hidden py-[3rem] bg-[#171717]">
        <Marquee speed={150}>
          {logos.map((item, index) => (
            <div
              key={index}
              className="marquee-item flex mx-[1rem] items-center justify-center h-full xl:mx-[5rem]"
            >
              <img
                src={item}
                alt="Logo Image"
                className="object-contain max-h-[3.7rem] w-auto min-w-[7rem] max-w-[12rem] xl:max-w-[20rem] xl:max-h-[7rem]"
                width=""
                height=""
              />
            </div>
          ))}
        </Marquee>
      </div>

      {filterOpen && (
        <FilterPopup active={filterOpen} togglePopup={togglePopup} />
      )}
    </section>
  );
};

export default BannerSection;
