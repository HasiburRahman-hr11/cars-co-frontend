import Image from "next/image";
import Link from "next/link";
import React from "react";
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
  return (
    <section className="bg-[#141313] relative overflow-hidden ">
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
          width="390"
          height="685"
          className="block w-full md:hidden object-cover h-[80vh] min-h-[67rem] max-h-[95vh]"
        />
      </div>
      <div className="absolute top-[0] left-[0] text-center w-full h-full flex flex-col justify-between pt-[9rem] xl:pt-[15rem] 3xl:pt-[20rem]">
        <div className="container w-full">
          <h1 className="text-[#ffffff] text-center text-[3rem] font-[500] leading-[1.3] xl:text-[6rem] lx:leading-[1.1]">
            Where elegance meets performance
          </h1>
          <div className="mt-[2rem] bg-white rounded-[5rem] pl-[1.5rem] py-[0.5rem] pr-[0.5rem] flex justify-between items-center sm:w-[70%] sm:mx-auto lg:w-[50%] xl:w-full xl:max-w-[79rem] xl:mt-[3rem]">
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
              <span>
                <Image
                  src="/images/filter-icon-black.webp"
                  alt=""
                  width="30"
                  height="30"
                  className="w-[2rem] object-contain h-auto xl:w-[2.8rem] cursor-pointer transition-all duration-500 hover:scale-110"
                />
              </span>
              <Link
                href="#"
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
    </section>
  );
};

export default BannerSection;
