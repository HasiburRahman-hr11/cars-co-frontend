import Link from "next/link";
import React from "react";
const brands = [
  { logo: "/images/single-car/brand-icon-audi.webp", title: "Audi", link: "#" },
  {
    logo: "/images/single-car/brand-icon-mercedes.webp",
    title: "Mercedes",
    link: "#",
  },
  {
    logo: "/images/single-car/brand-icon-jaguar.webp",
    title: "Jaguar",
    link: "#",
  },
  { logo: "/images/single-car/brand-icon-bmw.webp", title: "BMW", link: "#" },
  {
    logo: "/images/single-car/brand-icon-volvo.webp",
    title: "Volvo",
    link: "#",
  },
  {
    logo: "/images/single-car/brand-icon-bentley.webp",
    title: "Bently",
    link: "#",
  },
  {
    logo: "/images/single-car/brand-icon-hd.webp",
    title: "Harley Davidson",
    link: "#",
  },
  {
    logo: "/images/single-car/brand-icon-ferrari.webp",
    title: "Ferrari",
    link: "#",
  },
  {
    logo: "/images/single-car/brand-icon-lambo.webp",
    title: "Lamborghini",
    link: "#",
  },
  {
    logo: "/images/single-car/brand-icon-toyota.webp",
    title: "Toyota",
    link: "#",
  },
  {
    logo: "/images/single-car/brand-icon-hyundai.webp",
    title: "Hyundai",
    link: "#",
  },
  {
    logo: "/images/single-car/brand-icon-land-rover.webp",
    title: "Land Rover",
    link: "#",
  },
  {
    logo: "/images/single-car/brand-icon-rolls-royace.webp",
    title: "Rolls Royace",
    link: "#",
  },
  {
    logo: "/images/single-car/brand-icon-jeep.webp",
    title: "Jeep",
    link: "#",
  },
  {
    logo: "/images/single-car/brand-icon-honda.webp",
    title: "Honda",
    link: "#",
  },
  {
    logo: "/images/single-car/brand-icon-porsche.webp",
    title: "Porsche",
    link: "#",
  },
];

const ShopByBrand = () => {
  return (
    <div className="container">
      <div className="lg:flex items-center justify-between lg:gap-x-[2rem] text-center">
        <h3 className="leading-[1.3] text-[2.6rem] [&>br]:hidden md:[&>br]:block xl:text-[4.5rem] xl:leading-[1.2]">
          <b>Our</b> Portfolio
        </h3>

        <Link
          href="#"
          className="text-white bg-black border border-black w-max items-center justify-center px-[2.5rem] leading-[1] h-[4rem] rounded-[5rem] transition-all duration-300 hover:bg-white hover:text-black hidden lg:flex xl:px-[3rem] xl:text-[2.2rem] xl:h-[7rem]"
        >
          View All Brands
        </Link>
      </div>

      <ul className="list-none grid grid-cols-3 mt-[4rem] gap-y-[3rem] sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 lg:mt-[5rem] xl:grid-cols-8 xl:mt-[8rem]">
        {brands.map((brand, index) => (
          <li
            key={index}
            className="border-l border-l-[#eeeeee] border-r border-r-[#eeeeee] group hover:bg-[#F3F3F3] hover:border-0 hover:rounded-[1rem] transition-all duration-300 xl:hover:rounded-[2rem]"
          >
            <Link
              href={brand.link}
              className="flex justify-center items-center w-full h-full px-[2rem] py-[2rem] lg:px-[3rem] xl:py-[4rem]"
            >
              <img
                src={brand.logo}
                alt={brand.title}
                className="object-contain inline-block max-w-full max-h-[4rem] transition-all lg:max-h-[7rem] xl:max-h-[8rem]"
              />
            </Link>
          </li>
        ))}
      </ul>

      <div className="flex justify-center mt-[4rem] lg:hidden ">
        <Link
          href="#"
          className="text-white border border-black bg-black w-max flex items-center justify-center px-[2.5rem] leading-[1] h-[4rem] rounded-[5rem] transition-all duration-300 "
        >
          View All Brands
        </Link>
      </div>
    </div>
  );
};

export default ShopByBrand;
