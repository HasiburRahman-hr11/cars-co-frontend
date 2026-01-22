import React from "react";

const BannerSection = () => {
  return (
    <section className="bg-[#1B1A1D] text-white relative overflow-hidden">
      <div className="relative">
        <img
          src="/images/blog/banner-image.webp"
          width="1920"
          height="600"
          alt="Banner Image"
          className="hidden w-full h-full object-cover sm:block min-h-[500px]"
        />
        <img
          src="/images/blog/banner-image.webp"
          width="640"
          height="1280"
          alt="Banner Image"
          className="w-full object-cover block sm:hidden h-[90vh] min-h-[500px]"
        />
      </div>
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-end sm:justify-center pt-[12rem] pb-[7rem] bg-gradient-to-b from-[rgba(0,0,0,0.8)] to-[rgba(0,0,0,0.1)]">
        <div className="container text-center">
          <h6 className="w-max mx-auto  bg-white px-[3rem] pb-[0.5rem] pt-[0.8rem] text-black text-[1.3rem] uppercase rounded-[4rem] leading-[1.6] mb-[2rem] xl:text-[2rem] font-[500]">
            Frequently Asked <b> Questions</b>
          </h6>
          <h1 className="text-[#ffffff] text-[3rem] font-[500] leading-[1.3] xl:text-[6rem] lx:leading-[1.1] ">
            Hello, How we can help?
          </h1>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
