import HeroBanner from "@/Components/CommonComponents/HeroBanner/HeroBanner";
import ListYourCar from "@/Components/ListCars/ListYourCar/ListYourCar";
import ProcessSection from "@/Components/ListCars/ProcessSection/ProcessSection";
import ReviewsSection from "@/Components/ListCars/ReviewsSection/ReviewsSection";
import ShowreelSection from "@/Components/ListCars/ShowreelSection/ShowreelSection";
import ShowroomSection from "@/Components/ListCars/ShowroomSection/ShowroomSection";
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
      <ListYourCar />
      <ReviewsSection />
      <ShowroomSection />
    </>
  );
};

export default ListCars;
