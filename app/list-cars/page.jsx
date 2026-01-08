import HeroBanner from "@/Components/CommonComponents/HeroBanner/HeroBanner";
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
    </>
  );
};

export default ListCars;
