import React from "react";

const processList = [
  {
    thumbnail: "/images/list-cars/process-img-1.webp",
    icon: "/images/list-cars/process-icon-1.webp",
    title: "Share Your Car Details Quickly & Easily",
    description:
      "Provide essential information about your car in minutes. Our simple, fast form ensures we have everything needed to start your evaluation instantly.",
  },
  {
    thumbnail: "/images/list-cars/process-img-2.webp",
    icon: "/images/list-cars/process-icon-3.webp",
    title: "Get Instant Price & Schedule Free Inspection",
    description:
      "Receive an instant, transparent price and schedule a convenient, smooth, stress-free inspection.",
  },
  {
    thumbnail: "/images/list-cars/process-img-3.webp",
    icon: "/images/list-cars/process-icon-3.webp",
    title: "Fast and Secure Payment Directly to Your Bank",
    description:
      "Review and approve your car’s offer confidently and receive secure, same-day payment quickly, safely, & effortlessly.",
  },
];

const ProcessSection = () => {
  return (
    <section className="bg-white py-[6rem] lg:pb-[0] xl:pt-[13rem]">
      <div className="container">
        <div className="text-center">
          <h6 className="w-max mx-auto bg-white border border-[#333333] px-[3rem] pb-[0.5rem] pt-[0.8rem] text-[#333333] text-[1.3rem] uppercase rounded-[4rem] leading-[1.6] mb-[2rem] xl:text-[2rem] xl:mb-[3rem] font-medium lg:ml-0">
            The Process
          </h6>
          <h2 className="text-[#222222] leading-[1.3] text-[2.6rem] [&>br]:hidden md:[&>br]:block xl:text-[4.5rem] xl:leading-[1.2]">
            Making Every Step <b>Simple, Clear, and Easy</b>
          </h2>
          <p className="mt-[1rem] text-[#333333] xl:text-[2.2rem] xl:mt-[2rem]">
            From the start, we’ve focused on people — understanding their needs,
            exceeding expectations, and creating meaningful, lasting
            relationships.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
