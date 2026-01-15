"use client";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import styles from "../SingleCar.module.css";

const dummyData = [
  {
    icon: "/images/single-car/detail-summery-usp-1.webp",
    title: "Engine",
    description: "6592cc, Twin Turbocharged, V12, DOHC",
  },
  {
    icon: "/images/single-car/detail-summery-usp-2.webp",
    title: "Transmission",
    description: "8 Speed <br> Automatic ZF 8HP90 Transmission",
  },
  {
    icon: "/images/single-car/detail-summery-usp-3.webp",
    title: "Peak Torque",
    description: "780Nm <br> @1500 RPM",
  },
  {
    icon: "/images/single-car/detail-summery-usp-4.webp",
    title: "Peak Power",
    description: "571PS / 563BHP <br> @ 5250 RPM",
  },
  {
    icon: "/images/single-car/detail-summery-usp-5.webp",
    title: "Seating Capacity",
    description: "Available <br> Seats (04) Persons",
  },
  {
    icon: "/images/single-car/detail-summery-usp-6.webp",
    title: "Vehicle Type",
    description: "Body Type <br> Luxury Sedan",
  },
  {
    icon: "/images/single-car/detail-summery-usp-7.webp",
    title: "Drive ",
    description: "(RWD) <br> Rear Wheel Drive",
  },
  {
    icon: "/images/single-car/detail-summery-usp-8.webp",
    title: "Exterior Color",
    description: `Blue With <br> Shades of Silver`,
  },
];

let settings = {
  dots: false,
  infinite: true,
  speed: 700,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3000,
  canterMode: false,
};

const CarSummaryCard = ({ data }) => {
  return (
    <div className="py-8 rounded-2xl border border-neutral-400 px-5 mr-7 sm:border-0 sm:mr-0 xl:py-14 3xl:py-20 h-full">
      <img
        src={data.icon}
        alt="Icon"
        className="object-contain max-h-[2rem] xl:max-h-[4rem]"
      />
      <p className="mt-[2rem] text-[#989898] text-[1.2rem] xl:text-[2rem]">
        {data.title}
      </p>
      <p
        className="font-medium mt-[1rem] text-[1.5rem] xl:text-[2.8rem]"
        dangerouslySetInnerHTML={{ __html: data.description }}
      />
    </div>
  );
};

const CarSummary = () => {
  return (
    <div className="lg:pt-16 lg:pb-16 xl:py-28 2xl:py-36 3xl:py-52">
      <div className="container">
        <h6 className="flex items-center justify-between text-[2rem] xl:text-[4.8rem] mb-[2rem] pt-[3rem] border-t border-t-[#dddddd]">
         <span className="w-max"> <b>Car</b> Summary</span>
        </h6>
      </div>

      <div className="block sm:hidden">
        <Slider {...settings} className="details-summary-slider pl-8">
          {dummyData.map((data, index) => (
            <CarSummaryCard data={data} key={index} />
          ))}
        </Slider>
      </div>
      <div className="container hidden sm:block lg:mt-20 xl:mt-32 3xl:mt-48">
        <ul className="md:grid grid-cols-3 lg:grid-cols-4">
          {dummyData.map((data, index) => (
            <li
              key={index}
              className={` ${styles.carSummeryItem}`}
            >
              <CarSummaryCard data={data} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CarSummary;
