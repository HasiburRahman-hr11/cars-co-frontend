import React from "react";

const BannerSection = () => {
  return (
    <section className="bg-[#1B1A1D] text-white relative overflow-hidden">
      <div className="relative">
        <img
          src="/images/contact/banner-desktop.webp"
          width="1920"
          height="600"
          alt="Banner Image"
          className="hidden w-full h-full object-cover sm:block min-h-[500px]"
        />
        <img
          src="/images/contact/banner-desktop.webp"
          width="640"
          height="1280"
          alt="Banner Image"
          className="w-full object-cover block sm:hidden h-[90vh] min-h-[500px]"
        />
      </div>
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center pt-[12rem] pb-[7rem]">
        <div className="container ">
          <h6 className="w-max  bg-white px-[3rem] pb-[0.5rem] pt-[0.8rem] text-black text-[1.3rem] uppercase rounded-[4rem] leading-[1.6] mb-[2rem] xl:text-[2rem] font-[600]">
            Contact Us
          </h6>
          <h1 className="text-[#ffffff] text-[3rem] font-[500] leading-[1.3] xl:text-[6rem] lx:leading-[1.1] ">
            Get in Touch
          </h1>
          <p className="mt-[1rem] text-white xl:text-[2.2rem] xl:mt-[2rem]">
            This may be beginning of our journey
          </p>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
