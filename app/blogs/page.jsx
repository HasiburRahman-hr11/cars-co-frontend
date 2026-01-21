import AboutUs from "@/Components/Blogs/AboutUs/AboutUs";
import BannerSection from "@/Components/Blogs/BannerSection/BannerSection";
import BlogListing from "@/Components/Blogs/BlogListing/BlogListing";
import React from "react";

const page = () => {
  return (
    <>
      <BannerSection />
      <BlogListing />
      <AboutUs />
    </>
  );
};

export default page;
