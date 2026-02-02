import React from "react";
import HeroBanner from "@/Components/CommonComponents/HeroBanner/HeroBanner";
import CommonVideoBox from "@/Components/CommonComponents/CommonVideoBox/CommonVideoBox";
import WhyUs from "@/Components/WhyUs/WhyUs/WhyUs";
import ProcessSection from "@/Components/WhyUs/ProcessSection/ProcessSection";
import BuyYourCar from "@/Components/WhyUs/BuyYourCar/BuyYourCar";
import ReviewsSection from "@/Components/CommonComponents/ReviewsSection/ReviewsSection";
import ShowroomSection from "@/Components/CommonComponents/ShowroomSection/ShowroomSection";

const reviews = [
  {
    reviewType: "text",
    reviewText:
      "The process was incredibly smooth and simple. I received a fair price instantly and the team made everything effortless.",
    name: "Prince Narula",
    designation: "Actor",
    avatar: "/images/testimonials/written-review-avatar-1.webp",
  },
  {
    reviewType: "video",
    videoUrl: "/videos/rolls-video.mp4",
    thumbnail: "/images/buy-cars/video-review-1.webp",
    name: "Deepinder Goyal",
    designation: "CEO of Zomato",
  },
  {
    reviewType: "text",
    reviewText:
      "I loved how transparent and quick the entire process was. From sharing details to payment, everything was seamless!",
    name: "Yuvika Chaudhary",
    designation: "Actor",
    avatar: "/images/testimonials/written-review-avatar-3.webp",
  },
  {
    reviewType: "video",
    videoUrl: "/videos/rolls-video.mp4",
    thumbnail: "/images/buy-cars/video-review-2.webp",
    name: "John Abraham",
    designation: "Actor",
  },
  {
    reviewType: "text",
    reviewText:
      "Highly recommend! The team was professional, friendly, and made sure I understood every step. Truly stress-free experience.",
    name: "Neha Dhupia",
    designation: "Actor",
    avatar: "/images/testimonials/written-review-avatar-4.webp",
  },
  {
    reviewType: "video",
    videoUrl: "/videos/rolls-video.mp4",
    thumbnail: "/images/buy-cars/video-review-3.webp",
    name: "Aman Gupta",
    designation: "CEO of Boat",
  },
];

const BuyCars = () => {
  return (
    <>
      <HeroBanner
        pageTitle={"Your Next Car Awaits"}
        bannerHeading={`Buy Smarter, Drive Better — Today`}
        bannerImgDesktop={"/images/buy-cars/banner-image.webp"}
        bannerImgMobile={"/images/buy-cars/banner-image.webp"}
      />

      <WhyUs />

      <CommonVideoBox
        data={{
          subHeading: "The Buying Experience",
          heading: `Enjoy the Journey <b>— Not Just the Car</b>`,
          description: `When trust, transparency, and technology meet, buying a car becomes exciting — not stressful.`,
          thumbnail: "/images/buy-cars/showreel-thumb.webp",
          video: "/videos/showroom-video.mp4",
        }}
      />
      <ProcessSection />
      <BuyYourCar />
      <ReviewsSection reviews={reviews} />
      <ShowroomSection />
    </>
  );
};

export default BuyCars;
