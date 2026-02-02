"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import AOS from "aos";

const brands = [
  { logo: "/images/buy-cars/logo-img-1.webp", title: "Audi", link: "#" },
  { logo: "/images/buy-cars/logo-img-2.webp", title: "Mercedes", link: "#" },
  { logo: "/images/buy-cars/logo-img-2.webp", title: "Mercedes", link: "#" },
  { logo: "/images/buy-cars/logo-img-3.webp", title: "Jaguar", link: "#" },
  { logo: "/images/buy-cars/logo-img-3.webp", title: "Jaguar", link: "#" },
  { logo: "/images/buy-cars/logo-img-6.webp", title: "Bently", link: "#" },
  {
    logo: "/images/buy-cars/logo-img-7.webp",
    title: "Harley Davidson",
    link: "#",
  },
  { logo: "/images/buy-cars/logo-img-8.webp", title: "Ferrari", link: "#" },
  { logo: "/images/buy-cars/logo-img-9.webp", title: "MINI", link: "#" },
  { logo: "/images/buy-cars/logo-img-10.webp", title: "Toyota", link: "#" },
  { logo: "/images/buy-cars/logo-img-11.webp", title: "Lexus", link: "#" },
  { logo: "/images/buy-cars/logo-img-12.webp", title: "Ducati", link: "#" },
  {
    logo: "/images/buy-cars/logo-img-13.webp",
    title: "Aston Martin",
    link: "#",
  },
  {
    logo: "/images/buy-cars/logo-img-14.webp",
    title: "Royal Enfield",
    link: "#",
  },
  { logo: "/images/buy-cars/logo-img-15.webp", title: "Citroen", link: "#" },
  {
    logo: "/images/buy-cars/logo-img-16.webp",
    title: "Volks Wagon",
    link: "#",
  },
];
const categories = [
  { logo: "/images/buy-cars/category-img-1.webp", title: "SUVs", link: "#" },
  { logo: "/images/buy-cars/category-img-2.webp", title: "Sedan", link: "#" },
  {
    logo: "/images/buy-cars/category-img-3.webp",
    title: "Convertible",
    link: "#",
  },
  { logo: "/images/buy-cars/category-img-4.webp", title: "Coupe", link: "#" },
  { logo: "/images/buy-cars/category-img-5.webp", title: "Sports", link: "#" },
  {
    logo: "/images/buy-cars/category-img-6.webp",
    title: "Hatchback",
    link: "#",
  },
  { logo: "/images/buy-cars/category-img-7.webp", title: "MUV-MPV", link: "#" },
  { logo: "/images/buy-cars/category-img-8.webp", title: "Bike", link: "#" },
];

const BuyYourCar = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="bg-black py-[6rem] xl:py-[13rem]">
      <div className="container">
        <div className="text-center">
          <img
            src="/images/buy-cars/buy-your-car.webp"
            alt="Buy Your Car"
            className="w-full block object-contain"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="500"
          />
          <div
            className="w-full text-white md:w-[80%] mx-auto lg:w-[70%] xl:max-w-[90rem] mt-[1rem]"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="500"
          >
            <h2 className=" leading-[1.3] text-[2.6rem] [&>br]:hidden md:[&>br]:block xl:text-[4.5rem] xl:leading-[1.2]">
              Start Exploring The Cars At Cars.co
            </h2>
            <p className="mt-[1rem] xl:text-[2.2rem] xl:mt-[2rem]">
              From the start, we’ve focused on people — understanding their
              needs, exceeding expectations, and creating meaningful, lasting
              relationships.
            </p>
          </div>
        </div>

        <div className="mt-[5rem] bg-[#191919] rounded-[2rem] px-[2rem] py-[4rem] xl:rounded-[4rem] text-white lg:px-[4rem] lg:py-[6rem] xl:mt-[8rem] xl:px-[8rem] xl:py-[7rem]">
          {/* BRANDS */}
          <div>
            <div
              className="flex items-center justify-between lg:gap-x-[2rem]"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="500"
            >
              <h3 className="text-[2rem] xl:text-[3.5rem] w-full lg:w-max text-center">
                Browse Cars By
              </h3>
              <span className="hidden lg:block flex-[1] h-[1px] bg-[#363636]"></span>
              <Link
                href="#"
                className="text-white border border-white w-max items-center justify-center px-[2.5rem] leading-[1] h-[4rem] rounded-[5rem] transition-all duration-300 hover:bg-white hover:text-black hidden lg:flex xl:h-[5rem] xl:px-[3rem] xl:text-[2.2rem]"
              >
                View All
              </Link>
            </div>

            <ul className="list-none grid grid-cols-3 mt-[4rem] gap-y-[3rem] sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 lg:mt-[5rem] xl:grid-cols-8">
              {brands.map((brand, index) => (
                <li
                  key={index}
                  className="border-l border-l-[#333333] border-r border-r-[#333333] group hover:bg-white hover:border-0 hover:rounded-[1rem] transition-all duration-300 xl:hover:rounded-[2rem]"
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="500"
                >
                  <Link
                    href={brand.link}
                    className="flex justify-center items-center w-full h-full px-[2rem] py-[2rem] lg:px-[3rem] xl:py-[4rem]"
                  >
                    <img
                      src={brand.logo}
                      alt={brand.title}
                      className="object-contain inline-block max-w-full transition-all group-hover:invert lg:max-h-[7rem] xl:max-h-[8rem]"
                    />
                  </Link>
                </li>
              ))}
            </ul>

            <div
              className="flex justify-center mt-[4rem] lg:hidden "
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="500"
            >
              <Link
                href="#"
                className="text-white border border-white w-max flex items-center justify-center px-[2.5rem] leading-[1] h-[4rem] rounded-[5rem] transition-all duration-300 hover:bg-white hover:text-black"
              >
                View All
              </Link>
            </div>
          </div>

          {/* CATEGORIES */}
          <div className="mt-[5rem] pt-[5rem] border-t border-t-[#444444] lg:pt-0 lg:border-t-0 lg:mt-[6rem] xl:mt-[8rem]">
            <div
              className="flex items-center justify-between lg:gap-x-[2rem]"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="500"
            >
              <h3 className="text-[2rem] xl:text-[3.5rem] w-full lg:w-max text-center">
                Browse By Categories
              </h3>
              <span className="hidden lg:block flex-[1] h-[1px] bg-[#363636]"></span>
            </div>

            <ul className="grid grid-cols-2 gap-[2rem] mt-[4rem] sm:grid-cols-3 md:grid-cols-4 lg:mt-[5rem] xl:mt-[6rem] xl:gap-[5rem]">
              {categories.map((category, index) => (
                <li
                  key={index}
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="500"
                >
                  <Link
                    href={category.link}
                    className="flex flex-col justify-center items-center px-[2rem] py-[2.5rem] border border-[#444444] rounded-[1rem] xl:pt-[5rem] transition-all duration-300 hover:bg-black hover:border-black"
                  >
                    <img
                      src={category.logo}
                      alt={category.title}
                      className="object-contain h-[5.5rem] max-w-full lg:max-w-[10rem] xl:max-w-[13rem]"
                    />
                    <h6 className="text-white mt-[1.5rem] font-medium text-[1.8rem] xl:text-[2.8rem] xl:mt-[2.5rem]">
                      {category.title}
                    </h6>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuyYourCar;
