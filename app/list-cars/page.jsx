import CommonVideoBox from "@/Components/CommonComponents/CommonVideoBox/CommonVideoBox";
import HeroBanner from "@/Components/CommonComponents/HeroBanner/HeroBanner";
import ShowroomSection from "@/Components/CommonComponents/ShowroomSection/ShowroomSection";
import ListYourCar from "@/Components/ListCars/ListYourCar/ListYourCar";
import ProcessSection from "@/Components/ListCars/ProcessSection/ProcessSection";
import ReviewsSection from "@/Components/ListCars/ReviewsSection/ReviewsSection";
import WhyUs from "@/Components/ListCars/WhyUs/WhyUs";
import React from "react";

const ListCars = () => {
  return (
    <>
      <HeroBanner
        pageTitle={"list Your Car"}
        bannerHeading={`Your Car Deserves More <br> List It Smartly Today`}
        bannerImgDesktop={"/images/list-cars/banner.webp"}
        bannerImgMobile={"/images/list-cars/banner.webp"}
      />
      <WhyUs />
      <CommonVideoBox
        data={{
          subHeading: "How It Works",
          heading: `Watch The <b>Listing Car Experience</b>`,
          description: `From the start, we’ve focused on people — understanding their needs, exceeding expectations, and creating meaningful, lasting relationships.`,
          thumbnail: '/images/list-cars/showreel-video-thumb.webp',
          video: '/videos/showroom-video.mp4'
        }}
      />
      <ProcessSection />
      <ListYourCar />
      <ReviewsSection />
      <ShowroomSection />
    </>
  );
};

export default ListCars;
