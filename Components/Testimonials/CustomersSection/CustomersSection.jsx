"use client";
import React, { useEffect } from "react";
import AOS from "aos";

const usps = [
  {
    icon: "/images/testimonials/customer-usp-1.webp",
    title: "10,000+",
    subtitle: "Happy Clients",
  },
  {
    icon: "/images/testimonials/customer-usp-2.webp",
    title: "98%",
    subtitle: "Customer Satisfaction",
  },
  {
    icon: "/images/testimonials/customer-usp-3.webp",
    title: "15+",
    subtitle: "Years of Experience",
  },
  {
    icon: "/images/testimonials/customer-usp-4.webp",
    title: "24/7",
    subtitle: "Support Availability",
  },
];

const CustomersSection = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="bg-[#101010] py-[6rem] overflow-hidden xl:py-[13rem]">
      <div className="container">
        <div className="flex flex-wrap justify-between max-w-[540px] mx-auto lg:max-w-full">
          <div
            className="w-full text-center lg:w-[46%] lg:text-left"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="500"
          >
            <h6 className="w-max mx-auto bg-[#202020] px-[3rem] py-[1.4rem] text-[#AEAEAE] text-[1.3rem] uppercase rounded-[4rem] leading-1 mb-[2rem] xl:text-[2rem] xl:leading-[1] xl:mb-[3rem] lg:ml-0">
              Our Customers
            </h6>
            <h2 className="text-white leading-[1.3] text-[2.6rem] [&>br]:hidden md:[&>br]:block xl:text-[4.5rem] xl:leading-[1.2]">
              Trusted by Thousands, <br /> <b>Loved for Excellence</b>
            </h2>
            <p className="mt-[1rem] text-[#818181] xl:text-[2.2rem] xl:mt-[2rem]">
              List your car with us and experience a faster, smarter, and
              hassle-free selling journey. Enjoy maximum visibility, instant
              price evaluations, secure transactions, and professional support
              that ensures you get the best value effortlessly.
            </p>
            <img
              src="/images/list-cars/why-us-logo.webp"
              alt=""
              className="object-contain max-w-[20rem] inline-block mx-auto mt-[5rem] xl:max-w-[27rem] xl:mt-[10rem]"
            />
          </div>
          <div className="w-full lg:w-[45%]">
            <ul className="list-none grid grid-cols-2 gap-[2rem] mt-[5rem] lg:mt-0 lg:pb-[6rem] xl:gap-[3rem]">
              {usps.map((usp, index) => (
                <li
                  key={index}
                  className="text-center bg-[#212121] flex flex-col items-center py-[3rem] px-[1rem] rounded-[1rem] text-white lg:even:translate-y-[6rem] lg:text-left lg:items-start lg:px-[2.5rem] xl:pt-[5rem] xl:pb-[4rem] xl:pl-[4rem]"
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="500"
                >
                  <img
                    src={usp.icon}
                    alt="USP Icon"
                    className="object-contain w-[6rem] h-[6rem] xl:w-[7.2rem] xl:h-[7.2rem]"
                  />
                  <h6 className="block font-[600] mt-[2rem] text-[2.5rem] xl:text-[5.5rem]">
                    {usp.title}
                  </h6>
                  <span className="block mt-[1rem] font-medium text-[1.8rem] xl:text-[2.8rem]">
                    {usp.subtitle}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomersSection;
