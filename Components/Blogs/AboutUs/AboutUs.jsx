"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import Link from "next/link";

const AboutUs = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="py-[6rem] xl:py-[13rem] bg-gradient-to-b from-[rgba(0,0,0)] to-[#161616]">
      <div className="container">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-[500px] md:max-w-full">
          <div className="w-full text-center md:w-[48%] md:text-left">
            <h6
              className="w-max mx-auto bg-[#202020] px-[3rem] pb-[0.5rem] pt-[0.8rem] text-[#AEAEAE] text-[1.3rem] uppercase rounded-[4rem] leading-[1.6] mb-[2rem] xl:text-[2rem] xl:mb-[3rem] font-medium md:ml-0"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="500"
            >
              The Process
            </h6>
            <h2
              className="text-white leading-[1.3] text-[2.6rem] [&>br]:hidden md:[&>br]:block xl:text-[4.5rem] xl:leading-[1.2]"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="500"
            >
              Learn our story and the vision <b>guiding our every step.</b>
            </h2>
            {/* Thumbnail Image For Mobile */}
            <img
              src="/images/blog/about-us-thumb.webp"
              alt="Featured Image"
              className="w-full object-cover block rounded-[1rem] mt-[3rem] md:hidden"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="500"
            />
            {/* Thumbnail Image For Mobile */}
            <p
              className="mt-[2rem] text-[#818181] xl:text-[2.2rem] xl:mt-[3rem]"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="500"
            >
              We are committed to delivering quality, innovation, and trust. Our
              team works passionately to provide exceptional experiences,
              ensuring every customer feels valued, supported, and confident in
              choosing us for their needs.
            </p>
            <div
              className="w-max mx-auto md:ml-0"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="500"
            >
              <Link
                href="/about-us"
                className="inline-block bg-[#FE0000] text-white text-[1.5rem] px-[3rem] py-[1.3rem]  rounded-[5rem] mt-[3rem] xl:text-[2.2rem] xl:py-[1.8rem] xl:px-[6rem] hover:bg-white hover:text-black transition-all duration-500 xl:mt-[5rem]"
              >
                About Us
              </Link>
            </div>
          </div>
          <div
            className="hidden md:block md:w-[40%]"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="500"
          >
            <img
              src="/images/blog/about-us-thumb.webp"
              alt="Featured Image"
              className="w-full object-cover block rounded-[1rem] xl:rounded-[2.8rem]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
