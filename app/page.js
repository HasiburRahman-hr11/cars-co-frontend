import ListCarStickyBar from "@/Components/CommonComponents/ListCarStickyBar/ListCarStickyBar";
import BannerSection from "@/Components/Homepage/BannerSection/BannerSection";
import LatestAdditions from "@/Components/CommonComponents/LatestAdditions/LatestAdditions";
// import OurShowrooms from "@/Components/Homepage/OurShowrooms/OurShowrooms";
import ProcessSection from "@/Components/Homepage/ProcessSection/ProcessSection";
import ListYourCar from "@/Components/Homepage/SellYourCar/ListYourCar";

import VideoTestimonials from "@/Components/Homepage/VideoTestimonials/VideoTestimonials";
// import WhyUs from "@/Components/Homepage/WhyUs/WhyUs";
import WrittenTestimonials from "@/Components/Homepage/WrittenTestimonials/WrittenTestimonials";
import React from "react";
import ListCarStickyBarMobile from "@/Components/CommonComponents/ListCarStickyBarMobile/ListCarStickyBarMobile";

const page = () => {
  return (
    <>
      <BannerSection />
      {/* <WhyUs /> */}
      <div id="showStickyBar">
        <LatestAdditions />
        <VideoTestimonials />
        <ProcessSection />
        <ListYourCar />
        {/* <OurShowrooms /> */}
        <WrittenTestimonials />
      </div>
      <ListCarStickyBar />
      <ListCarStickyBarMobile />
    </>
  );
};

export default page;
