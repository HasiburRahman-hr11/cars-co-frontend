"use client";
import BannerSection from "@/Components/SingleCar/BannerSection/BannerSection";
import BasicDetails from "@/Components/SingleCar/BasicDetails/BasicDetails";
import CarSummary from "@/Components/SingleCar/CarSummery/CarSummary";
import FinanceSection from "@/Components/SingleCar/FinanceSection/FinanceSection";
import OurShowrooms from "@/Components/SingleCar/OurShowrooms/OurShowrooms";
import RelatedCars from "@/Components/SingleCar/RelatedCars/RelatedCars";
import ShopByBrand from "@/Components/SingleCar/ShopByBrand/ShopByBrand";
import ShopByStyle from "@/Components/SingleCar/ShopByStyle/ShopByStyle";
import SpecificationsAccordion from "@/Components/SingleCar/SpecificationsAccordion/SpecificationsAccordion";
import SpecificationTabs from "@/Components/SingleCar/SpecificationTabs/SpecificationTabs";
import React, { useState } from "react";

const specifications = [
  {
    title: "Overview",
    icon: "/images/single-car/spec-icon-1.png",
    detailList: [
      {
        title: "Engine Displacement",
        description: "1993cc, Turbocharged, In-Line 4 Cyl, DOHC",
      },
      { title: "Power Figure", description: "197PS / 194BHP @ 3600 RPM" },
      {
        title: "Torque Figure+",
        description: "1993cc, Turbocharged, In-Line 4 Cyl, DOHC",
      },
      { title: "Drivetrain", description: "RWD" },
      {
        title: "Transmission",
        description: "1993cc, Turbocharged, In-Line 4 Cyl, DOHC",
      },
      {
        title: "Engine Displacement",
        description: "9G-TRONIC Automatic Transmission",
      },
    ],
  },
  {
    title: "Engine & Transmission",
    icon: "/images/single-car/spec-icon-2.png",
    detailList: [
      {
        title: "Engine Displacement",
        description: "1993cc, Turbocharged, In-Line 4 Cyl, DOHC",
      },
      { title: "Power Figure", description: "197PS / 194BHP @ 3600 RPM" },
      {
        title: "Torque Figure+",
        description: "1993cc, Turbocharged, In-Line 4 Cyl, DOHC",
      },
      { title: "Drivetrain", description: "RWD" },
      {
        title: "Transmission",
        description: "1993cc, Turbocharged, In-Line 4 Cyl, DOHC",
      },
      {
        title: "Engine Displacement",
        description: "9G-TRONIC Automatic Transmission",
      },
    ],
  },
  {
    title: "Hybrid System",
    icon: "/images/single-car/spec-icon-3.png",
    detailList: [
      {
        title: "Engine Displacement",
        description: "1993cc, Turbocharged, In-Line 4 Cyl, DOHC",
      },
      { title: "Power Figure", description: "197PS / 194BHP @ 3600 RPM" },
      {
        title: "Torque Figure+",
        description: "1993cc, Turbocharged, In-Line 4 Cyl, DOHC",
      },
      { title: "Drivetrain", description: "RWD" },
      {
        title: "Transmission",
        description: "1993cc, Turbocharged, In-Line 4 Cyl, DOHC",
      },
      {
        title: "Engine Displacement",
        description: "9G-TRONIC Automatic Transmission",
      },
    ],
  },
  {
    title: "Performance & Efficiency",
    icon: "/images/single-car/spec-icon-4.png",
    detailList: [
      {
        title: "Engine Displacement",
        description: "1993cc, Turbocharged, In-Line 4 Cyl, DOHC",
      },
      { title: "Power Figure", description: "197PS / 194BHP @ 3600 RPM" },
      {
        title: "Torque Figure+",
        description: "1993cc, Turbocharged, In-Line 4 Cyl, DOHC",
      },
      { title: "Drivetrain", description: "RWD" },
      {
        title: "Transmission",
        description: "1993cc, Turbocharged, In-Line 4 Cyl, DOHC",
      },
      {
        title: "Engine Displacement",
        description: "9G-TRONIC Automatic Transmission",
      },
    ],
  },
  {
    title: "Exterior Equipment",
    icon: "/images/single-car/spec-icon-5.png",
    detailList: [
      {
        title: "Engine Displacement",
        description: "1993cc, Turbocharged, In-Line 4 Cyl, DOHC",
      },
      { title: "Power Figure", description: "197PS / 194BHP @ 3600 RPM" },
      {
        title: "Torque Figure+",
        description: "1993cc, Turbocharged, In-Line 4 Cyl, DOHC",
      },
      { title: "Drivetrain", description: "RWD" },
      {
        title: "Transmission",
        description: "1993cc, Turbocharged, In-Line 4 Cyl, DOHC",
      },
      {
        title: "Engine Displacement",
        description: "9G-TRONIC Automatic Transmission",
      },
    ],
  },
  {
    title: "Interior Equipment",
    icon: "/images/single-car/spec-icon-6.png",
    detailList: [
      {
        title: "Engine Displacement",
        description: "1993cc, Turbocharged, In-Line 4 Cyl, DOHC",
      },
      { title: "Power Figure", description: "197PS / 194BHP @ 3600 RPM" },
      {
        title: "Torque Figure+",
        description: "1993cc, Turbocharged, In-Line 4 Cyl, DOHC",
      },
      { title: "Drivetrain", description: "RWD" },
      {
        title: "Transmission",
        description: "1993cc, Turbocharged, In-Line 4 Cyl, DOHC",
      },
      {
        title: "Engine Displacement",
        description: "9G-TRONIC Automatic Transmission",
      },
    ],
  },
  {
    title: "Seats & Upholstery",
    icon: "/images/single-car/spec-icon-7.png",
    detailList: [
      {
        title: "Engine Displacement",
        description: "1993cc, Turbocharged, In-Line 4 Cyl, DOHC",
      },
      { title: "Power Figure", description: "197PS / 194BHP @ 3600 RPM" },
      {
        title: "Torque Figure+",
        description: "1993cc, Turbocharged, In-Line 4 Cyl, DOHC",
      },
      { title: "Drivetrain", description: "RWD" },
      {
        title: "Transmission",
        description: "1993cc, Turbocharged, In-Line 4 Cyl, DOHC",
      },
      {
        title: "Engine Displacement",
        description: "9G-TRONIC Automatic Transmission",
      },
    ],
  },
  {
    title: "Entertainment Front",
    icon: "/images/single-car/spec-icon-8.png",
    detailList: [
      {
        title: "Engine Displacement",
        description: "1993cc, Turbocharged, In-Line 4 Cyl, DOHC",
      },
      { title: "Power Figure", description: "197PS / 194BHP @ 3600 RPM" },
      {
        title: "Torque Figure+",
        description: "1993cc, Turbocharged, In-Line 4 Cyl, DOHC",
      },
      { title: "Drivetrain", description: "RWD" },
      {
        title: "Transmission",
        description: "1993cc, Turbocharged, In-Line 4 Cyl, DOHC",
      },
      {
        title: "Engine Displacement",
        description: "9G-TRONIC Automatic Transmission",
      },
    ],
  },
  {
    title: "Entertainment Rear",
    icon: "/images/single-car/spec-icon-8.png",
    detailList: [
      {
        title: "Engine Displacement",
        description: "1993cc, Turbocharged, In-Line 4 Cyl, DOHC",
      },
      { title: "Power Figure", description: "197PS / 194BHP @ 3600 RPM" },
      {
        title: "Torque Figure+",
        description: "1993cc, Turbocharged, In-Line 4 Cyl, DOHC",
      },
      { title: "Drivetrain", description: "RWD" },
      {
        title: "Transmission",
        description: "1993cc, Turbocharged, In-Line 4 Cyl, DOHC",
      },
      {
        title: "Engine Displacement",
        description: "9G-TRONIC Automatic Transmission",
      },
    ],
  },
  {
    title: "Safety Equipment",
    icon: "/images/single-car/spec-icon-10.png",
    detailList: [
      {
        title: "Engine Displacement",
        description: "1993cc, Turbocharged, In-Line 4 Cyl, DOHC",
      },
      { title: "Power Figure", description: "197PS / 194BHP @ 3600 RPM" },
      {
        title: "Torque Figure+",
        description: "1993cc, Turbocharged, In-Line 4 Cyl, DOHC",
      },
      { title: "Drivetrain", description: "RWD" },
      {
        title: "Transmission",
        description: "1993cc, Turbocharged, In-Line 4 Cyl, DOHC",
      },
      {
        title: "Engine Displacement",
        description: "9G-TRONIC Automatic Transmission",
      },
    ],
  },
  {
    title: "Suspension, Brakes, Wheels & Tyres",
    icon: "/images/single-car/spec-icon-11.png",
    detailList: [
      {
        title: "Engine Displacement",
        description: "1993cc, Turbocharged, In-Line 4 Cyl, DOHC",
      },
      { title: "Power Figure", description: "197PS / 194BHP @ 3600 RPM" },
      {
        title: "Torque Figure+",
        description: "1993cc, Turbocharged, In-Line 4 Cyl, DOHC",
      },
      { title: "Drivetrain", description: "RWD" },
      {
        title: "Transmission",
        description: "1993cc, Turbocharged, In-Line 4 Cyl, DOHC",
      },
      {
        title: "Engine Displacement",
        description: "9G-TRONIC Automatic Transmission",
      },
    ],
  },
  {
    title: "Dimensions, Weight, Storage, Capacity",
    icon: "/images/single-car/spec-icon-12.png",
    detailList: [
      {
        title: "Engine Displacement",
        description: "1993cc, Turbocharged, In-Line 4 Cyl, DOHC",
      },
      { title: "Power Figure", description: "197PS / 194BHP @ 3600 RPM" },
      {
        title: "Torque Figure+",
        description: "1993cc, Turbocharged, In-Line 4 Cyl, DOHC",
      },
      { title: "Drivetrain", description: "RWD" },
      {
        title: "Transmission",
        description: "1993cc, Turbocharged, In-Line 4 Cyl, DOHC",
      },
      {
        title: "Engine Displacement",
        description: "9G-TRONIC Automatic Transmission",
      },
    ],
  },
  {
    title: "Warranty & Service Package",
    icon: "/images/single-car/spec-icon-13.png",
    detailList: [
      {
        title: "Engine Displacement",
        description: "1993cc, Turbocharged, In-Line 4 Cyl, DOHC",
      },
      { title: "Power Figure", description: "197PS / 194BHP @ 3600 RPM" },
      {
        title: "Torque Figure+",
        description: "1993cc, Turbocharged, In-Line 4 Cyl, DOHC",
      },
      { title: "Drivetrain", description: "RWD" },
      {
        title: "Transmission",
        description: "1993cc, Turbocharged, In-Line 4 Cyl, DOHC",
      },
      {
        title: "Engine Displacement",
        description: "9G-TRONIC Automatic Transmission",
      },
    ],
  },
  {
    title: "Exterior Colors",
    icon: "/images/single-car/spec-icon-14.png",
    detailList: [
      {
        title: "Engine Displacement",
        description: "1993cc, Turbocharged, In-Line 4 Cyl, DOHC",
      },
      { title: "Power Figure", description: "197PS / 194BHP @ 3600 RPM" },
      {
        title: "Torque Figure+",
        description: "1993cc, Turbocharged, In-Line 4 Cyl, DOHC",
      },
      { title: "Drivetrain", description: "RWD" },
      {
        title: "Transmission",
        description: "1993cc, Turbocharged, In-Line 4 Cyl, DOHC",
      },
      {
        title: "Engine Displacement",
        description: "9G-TRONIC Automatic Transmission",
      },
    ],
  },
];

const SingleCarPage = () => {
  const [slideScrolled, setSlideScrolled] = useState(false);
  return (
    <>
      <BannerSection
        setSlideScrolled={setSlideScrolled}
        slideScrolled={slideScrolled}
      />

      <section className="relative z-10 bg-white">
        <BasicDetails />
        <div className="max-1920">
          <CarSummary />

          <SpecificationTabs specifications={specifications} />

          <SpecificationsAccordion specifications={specifications} />
          <RelatedCars />
          <FinanceSection />
          <section className="bg-white py-[6rem] xl:py-[13rem]">
            <ShopByBrand />
            <ShopByStyle />
          </section>
          <OurShowrooms />
        </div>
      </section>
    </>
  );
};

export default SingleCarPage;
