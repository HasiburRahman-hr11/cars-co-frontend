import HeroBanner from "@/Components/CommonComponents/HeroBanner/HeroBanner";
import ProcessSection from "@/Components/ListCars/ProcessSection/ProcessSection";
import ShowreelSection from "@/Components/ListCars/ShowreelSection/ShowreelSection";
import WhyUs from "@/Components/ListCars/WhyUs/WhyUs";
import React from "react";

const ListCars = () => {
  return (
    <>
      <HeroBanner 
      pageTitle={'list Your Car'}
      bannerHeading={'Your Car Deserves More List It Smartly Today'}
      bannerImgDesktop={'/images/list-cars/banner.webp'}
      bannerImgMobile={'/images/list-cars/banner.webp'}
      />
      <WhyUs />
      <ShowreelSection />
      <ProcessSection />
    </>
  );
};

export default ListCars;
